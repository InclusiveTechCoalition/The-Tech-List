<template>
  <v-container>
    <h3>
      <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn color="warning" fab x-small v-on="on" @click.stop="deleteEdu()">
          <v-icon>mdi-close-circle</v-icon>
        </v-btn>
      </template>
      <span>Delete</span>
      </v-tooltip>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" fab x-small v-on="on" @click.stop="copy()">
            <v-icon>mdi-plus-circle-multiple-outline</v-icon>
          </v-btn>
        </template>
        <span>Copy</span>
      </v-tooltip>
      {{(education.institution) ? `${education.institution} ${education.end_year ? `(${education.end_year})` : ''}` : '...'}}
    </h3>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field v-model="education.institution" label="Institution"/>
        </v-col>
        <v-col>
          <v-text-field v-model="education.field_of_study" label="Field of study"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field v-model="education.degree_title" label="Degree or title"/>
        </v-col>
        <v-col>
          <v-text-field label="Began (year)" v-model="education.start_year"/>
        </v-col>
        <v-col>
          <v-text-field label="Ended (year)" v-model="education.end_year"/>
        </v-col>
      </v-row>
      <v-row>
        <Location v-bind="education.location"></Location>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
  import Location from "./Location";

  export default {
    name: 'Education',
    components: {
      Location
    },
    props: {
      list: Array,
      education: Object
    },
    methods: {
      deleteEdu: function () {
        const index = this.list.indexOf(this.education);
        this.list.splice(index, 1);
      },
      copy: function () {
        const index = this.list.indexOf(this.education);
        const duplicate = {...this.education};
        this.list.splice(index, 0, duplicate);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
</style>
