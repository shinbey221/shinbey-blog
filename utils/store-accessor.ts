/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Items from '~/store/items';
import Categories from '~/store/categories';

let items: Items;
let categories: Categories;

/**
 * ストアを初期化する（型推論できるモジュールとして取得する）
 * @param store Vuex.Store
 */

const initializeStores = (store: Store<Items | Categories>): void => {
  items = getModule(Items, store);
  categories = getModule(Categories, store);
};

export { initializeStores, items, categories };
