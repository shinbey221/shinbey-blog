import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  name: 'count',
  stateFactory: true,
  namespaced: true
})
export default class Count extends VuexModule {
  count: number = 0

  get nowCount() {
    return this.count
  }

  @Mutation
  increment() {
    this.count += 1
  }
  @Mutation
  decrement() {
    this.count -= 1
  }
  @Mutation
  setCount(count: number) {
    this.count = count
  }

  @Action
  incrementCount() {
    this.context.commit('increment')
  }
  @Action({ commit: 'decrement' })
  decrementCount() {
    return
  }
  @Action({ commit: 'setCount' })
  setInputCount(count: number) {
    return count
  }
}
