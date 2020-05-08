<template>
  <Bar>
    <v-container>
      <v-row justify="center" class="my-4">
        <v-col cols="12" sm="8" md="7" lg="6">
          <v-card>
            <v-row justify="center">
              <v-img
                src="../assets/moissonneuse.png"
                contain
                max-width="237px"
              ></v-img>
            </v-row>
            <v-card-title>Corpus Harvester</v-card-title>
            <v-card-text>
              <div class="mb-4">
                This tool was made with love by a team of seven students from a
                french CS engineering school as a class project.
              </div>
              <div class="my-4">
                It is available on
                <a href="https://github.com/HarvestersCrew" target="_blank"
                  >Github</a
                >
                and is licensed under the
                <a
                  href="https://github.com/HarvestersCrew/CorpusHarvester/blob/master/LICENSE"
                  target="_blank"
                  >GNU GPL v3.0</a
                >
                license. It is divided in two projects:
                <a
                  href="https://github.com/HarvestersCrew/CorpusHarvester"
                  target="_blank"
                  >the engine</a
                >
                which does the heavy-lifting, and the
                <a
                  href="https://github.com/HarvestersCrew/CorpusHarvesterWeb"
                  target="_blank"
                  >web client</a
                >
                which you are currently using.
              </div>
              <div class="my-4">
                Any person wishing to help develop this project is welcomed. It
                is as simple as referencing new issues as you encounter them, or
                fixing those issues or adding new complex feature and making
                pull requests.<br />
                Anyone is also free to use this program however it suits them,
                provided they respect the given license above.
              </div>
              <div class="my-4">
                Thanks for using the Corpus Harvester!
              </div>
              <div class="mt-4 mr-4 text-right title">
                The HarvestersCrew
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                dark
                target="_blank"
                color="blue"
                href="https://github.com/HarvestersCrew"
              >
                Github
                <v-icon right>mdi-github</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Bar>
</template>

<script>
import Bar from "@/components/Bar.vue";
export default {
  name: "Team",
  components: { Bar }
};
</script>
