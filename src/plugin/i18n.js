import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
import zh from "@/i18n/zh";
import en from "@/i18n/en";

console.log(zh, en);

const i18n = new VueI18n({
    //使用什么语言
    locale: "zh",
    //提供语言包支持
    messages: {
        zh,
        en,
    },
});

export default i18n;