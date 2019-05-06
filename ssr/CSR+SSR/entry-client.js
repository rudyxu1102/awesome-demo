const Vue = require('vue');
const App = require('./App.vue').default;

const app = new Vue({
    render: h => h(App)
});

app.$mount('#app');