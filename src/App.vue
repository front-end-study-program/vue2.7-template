<template>
  <div>
    {{ count }}
    <button @click="onClick">add</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
const onClick = () => {
  count.value++
}
</script>
<style scoped></style>
