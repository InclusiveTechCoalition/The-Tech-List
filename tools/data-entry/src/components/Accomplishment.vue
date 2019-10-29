<template>
  <v-container>
    <h3>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn color="warning" fab x-small v-on="on" @click.stop="deleteAccomplishment()">
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
      {{(accomplishment.year || accomplishment.type) ? `${accomplishment.type} (${accomplishment.year})` : '...'}}
    </h3>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field v-model="accomplishment.type" label="type"/>
        </v-col>
        <v-col>
          <v-text-field v-model="accomplishment.year" label="year"/>
        </v-col>
        <v-col>
          <v-text-field v-model="accomplishment.short_description" label="short summary"/>
        </v-col>
      </v-row>
      <v-row>
        <v-textarea label="details" v-model="accomplishment.description"/>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    name: 'Accomplishment',
    props: {
      list: Array,
      accomplishment: Object,
    },
    methods: {
      deleteAccomplishment: function () {
        const index = this.list.indexOf(this.accomplishment);
        this.list.splice(index, 1);
      },
      copy: function () {
        const index = this.list.indexOf(this.accomplishment);
        const duplicate = {...this.accomplishment};
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

  .v-btn {
    margin-right: 0.25em;
  }
</style>
