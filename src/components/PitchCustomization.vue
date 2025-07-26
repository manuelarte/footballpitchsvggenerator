<template>
  <v-container>
    <v-row>
      <v-col>
        <v-slider
          v-model="width"
          label="Width"
          max="90"
          min="45"
          step="1"
          thumb-label="always"
          @update:model-value="$emit('update:width', $event)"
        />
      </v-col>
      <v-col>
        <v-slider
          v-model="length"
          direction="vertical"
          label="Length"
          max="120"
          min="90"
          reverse
          step="1"
          thumb-label="always"
          @update:model-value="$emit('update:length', $event)"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-slider
          v-model="percentageShown"
          label="Percentage Shown"
          max="100"
          min="50"
          step="1"
          thumb-label="always"
          @update:model-value="$emit('update:percentageShown', $event/100)"
        >
          <template #thumb-label="{ modelValue }">
            {{ modelValue }}%
          </template>
        </v-slider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  const length = ref(120)
  const percentageShown = ref(100)
  const width = ref(90)

  defineEmits(['update:length', 'update:percentageShown', 'update:width'])
</script>

<style scoped lang="sass">

</style>
