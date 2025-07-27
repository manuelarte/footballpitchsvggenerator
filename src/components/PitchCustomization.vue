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
                <img alt="example football field" src="/default-football-pitch.svg">
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

</script>

<style scoped lang="sass">

</style>
