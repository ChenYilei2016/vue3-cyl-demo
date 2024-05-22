

<template>
  <h1 v-text="a + 1"></h1>
  <h2>{{a + 2}}</h2>
  <button @click="increment">Count is: {{a}}</button>
</template>

<script setup>
import {ref,onMounted, reactive} from "vue";

  const b = reactive({
    x: '666'
  })

  const a = ref(2)
  // 用来修改状态、触发更新的函数
  function increment() {
    a.value++
  }
  // 生命周期钩子
  onMounted(() => {
    console.log(`The initial count is ${a.value}.`)
  })
</script>

<style scoped>

</style>
