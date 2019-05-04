const Vue = require('vue');
const App = require('./App.vue').default;


function createApp() {
    const app = new Vue({
        render: h => h(App)
    });
    return app;
};

const app = createApp();

app.$mount('#app');