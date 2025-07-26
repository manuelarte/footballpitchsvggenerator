<template>
  <v-container>
    <v-row>
      <v-col>
        <v-slider
          v-model="width"
          label="Width"
          max="120"
          min="90"
          step="1"
          thumb-label="always"
          @update:model-value="$emit('update:width', $event)"
        />
      </v-col>
      <v-col>
        <v-slider
          v-model="height"
          direction="vertical"
          label="Height"
          max="90"
          min="45"
          step="1"
          thumb-label="always"
          @update:model-value="$emit('update:height', $event)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  const width = ref(120)
  const height = ref(90)

  defineEmits(['update:height', 'update:width'])
</script>

<style scoped lang="sass">

</style>
