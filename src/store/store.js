import createStore from './createStore'
import rootReducer from './rootReducer'

const store = createStore(rootReducer)

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(rootReducer)
    })
  }
}

export default store
