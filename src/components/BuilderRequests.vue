<template>
  <v-expansion-panels hover multiple tile accordion>
    <v-expansion-panel v-for="(request, idx) in requests" :key="idx">
      <v-expansion-panel-header>{{ request.api }}</v-expansion-panel-header>
      <v-expansion-panel-content eager>
        <v-container>
          <v-row align="start">
            <v-col
              cols="12"
              md="6"
              lg="3"
              v-for="(param, name) in request.params"
              :key="name"
            >
              <ApiParamInput
                :param="param"
                :disabled="disabled"
                :builder_type="builder_type"
                :op="request.ops[name]"
                v-model="request.values[name]"
                @op_change="request.ops[name] = $event"
              ></ApiParamInput>
            </v-col>
            <v-col cols="12" md="6" lg="3" class="mt-4 text-right">
              <v-btn
                :disabled="disabled"
                color="red"
                text
                :dark="!disabled"
                @click="$emit('remove_request', idx)"
                >Remove</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import ApiParamInput from "@/components/ApiParamInput.vue";
export default {
  name: "BuilderRequests",
  components: { ApiParamInput },
  props: {
    requests: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    },
    builder_type: { required: true, type: String }
  }
};
</script>
