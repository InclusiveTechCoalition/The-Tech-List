<template>
  <v-container>
    <h3>
    <v-btn color="primary" fab x-small @click.stop="deleteAccomplishment()">
      <v-icon>mdi-close-circle</v-icon>
    </v-btn>
    {{(accomplishment.year || accomplishment.type) ? `${accomplishment.type} (${accomplishment.year})` : '...'}}</h3>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field v-model="accomplishment.type" label="type" />
        </v-col>
        <v-col>
          <v-text-field v-model="accomplishment.year" label="year" />
        </v-col>
        <v-col>
          <v-text-field v-model="accomplishment.short_description" label="short summary" />
        </v-col>
      </v-row>
      <v-row>
        <v-textarea label="details" v-model="accomplishment.description" />
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
    deleteAccomplishment: function(){
      const index = this.list.indexOf(this.accomplishment);
      this.list.splice(index, 1);
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
