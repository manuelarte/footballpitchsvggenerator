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
              class="slider"
              label="Width"
              max="90"
              min="45"
              step="0.5"
              thumb-label="always"
            >
              <template #thumb-label="{ modelValue }">
                {{ (modelValue) }}m
              </template>
            </v-slider>
          </template>
          <template #length>
            <v-slider
              v-model="length"
              class="slider"
              direction="vertical"
              label="Length"
              max="120"
              min="90"
              reverse
              step="0.5"
              thumb-label="always"
            >
              <template #thumb-label="{ modelValue }">
                {{ (modelValue) }}m
              </template>
            </v-slider>
          </template>
          <template #percentageShown>
            <v-slider
              v-model="percentageShown"
              class="slider"
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
    <div class="fab">
      <PitchPresets @preset-selected="onPresentSelected" />
    </div>
  </v-container>

</template>

<script lang="ts" setup>
  import PitchCustomization from '@/components/PitchCustomization.vue'
  import { FootballPitchVariables } from '@/models/football.pitch.variables.model'

  const length = ref(105)
  const width = ref(68)
  const percentageShown = ref(0.8)

  const variables = computed(() => {
    return new FootballPitchVariables(
      length.value,
      width.value,
      percentageShown.value,
    )
  })

  function goToGitHubPage (): void {
    window.open('https://github.com/manuelarte/footballpitchsvggenerator')
  }

  function onPresentSelected (value: any): void {
    length.value = value.length
    width.value = value.width
  }
</script>

<style scoped lang="sass">
  .slider :deep(.v-slider-thumb)
    z-index: 2
  .fab
    position: fixed
    bottom: 3rem
    right: 1rem
</style>
