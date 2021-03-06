import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import randomstring from "randomstring";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    home_page: "Files",
    redirect_page: undefined,

    socket: {
      url: undefined,
      port: 80,
      is_connected: false,
      connecting: false,
      error: false
    },

    tokenized_request: {},

    first_init_done: false,

    notifications: [],

    builders: {
      requests: {
        web: [],
        db: []
      },
      number: {
        web: undefined,
        db: undefined
      },
      disabled: {
        web: false,
        db: false
      },
      files: {
        web: [],
        db: []
      }
    },

    corpuses: {
      results: [],
      search_text: "",
      order: "date_desc",
      disabled: false
    },

    logs: {
      unread: 0,
      messages: []
    },

    logger_settings: {
      level: undefined,
      output: undefined,
      output_path: undefined
    },

    storage: {
      path: undefined,
      file_server_port: undefined
    },

    apis: []
  },

  getters: {
    api_types: state => [...new Set(state.apis.map(api => api.api_type))],
    api_by_name: state => name => state.apis.find(el => el.name === name),
    file_server_url: state =>
      "http://" + state.socket.url + ":" + state.storage.file_server_port + "/",
    full_file_server_url: (state, getters) => relative_path =>
      getters.file_server_url + relative_path
  },

  mutations: {
    SOCKET_ONOPEN(state, event) {
      Vue.prototype.$socket = event.currentTarget;

      let regex = /^ws:\/\/([^:/]+)(:(\d+))*\/*$/g;
      let match = regex.exec(event.currentTarget.url);
      state.socket.url = match[1];
      if (match[3] !== undefined) {
        state.socket.port = match[3];
      }

      localStorage.harvester_socket = event.currentTarget.url;
      state.socket.is_connected = true;
      state.socket.connecting = false;
      state.socket.error = false;
      router.push({
        name:
          state.redirect_page !== undefined
            ? state.redirect_page
            : state.home_page
      });
    },
    SOCKET_ONCLOSE(state) {
      state.socket.is_connected = false;
      state.socket.connecting = false;
      state.socket.url = undefined;
      state.socket.port = 80;
    },
    SOCKET_ONERROR(state, event) {
      console.error(state, event);
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE(state, obj) {
      if (obj.type !== undefined) {
        switch (obj.type) {
          case "refresh_apis":
            state.notifications.push({
              msg:
                "APIs have been refreshed, beware of incompatibilities with your current selections",
              color: undefined,
              dark: true
            });
            state.apis = obj.data;
            break;

          case "get_apis":
            state.apis = obj.data;
            break;

          case "logger":
            state.logs.messages.push(obj.data.message);
            state.logs.unread++;
            break;

          case "get_logger_infos":
            state.logger_settings.level = obj.data.level;
            state.logger_settings.output = obj.data.output;
            state.logger_settings.output_path = obj.data.output_path;
            break;

          case "get_storage_infos":
            state.storage.path = obj.data.storage_path;
            state.storage.file_server_port = obj.data.port;
            break;

          case "api_builder_query":
            if (obj.data.is_web) state.builders.files.web = obj.data.files;
            else state.builders.files.db = obj.data.files;
            break;

          case "get_corpuses":
            state.corpuses.results = obj.data.corpuses;
            break;

          case "set_corpus_title":
            if (obj.type !== undefined && obj.type !== "error") {
              state.corpuses.results.forEach(corp => {
                if (corp.id === obj.data.id) corp.title = obj.data.title;
              });
            }
            break;

          case "delete_corpus":
            if (obj.type !== undefined && obj.type !== "error") {
              state.corpuses.results = state.corpuses.results.filter(
                corp => corp.id !== obj.data.id
              );
            }
            break;

          case "export_corpus":
            if (obj.type !== undefined && obj.type !== "error") {
              state.corpuses.results.forEach(corp => {
                if (corp.id === obj.data.id) {
                  corp.extraction_path = obj.data.path;
                  corp.extraction_size = obj.data.size;
                }
              });
            }
            state.notifications.push({
              msg:
                "Corpus #" +
                obj.data.id +
                " has been successfully exported, you can now download it",
              color: "green",
              dark: true
            });
            break;

          default:
            break;
        }

        if (obj.token !== undefined && obj.token in state.tokenized_request) {
          if (state.tokenized_request[obj.token] !== undefined) {
            state.tokenized_request[obj.token](obj);
          }
          delete state.tokenized_request[obj.token];
        }
      }
    },

    set_socket_connecting(state, boolval) {
      state.socket.connecting = boolval;
    },

    set_first_init_done(state, boolval) {
      state.first_init_done = boolval;
    },

    set_redirect_page(state, val) {
      state.redirect_page = val;
    },

    clear_unread_logs(state) {
      state.logs.unread = 0;
    },

    add_tokenized_request(state, { callback, token }) {
      state.tokenized_request[token] = callback;
    },

    clear_state(state) {
      state.redirect_page = undefined;
      state.tokenized_request = {};
      state.logs = {
        unread: 0,
        messages: []
      };
      state.logger_settings = {
        level: undefined,
        output: undefined,
        output_path: undefined
      };
      state.storage = {
        path: undefined
      };
      state.apis = undefined;
      localStorage.harvester_socket = undefined;
    },

    add_notification(state, msg) {
      state.notifications.push({ msg, color: undefined, dark: true });
    },

    add_custom_notification(state, { msg, color, dark }) {
      state.notifications.push({ msg, color, dark });
    },

    add_success_notification(state, msg) {
      state.notifications.push({ msg, color: "green", dark: true });
    },

    add_error_notification(state, msg) {
      state.notifications.push({ msg, color: "red", dark: true });
    },

    pop_notification(state) {
      state.notifications.shift();
    }
  },

  actions: {
    send_obj: function(context, obj) {
      Vue.prototype.$socket.sendObj(obj);
    },

    send_request: (context, { type, data }) => {
      let obj = { request: type };
      if (Object.keys(data).length !== 0) {
        obj["data"] = data;
      }
      context.dispatch("send_obj", obj);
    },

    send_tokenized_request: (context, { type, data, callback }) => {
      let obj = { request: type, token: randomstring.generate(7) };
      if (Object.keys(data).length !== 0) {
        obj["data"] = data;
      }
      context.commit("add_tokenized_request", {
        callback: callback,
        token: obj.token
      });
      context.dispatch("send_obj", obj);
    },

    connect_server: (context, val) => {
      context.commit("set_socket_connecting", true);
      Vue.prototype.$connect("ws://" + val);
    },

    disconnect_server(context) {
      context.commit("clear_state");
      Vue.prototype.$disconnect();
      router.push({
        name: "Login"
      });
    }
  },

  modules: {}
});
