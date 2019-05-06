import {createApp} from './app'

const {app, router, store} = createApp();

if(window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
    router.beforeResolve((to, from, next) => {
      const matched = router.getMatchedComponents(to)
      if (!matched.length) {
        return next()
      }

      Promise.all(matched.map(component => {
        if (component.asyncData) {
          return component.asyncData({
            store,
            route: to
          })
        }
      })).then(() => next()).catch(next)
    })
  
    // actually mount to DOM
    app.$mount('#app')
})