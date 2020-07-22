import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module({
  name: 'categories',
  stateFactory: true,
  namespaced: true,
})
export default class Categories extends VuexModule {
  categories: string[] = [];

  get AllCategories(): string[] {
    return this.categories;
  }

  @Mutation
  setAllCategories(categories: string[]): void {
    this.categories = categories;
  }

  @Action
  async getAllCategories(): Promise<void> {
    const files = await require.context('~/categories', false, /\.md$/);
    const categories = files.keys().map((key: string) => {
      const fileName = key.substring(2, key.length - 3);
      return fileName;
    });
    this.context.commit('setAllCategories', categories);
  }
}
