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
                <img alt="example football field" :src="`data:image/svg+xml;base64,${svgContent}`">
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
</script>

<style scoped lang="sass">

</style>
