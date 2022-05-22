<template>
  <p>
count:{{mainStore.count}}

  </p>
  <p>foo:{{mainStore.foo}}</p>
  <p>foo:{{mainStore.count10}}</p>
  <hr>
  <div>
  <p>解构</p>
  <p>count:{{count}}</p>
  <p>foo:{{foo}}</p>
  </div>
  <hr>
  <div><button @click="handleChange">count++</button></div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from './store/index.ts'
const mainStore = useMainStore()
// 解构时为了保证响应式,使用storeToRefs
const { count, foo } = storeToRefs(mainStore)
const handleChange = () => {
  // 方式一：直接修改
  /*  mainStore.count++
  mainStore.foo = 'foo++' */
  // 方式二：$patch
  // 传入对象
  /*  mainStore.$patch({
    count: mainStore.count + 1,
    foo: mainStore.foo + '++'
  }) */
  // 传入函数
  // mainStore.$patch((state) => {
  //   state.count++
  //   state.foo = state.foo + '++'
  // })
  // 方式三action
  mainStore.handleChange(10)
}

</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
