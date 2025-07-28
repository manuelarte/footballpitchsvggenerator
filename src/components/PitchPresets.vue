<template>
  <v-menu>
    <template #activator="{ props }">
      <v-fab
        color="primary"
        icon="mdi-plus"
        location="bottom start"
        size="small"
        v-bind="props"
      />
    </template>

    <v-list>
      <v-list-item
        v-for="(value, key) in items"
        :key="key"
        :value="value"
      >
        <v-list-item-title @click="emits('preset-selected', value)">{{ key }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
  const items = {
    'Estadio Martinez Valero': {
      length: 108,
      width: 70,
    },
    'Molineux Stadium': {
      length: 100,
      width: 64,
    },
    'Old Trafford': {
      length: 105,
      width: 68,
    },
    'Santiago Bernabeu': {
      length: 105,
      width: 68,
    },
  }

  const emits = defineEmits(['preset-selected'])
</script>

<style scoped lang="sass">

</style>
