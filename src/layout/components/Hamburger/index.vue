<template>
  <div @click="toggleClick" class="hamburger">
    <el-icon :size="20" class="icon">
      <Fold v-if="props.isActive" />
      <Expand v-else />
    </el-icon>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits<{
  (e: 'toggle-click'): void
}>()

const toggleClick = () => {
  emit('toggle-click')
}
</script>
<style scoped lang="scss">
.hamburger {
  display: flex;
  align-items: center;
}
</style>
