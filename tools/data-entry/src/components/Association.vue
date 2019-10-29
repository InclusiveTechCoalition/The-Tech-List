<template>
  <v-container>
    <h3>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn color="warning" fab x-small v-on="on" @click.stop="deleteData()">
            <v-icon>mdi-close-circle</v-icon>
          </v-btn>
        </template>
        <span>Delete</span>
      </v-tooltip>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" fab x-small v-on="on" @click.stop="copyData()">
            <v-icon>mdi-plus-circle-multiple-outline</v-icon>
          </v-btn>
        </template>
        <span>Copy</span>
      </v-tooltip>
      {{(data.name) ? `${data.name} ${data.start_year ? `(${data.start_year})` : ''}` : '...'}}
    </h3>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field v-model="data.name" label="Group name"/>
        </v-col>
        <v-col>
          <v-text-field v-model="data.type" label="Type of group"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-textarea v-model="data.description" label="Details"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="Began (year)" v-model="data.start_year"/>
        </v-col>
        <v-col>
          <v-text-field label="Ended (year)" v-model="data.end_year"/>
        </v-col>
      </v-row>
      <v-row>
        <Location v-bind="data.location"></Location>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
  import Location from "./Location";

  export default {
    name: "Association",
    components: {
      Location
    },
    props: {
      list: Array,
      data: Object
    },
    methods: {
      deleteData: function () {
        const index = this.list.indexOf(this.data);
        this.list.splice(index, 1);
      },
      copyData: function () {
        const index = this.list.indexOf(this.data);
        const duplicate = {...this.data};
        this.list.splice(index, 0, duplicate);
      }
    }
  }
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .v-btn {
    margin-right: 0.25em;
  }
</style>
