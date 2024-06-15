

<template>
  <h1 v-text="a + 1"></h1>
  <h2>{{a + 2}}</h2>
  <button @click="increment">Count is: {{ a }}</button>
  <button @click="increment2">Count is: {{ a }}</button>
  <button @click="change">Count is: {{ b }}</button>
</template>

<script setup>
import {ref,onMounted} from "vue";
  const a = ref(2)
  const b = ref('hello world')

  const change = ()=>{
    b.value = b.value.split(" ").reverse().join(" ")
  }

  // 用来修改状态、触发更新的函数
  function increment() {
    a.value++
  }
  const increment2 = ()=>{
    a.value++
  }
  // 生命周期钩子
  onMounted(() => {
    console.log(`The initial count is ${a.value}.`)
  })
</script>

<style scoped>

</style>
