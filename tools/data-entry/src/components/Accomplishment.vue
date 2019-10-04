<template>
  <v-container>
    <h2>{{`${year} ${type}`}}</h2>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field v-model="type" label="type" v-on:input="$emit('data', props)"/>
        </v-col>
        <v-col>
          <v-text-field v-model="year" label="year" v-on:input="$emit('data', props)"/>
        </v-col>
        <v-col>
          <v-text-field v-model="short_description" label="short summary" v-on:input="$emit('data', props)"/>
        </v-col>
      </v-row>
      <v-row>
        <v-textarea label="details" v-model="description" v-on:input="$emit('data', props)"/>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'Accomplishment',
  props: {
    year: Number,
    type: String,
    description: String,
    short_description: String
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
