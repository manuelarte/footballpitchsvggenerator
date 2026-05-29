<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-row>
          <v-col cols="12" md="2">
            <slot name="length" />
          </v-col>

          <v-col cols="12" md="8">
            <v-row>
              <slot name="width" />
            </v-row>

            <v-row>
              <v-col>
                <div
                  class="football-pitch-container"
                >
                  <img
                    alt="example football field"
                    class="pitch"
                    :src="`data:image/svg+xml;base64,${svgContent}`"
                  >

                  <v-btn
                    class="float-end position-absolute my-button"
                    density="comfortable"
                    :download="`football-pitch-${vars.length}x${vars.width}.svg`"
                    :href="`data:image/svg+xml;base64,${svgContent}`"
                    icon="mdi-content-save"
                  />
                </div>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="2">
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

</script>

<style scoped lang="sass">
.football-pitch-container
  position: relative
  width: 100%
  height: clamp(260px, 65dvh, 80dvh)
  min-height: 260px
  max-height: 80dvh
  display: flex
  align-items: center
  justify-content: center
  overflow: hidden

  .pitch
    display: block
    width: 100%
    height: 100%
    object-fit: contain
    margin: 0 auto

  .my-button
    position: absolute
    top: 16px
    right: 16px
    z-index: 2
    opacity: 0
    transition: opacity 0.2s ease-in-out

.football-pitch-container:hover .my-button
  opacity: 1

@media (max-width: 960px)
  .football-pitch-container
    height: clamp(220px, 55dvh, 520px)

@media (max-width: 600px)
  .football-pitch-container
    height: clamp(200px, 45dvh, 420px)

  .football-pitch-container .my-button
    top: 8px
    right: 8px
    transform: scale(0.9)
    transform-origin: top right

@media (hover: none), (pointer: coarse)
  .football-pitch-container .my-button
    opacity: 1

</style>
