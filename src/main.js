import Vue from "vue";
import App from "./App.vue";
import i18n from "@/plugin/i18n";
Vue.config.productionTip = false;

new Vue({
    //挂在i18n,提供两个属性$t和$i18n
    i18n,
    render: (h) => h(App),
}).$mount("#app");