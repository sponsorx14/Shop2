<template>
  <div id="app">
    <Information></Information>
    <router-view/>
  </div>
</template>

<script>
  import ProductList from './components/ProductList.vue';
  import Information from './components/Information.vue';

  export default ({
    name: 'App',
    components: {
      ProductList,
      Information
    },
  });

</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  #app {
    margin-top: 100px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
