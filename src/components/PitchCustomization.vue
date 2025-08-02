<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-col cols="2">
            <slot name="length" />
          </v-col>
          <v-col cols="8">
            <v-row>
              <slot name="width" />
            </v-row>
            <v-row>
              <v-col>
                <div
                  class="football-pitch-container"
                  @mouseleave="mouseleave"
                  @mouseover="mouseover"
                >
                  <img alt="example football field" class="pitch" :src="`data:image/svg+xml;base64,${svgContent}`">
                  <v-btn
                    class="float-end position-absolute my-button"
                    density="comfortable"
                    :download="`football-pitch-${vars.length}x${vars.width}.svg`"
                    :href="`data:image/svg+xml;base64,${svgContent}`"
                    icon="mdi-content-save"
                    :style="downloadButtonStyle"
                  />
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="2">
            <slot name="percentageShown" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { FootballPitchTemplate } from '@/models/football.pitch.template.model'
  import { FootballPitchVariables } from '@/models/football.pitch.variables.model'

  const props = defineProps({
    vars: {
      type: FootballPitchVariables,
      required: true,
    },
  })

  const svgContent = computed((): string => {
    const content = new FootballPitchTemplate().apply(props.vars)
    return btoa(content)
  })

  const downloadButtonStyle = ref()

  const mouseover = (): void => {
    downloadButtonStyle.value = {
      display: 'block',
    }
  }

  const mouseleave = () => {
    downloadButtonStyle.value = {
      display: 'none',
    }
  }
</script>

<style scoped lang="sass">
.football-pitch-container
  position: relative
  height: 80dvh
  width: 100%
  align-content: center
  .pitch
    display: block
    margin: auto
    height: 100%
    max-width: 100%
    aspect-ratio: auto
  .my-button
    position: absolute
    top: 16px
    right: 16px

</style>
