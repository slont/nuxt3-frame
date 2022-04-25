<script lang="ts" setup>
import { inject } from '#imports'
import { UserIK } from '~/useCaces/injection'

const user = inject(UserIK)!
</script>

<template>
  <div id="users-detail-index">
    <div class="p-4">
      <div class="field">
        <label class="label">ID: </label>
        <p>{{ user.id }}</p>
      </div>
      <div class="field">
        <label class="label">Name: </label>
        <p>{{ user.name }}</p>
      </div>
    </div>
  </div>
</template>
