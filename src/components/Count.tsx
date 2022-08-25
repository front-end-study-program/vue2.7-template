import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const count = ref<number>(0)
    const onClick = () => {
      count.value++
    }

    return {
      count,
      onClick
    }
  },
  render() {
    return (
      <button onClick={this.onClick}>{ this.count }</button>
    )
  }
})