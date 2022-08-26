<template>
  <div>
    <div>
      <a :class="{ active: todoStore.status === 'all' }" href="javascript:;" @click="onTab('all')">全部</a>
      <a :class="{ active: todoStore.status === 'incomplete' }" href="javascript:;" @click="onTab('incomplete')">未完成</a>
      <a :class="{ active: todoStore.status === 'complete' }" href="javascript:;" @click="onTab('complete')">已完成</a>
    </div>
    <div>
      <input type="text" v-model="value">
      <button @click="add">添加</button>
    </div>
    <div class="todo">
      <div class="todo-item" v-for="item in todoStore.filterList">
        <div>
          <input type="checkbox" v-model="item.isDone">
          {{ item.content }}
          <button @click="onRemove(item)">remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTodoStore, todoStatus, ITodoItem } from '@/store/todo'

const todoStore = useTodoStore()
const value = ref('')
const add = () => {
  if(!value.value) return
  todoStore.addTodo(value.value)
  value.value = ''
}
const onTab = (val: todoStatus) => {
  todoStore.changeStatus(val)
}
const onRemove = (item: ITodoItem) => {
  todoStore.removeTodo(item)
}

</script>

<style lang="less" scoped>
a {
  padding: 16px;
  &.active {
    color: skyblue;
  }
}
</style>