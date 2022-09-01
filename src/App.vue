<template>
  <div>
    <Count />
    <div><a href="/#/todo">todo</a></div>
    <div><a href="/#/">home</a></div>
    <br />
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import Count from './components/Count'
</script>
<style scoped></style>
