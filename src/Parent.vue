<template>
<div class="container">
  父组件-->{{msg}}
<ChildItem :msg="msg" :msg1="msg1"></ChildItem>
</div>
</template>

<!-- import 'bootstrap/dist/css/bootstrap.min.css' -->

<script lang="ts">
import { defineComponent, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
import ChildItem from './components/base/Child.vue'
export default defineComponent({
  name: 'Parent',
  components: {
    ChildItem

  },
  beforeCreate () {
    console.log('父beforeCreate')
  },
  created () {
    console.log('父created')
  },

  setup (props, ctx) {
    const msg = ref('prop接受的msg')
    const msg1 = ref('不使用prop接受的msg，则attr接受')
    console.log('父setup')
    onBeforeMount(() => {
      console.log('父onBeforeMount')
    })
    onMounted(() => {
      setTimeout(() => {
        msg.value = 'hello,1s后修改msg'
        console.log('msg 被修改')
      }, 1000)
      console.log('父onMounted')
    })
    onBeforeUpdate(() => {
      console.log('父onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('父onUpdated')
    })
    return {
      msg,
      msg1
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
