<template>
 <v-toolbar>
  <v-toolbar-title>Football Pitch SVG Generator</v-toolbar-title>
   <v-btn icon="mdi-github" @click="goToGitHubPage()"></v-btn>
 </v-toolbar>
  <HelloWorld />
</template>

<script lang="ts" setup>
  const goToGitHubPage = (): void => {
    window.open("https://github.com/manuelarte/footballpitchsvggenerator")
  }
</script>
