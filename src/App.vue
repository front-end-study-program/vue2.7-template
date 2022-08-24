<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

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
