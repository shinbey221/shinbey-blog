import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Items from '~/store/items'

// eslint-disable-next-line import/no-mutable-exports
let items: Items

/**
 * ストアを初期化する（型推論できるモジュールとして取得する）
 * @param store Vuex.Store
 */

const initializeStores = (store: Store<any>): void => {
  items = getModule(Items, store)
}

export { initializeStores, items }
