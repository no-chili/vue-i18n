<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      {{this.$t('hello')}}
    </div>
    <div>
      {{this.$t('ok')}}
    </div>
    <button @click="change">切换语言</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    change() {
      this.$i18n.locale == 'zh'
        ? (this.$i18n.locale = 'en')
        : (this.$i18n.locale = 'zh')
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
