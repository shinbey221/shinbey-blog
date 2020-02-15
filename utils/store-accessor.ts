import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Items from '~/store/items'
import Count from '~/store/count'

// eslint-disable-next-line import/no-mutable-exports
let items: Items
let count: Count

/**
 * ストアを初期化する（型推論できるモジュールとして取得する）
 * @param store Vuex.Store
 */

const initializeStores = (store: Store<any>): void => {
  items = getModule(Items, store)
  count = getModule(Count, store)
}

export { initializeStores, items, count }
