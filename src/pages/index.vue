<template>
  <v-toolbar>
    <v-toolbar-title>Football Pitch SVG Generator</v-toolbar-title>
    <v-btn icon="mdi-github" @click="goToGitHubPage()" />
  </v-toolbar>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12">
        <PitchCustomization :vars="variables">
          <template #width>
            <v-slider
              v-model="width"
              label="Width"
              max="90"
              min="45"
              step="0.5"
              thumb-label="always"
            />
          </template>
          <template #length>
            <v-slider
              v-model="length"
              direction="vertical"
              label="Length"
              max="120"
              min="90"
              reverse
              step="0.5"
              thumb-label="always"
            />
          </template>
          <template #percentageShown>
            <v-slider
              v-model="percentageShown"
              direction="vertical"
              label="Percentage Shown"
              max="1"
              min="0.5"
              reverse
              step="0.01"
              thumb-label="always"
            >
              <template #thumb-label="{ modelValue }">
                {{ (modelValue*100).toFixed(2) }}%
              </template>
            </v-slider>
          </template>
        </PitchCustomization>
      </v-col>
    </v-row>
  </v-container>

</template>

<script lang="ts" setup>
  import PitchCustomization from '@/components/PitchCustomization.vue'
  import { FootballPitchVariables } from '@/models/football.pitch.variables.model'

  const width = ref(90)
  const length = ref(120)
  const percentageShown = ref(1)

  const variables = computed(() => {
    return new FootballPitchVariables(
      length.value,
      width.value,
      percentageShown.value,
    )
  })

  const goToGitHubPage = (): void => {
    window.open('https://github.com/manuelarte/footballpitchsvggenerator')
  }
</script>
