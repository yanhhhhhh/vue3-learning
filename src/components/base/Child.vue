<template>
  <div>子组件-->{{msg}}</div>

</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'

export default defineComponent({
  name: 'ChildItem',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  beforeCreate () {
    console.log('子beforeCreate')
  },
  created () {
    console.log('子created')
  },
  setup (props, { attrs, slots, emit }) {
    console.log('子setup')
    onBeforeMount(() => {
      console.log('子onBeforeMount')
    })
    onMounted(() => {
      console.log('子onMounted')
    })
    onBeforeUpdate(() => {
      console.log('子onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('子onUpdated')
    })
    // console.log('props', props)
    // console.log('attr', attrs)
  }

})
</script>
