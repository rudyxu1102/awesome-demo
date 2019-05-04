import Vue from 'vue'
import App from './App.vue'

export default function (context) {
    console.log(context.url)
    const app = new Vue({
        render: h => h(App)
    });
    return app;
};
