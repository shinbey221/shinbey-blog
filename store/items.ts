import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  name: 'items',
  stateFactory: true,
  namespaced: true
})
export default class Items extends VuexModule {
  blogItems: any[] = []

  get AllBlogItems() {
    return this.blogItems
  }

  @Mutation
  setAllBlogItems(items: any[]) {
    this.blogItems = items
  }

  @Action
  async getAllBlogItems() {
    const files = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )
    const blogPosts = files.keys().map((key: any) => {
      const res = files(key)
      return res
    })
    this.context.commit('setAllBlogItems', blogPosts)
  }
}
