<template>
  <v-toolbar>
    <v-toolbar-title>Football Pitch SVG Generator</v-toolbar-title>
    <v-btn icon="mdi-github" @click="goToGitHubPage()" />
  </v-toolbar>
  <v-container class="fill-height" v-if="!isLoading">
    <v-row justify="center">
      <v-col cols="6">
        <PitchCustomization
          @update:length="onLengthUpdated"
          @update:percentage-shown="onPercentageShownUpdated"
          @update:width="onWidthUpdated"
        />
      </v-col>
      <v-col cols="6">
        <img alt="example football field" src="/default-football-pitch.svg">
      </v-col>
    </v-row>
  </v-container>
  <v-skeleton-loader v-if="isLoading" type="card"></v-skeleton-loader>

</template>

<script lang="ts" setup>
import {loadPyodide, type PyodideInterface} from "pyodide";

  const pyodide: Promise<PyodideInterface> = loadPyodide({
    indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.28.0/full/'
  });

  const isLoading = ref(true)

  const onLengthUpdated = (newLength: number): void => {
    console.log('New length', newLength)
  }

  const onPercentageShownUpdated = (newPercentageShown: number): void => {
    console.log('New percentage shown', newPercentageShown)
  }

  const onWidthUpdated = (newWeight: number): void => {
    console.log('New width', newWeight)
  }

  const goToGitHubPage = (): void => {
    window.open('https://github.com/manuelarte/footballpitchsvggenerator')
  }

  onMounted(() => {
    pyodide.then(p => {
      isLoading.value = false
      console.log(p.runPython(`
            import sys
            sys.version
        `));
    })
  })
</script>
