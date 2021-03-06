<template>
  <v-expansion-panels accordion hover :flat="flat" class="mt-4">
    <v-expansion-panel v-for="(item, index) in files" :key="index">
      <v-expansion-panel-header>
        <v-row dense>
          <v-col cols="auto" align-self="center">
            {{ filename(item) }}
          </v-col>
          <v-col class="font-weight-light" align-self="center"
            >#{{ item.id }}</v-col
          >
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col
            cols="auto"
            class="mx-4"
            v-for="(tag, key) in item.tags"
            :key="key"
            align-self="center"
          >
            <div class="font-weight-bold">{{ key }}</div>
            <div>{{ tag }}</div>
          </v-col>

          <v-col cols="auto" class="mx-4" align-self="center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  v-on="on"
                  target="_blank"
                  :href="
                    $store.getters.full_file_server_url(
                      file_relative_path(item)
                    )
                  "
                >
                  <v-icon>mdi-download</v-icon>
                </v-btn>
              </template>
              <span>Retrieve file</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
import { bytes_conversion } from "@/mixins/bytes_conversion.js";
export default {
  name: "FilesListing",
  props: {
    files: { required: true, type: Array },
    flat: { type: Boolean, default: false }
  },
  mixins: [bytes_conversion],
  methods: {
    api_type(api_name) {
      return this.$store.getters.api_by_name(api_name).api_type;
    },
    item_size(size) {
      return this.bytes_conversion_string(size);
    },
    filename(file) {
      return file.name + "." + file.format;
    },
    file_relative_path(file) {
      return file.path + this.filename(file);
    }
  }
};
</script>
