<script lang="ts" setup>
defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()

const onClose = () => emit('update:modelValue', false)
const onOk = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <transition name="zoom-out" mode="out-in">
    <div v-if="modelValue" class="task-create-modal modal is-active">
      <div class="modal-background" @click="onClose" />
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">タスク作成</p>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">タスク名</label>
            <input type="text" class="input">
          </div>
        </section>
        <footer class="modal-card-foot gap-sm is-justify-content-space-evenly">
          <button class="button is-fullwidth" @click="onClose">
            <span>キャンセル</span>
          </button>
          <button class="button is-primary is-fullwidth" @click="onOk">
            <span>作成</span>
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
</style>
