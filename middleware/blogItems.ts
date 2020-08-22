import { Middleware } from '@nuxt/types';

const myMiddleware: Middleware = async context => {
  if (context.store.state.items.blogItems.length === 0) {
    await context.store.dispatch('categories/getAllCategories');
    await context.store.dispatch('items/getAllBlogItems');
  }
};

export default myMiddleware;
