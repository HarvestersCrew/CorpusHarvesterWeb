<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Corpus Harvester</v-toolbar-title>
            </v-toolbar>

            <v-form @submit.prevent="connect">
              <v-card-text>
                <v-text-field
                  autofocus
                  clearable
                  persistent-hint
                  hint="URL of the Harvester server"
                  label="URL"
                  v-model="url"
                  :error-messages="$store.state.socket.error ? error_msg : ''"
                  prefix="ws://"
                  :disabled="$store.state.socket.connecting"
                />
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary"
                  @click="connect"
                  :loading="$store.state.socket.connecting"
                  >Connect</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
export default {
  data() {
    return {
      url: "",
      error_msg: "Can't connect to given socket"
    };
  },
  name: "Login",
  mounted() {
    if (localStorage.harvester_socket !== undefined) {
      this.url = localStorage.harvester_socket.split("ws://")[1];
      this.connect();
    }
  },
  methods: {
    connect() {
      this.$store.dispatch("connect_server", this.url);
    }
  }
};
</script>
