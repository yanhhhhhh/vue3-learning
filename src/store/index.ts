import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      count: 100,
      foo: 'foo'

    }
  },
  getters: {
    // 第一个参数为state
    countAddTen (state) {
      return state.count + 10
    },
    // 使用this，需要定义返回类型
    countAdd10 ():number {
      return this.count + 10
    }
  },
  actions: {
    handleChange (num:number) {
      this.count += num
      this.foo = this.foo + '+++'
    }
  }
})
