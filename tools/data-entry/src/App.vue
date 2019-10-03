<template>
    <v-app>
        <MainForm></MainForm>
    </v-app>
</template>

<script>
  import MainForm from '@/components/MainForm.vue'

  export default {
    name: "App.vue",
    components: {
      'MainForm': MainForm
    }
  }
</script>

<style scoped>

</style>
