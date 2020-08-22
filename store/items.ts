import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { BlogContent } from './../types/index';

@Module({
  name: 'items',
  stateFactory: true,
  namespaced: true,
})
export default class Items extends VuexModule {
  blogItems: BlogContent[] = [];

  get AllBlogItems(): BlogContent[] {
    return this.blogItems;
  }

  @Mutation
  setBlogItems(items: BlogContent[]): void {
    this.blogItems = items;
  }

  @Action
  async getAllBlogItems(): Promise<void> {
    const files = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    );
    const blogPosts = files
      .keys()
      .map((key: string, index: any) => {
        const res: BlogContent = files(key);
        res.id = index + 1;
        res.date = new Date(res.date).toLocaleString('ja-JP').slice(0, 15);
        return res;
      })
      .reverse();
    for (let i = 0; i < 15; i++) {
      blogPosts.push(blogPosts[0]);
    }
    this.context.commit('setBlogItems', blogPosts);
  }

  @Action
  async getSelectBlogItems(category: string): Promise<void> {
    const files = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    );
    const blogPosts = files
      .keys()
      .map((name: any) => files(name))
      .filter((blogItem: BlogContent) => {
        const itemCategory = blogItem.category.filter(
          (categoryItem: string) => {
            return categoryItem === category;
          }
        );
        return itemCategory.length > 0;
      });
    this.context.commit('setBlogItems', blogPosts);
  }
}
