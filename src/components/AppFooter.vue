<template>
  <v-footer
    app
    height="40"
  >
    <a
      v-for="item in items"
      :key="item.title"
      class="d-inline-block mx-2 social-link"
      :href="item.href"
      rel="noopener noreferrer"
      target="_blank"
      :title="item.title"
    >
      {{ item.title }}
      <v-icon
        :icon="item.icon"
        :size="16"
      />
    </a>
  </v-footer>
</template>
<script setup lang="ts">
  const items = [
    {
      title: 'manuelarte',
      icon: `mdi-github`,
      href: 'https://github.com/manuelarte',
    },
    {
      title: 'football-logos',
      icon: `mdi-github`,
      href: 'https://github.com/luukhopman/football-logos',
    },
  ]
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
