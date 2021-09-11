<template>
    <div class="home">
        <p>{{ num }}</p>
        <p>{{ info.name }}</p>
        <p>{{ info.age }}</p>
        <button @click="addFun">点击验证</button>
        <button @click="addAgeFun">点击验证年龄</button>
        <!--        <img alt="Vue logo" src="../assets/logo.png"/>
                <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import {
    reactive,
    /* onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onErrorCaptured,
    onRenderTracked,
    onRenderTriggered,*/
    ref
} from "vue";


export default {
    name: "Home",
    /*components: {
        HelloWorld,
    },*/
    setup() {
        /*onBeforeMount(() => {
           console.debug("onBeforeMount 执行了!")
       })
       onMounted(() => {
           console.debug("onMounted 执行了!")
       })
       onBeforeUpdate(() => {
           console.debug("onBeforeUpdate 执行了!")
       })
       onUpdated(() => {
           console.debug("onUpdated 执行了!")
       })
       onBeforeUnmount(() => {
           console.debug("onBeforeUnmount 执行了!")
       })
       onUnmounted(() => {
           console.debug("onUnmounted 执行了!")
       })
       onErrorCaptured(err => {
           console.debug(err)
       })
       // 追踪页面的响应式依赖数据
       onRenderTracked(obj => {
           console.debug(obj)
       })
       // 追踪页面的重新渲染的响应式依赖数据
       onRenderTriggered(obj => {
           console.debug(obj)
       })*/
        // ref是将基本的数据类型变成响应式数据, ref包裹的数据, 在获取的时候需要用.value来获取
        let num = ref(1);
        // reactive 方法是将对象变成响应式数据
        let info = reactive({
            id: 1,
            name: "future",
            age: 18,
        })

        let addFun = () => {
            num.value++;
            console.debug(num.value);
        }
        let addAgeFun = () => {

            info.age++;
            console.debug(info.age);
        }
        console.log("setUp 执行了!!!!!!!!!")

        return {
            addFun,
            addAgeFun,
            num,
            info
        }
    },
};
</script>
