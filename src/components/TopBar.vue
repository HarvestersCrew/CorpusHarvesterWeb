<template>
  <v-system-bar
    app
    window
    height="32px"
    :dark="current_data.dark"
    :color="current_data.color"
  >
    <v-icon>{{ current_data.icon }}</v-icon>
    <span>{{ current_data.title }}</span>
    <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-icon
          :color="$store.state.socket.is_connected ? 'white' : 'red'"
          v-on="on"
          >{{
            $store.state.socket.is_connected
              ? "mdi-lan-connect"
              : "mdi-lan-disconnect"
          }}</v-icon
        >
      </template>
      <span>{{
        $store.state.socket.is_connected ? "Connected" : "Not connected"
      }}</span>
    </v-tooltip>
  </v-system-bar>
</template>
<script>
export default {
  name: "TopBar",
  data() {
    return {
      default_values: {
        dark: true,
        color: "blue",
        title: "Corpus Harvester",
        icon: ""
      },
      Logs: { color: "black", icon: "mdi-clipboard-alert", title: "Logs" },
      Files: { icon: "mdi-pencil", title: "Files" },
      Download: { icon: "mdi-file-download", title: "Download" },
      Corpus: { icon: "mdi-folder", title: "Corpus" },
      Settings: { icon: "mdi-cog", title: "Settings" },
      Info: { icon: "mdi-information-outline", title: "Informations" }
    };
  },
  computed: {
    current_data: function() {
      let data = this.default_values;
      let current_route = this.$router.currentRoute.name;
      if (this[current_route] !== undefined) {
        for (let [key, val] of Object.entries(this[current_route])) {
          data[key] = val;
        }
      }
      return data;
    }
  }
};
</script>
