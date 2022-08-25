import { defineStore } from 'pinia'

export type todoStatus = 'all' | 'incomplete' | 'complete'

export interface ITodoItem {
  id: number;
  content: string;
  isDone: boolean;
}

export interface ITodoState { 
  status: todoStatus;
  todoList: ITodoItem[];
  todoId: number;
}

export type ITodoGetters = {
  filterList: (state: ITodoState) => ITodoItem[]
}

export interface ITodoActions {
  addTodo: (content: string) => void;
  removeTodo: (item: ITodoItem) => void;
  changeStatus: (status: todoStatus) => void;
}

export const useTodoStore = defineStore<string, ITodoState, ITodoGetters , ITodoActions>('todo', {
  state: () => {
    return {
      status: 'all', // incomplete complete
      todoList: [],
      todoId: 0,
    }
  },
  getters: {
    filterList(state) {
      switch (state.status) {
        case 'complete':
          return state.todoList.filter(item => item.isDone)   
        case 'incomplete':
          return state.todoList.filter(item => !item.isDone)
        default:
          return state.todoList
      }
    }
  },
  actions: {
    addTodo(content) {
      this.todoList.push({
        id: this.todoId,
        content,
        isDone: false
      })
      this.todoId += 1
    },
    removeTodo(item) {
      const idx = this.todoList.findIndex(findItem => findItem.id === item.id)
      this.todoList.splice(idx, 1)
    },
    changeStatus(status: todoStatus) {
      this.status = status
    }
  }
})