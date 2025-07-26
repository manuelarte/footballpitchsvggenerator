<template>
  <v-toolbar>
    <v-toolbar-title>Football Pitch SVG Generator</v-toolbar-title>
    <v-btn icon="mdi-github" @click="goToGitHubPage()" />
  </v-toolbar>
  <PitchCustomization
    @update:height="onHeightUpdated"
    @update:width="onWidthUpdated"
  />
</template>

<script lang="ts" setup>

  const onHeightUpdated = (newHeight: number): void => {
    console.log('New height', newHeight)
  }

  const onWidthUpdated = (newWeight: number): void => {
    console.log('New width', newWeight)
  }

  const goToGitHubPage = (): void => {
    window.open('https://github.com/manuelarte/footballpitchsvggenerator')
  }
</script>
