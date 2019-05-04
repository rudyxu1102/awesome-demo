<template>
    <div @click="trigger" id="app">
        <h1>hello world</h1>
        <hr>
        <foo ref="foo_ref"></foo>
        <bar ref="bar_ref"></bar>
    </div>
</template>
<style>
    h1 {
        color: red
    }
</style>
<script>
    import Foo from './components/Foo.vue';
    import Bar from './components/Bar.vue';

    export default {
        data(){
            return {
                a:1,
                b:2
            }
        },

        beforeCreate() {
            console.log('App beforeCreate');
        },
        created() {
            console.log('App created');
        },
        beforeMount() {
            console.log('App beforeMount');
        },
        mounted() {
            console.log('App mounted');
        },
        methods: {
            trigger() {
              console.log('触发点击事件');
            }
        },
        components: {
            foo: Foo,
            bar: Bar,
        }
    }
</script>