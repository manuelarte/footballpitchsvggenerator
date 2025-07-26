<template>
  <v-toolbar>
    <v-toolbar-title>Football Pitch SVG Generator</v-toolbar-title>
    <v-btn icon="mdi-github" @click="goToGitHubPage()" />
  </v-toolbar>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="6">
        <PitchCustomization
          @update:height="onHeightUpdated"
          @update:width="onWidthUpdated"
        />
      </v-col>
      <v-col cols="6">
        <img alt="example football field" src="/default-football-pitch.svg">
      </v-col>
    </v-row>
  </v-container>

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
