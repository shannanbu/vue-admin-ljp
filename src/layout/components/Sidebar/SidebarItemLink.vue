<template>
  <RouterLink :to="to">
    <slot></slot>
  </RouterLink>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>
<style scoped></style>
