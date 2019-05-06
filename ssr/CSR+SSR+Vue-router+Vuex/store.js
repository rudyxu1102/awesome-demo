import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

function fetchFoo() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      return { posts: res.data.slice(0, 5) }
    })
}

export default function createStore() {
    return new Vuex.Store({
        state: {
            foo: '',
        },
        actions: {
            fetchFoo({commit}) {
                return fetchFoo().then(res => {
                    commit('setFoo', res.posts)
                })
            }
        },
        mutations:{
            setFoo(state, msg) {
                Vue.set(state, 'foo', msg);
            }
        }
    })
}