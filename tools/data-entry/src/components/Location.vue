<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <span>Location</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col>
            <v-text-field label="Country (full official name)" placeholder="United States of America" v-model="data.country_full_name"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field label="Country (common name)" placeholder="America" v-model="data.country_common_name"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field label="Country (abbreviation)" placeholder="USA" v-model="data.country_abbreviation"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field label="Region Name" v-model="data.region"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field label="Type of Region" placeholder="State, territory, etc" v-model="data.country_common_name"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field label="Region (abbreviation)" v-model="data.country_abbreviation"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field label="City or metro area" v-model="data.metro_area"></v-text-field>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
  export default {
    name: "Location",
    props: {
      data: Object
    }
  }
</script>

<style scoped>

</style>
