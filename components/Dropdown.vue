<script lang="ts" setup>
import { ref } from '#imports'

export type Item = {
  key: string
  name: string
}

defineProps<{
  modelValue: string
  items: Item[]
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', key: string): void
}>()

const isActive = ref(false)

const onClick = (item: Item) => {
  isActive.value = false
  emit('update:modelValue', item.key)
}
</script>

<template>
  <div class="dropdown" :class="{ 'is-active': isActive }">
    <div v-if="isActive" class="backdrop" @click="isActive = false" />
    <div class="dropdown-trigger" @click="isActive = !isActive">
      <slot />
    </div>
    <div class="dropdown-menu">
      <div class="dropdown-content">
        <a v-for="it in items" :key="it.key"
           class="dropdown-item"
           :class="{ 'is-active': modelValue === it.key }"
           @click="onClick(it)">{{ it.name }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.dropdown-menu {
  z-index: 31;
}
</style>
