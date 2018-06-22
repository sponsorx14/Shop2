<template>
  <main>
    <h1>Welcome to the shop</h1>
    <div class="main__filters">
      <input
        v-model="filterName"
        type="text"
        class="main__filters__input"
        placeholder="Enter a name"
      >

    </div>
    <div class="container">
      <Product></Product>
      <Basket></Basket>
    </div>
  </main>
</template>

<script>
  import Product from './Product.vue';
  import Basket from './Basket.vue';

  export default {
    name: 'ProductList',
    components: {
      Product,
      Basket
    },
    data() {
      return {
        filter: {
          name: ''
        }
      }
    },
    computed: {
      basket() {
        return this.$store.state.basket
      },
      filterName: {
        get(){
          return this.$store.state.searchTerm;
        },
        set(value){
          this.$store.commit('updateResult', value)
        }
      }
    },

  };
</script>

<style lang="scss" scoped>
  main {
    padding: 30px;
    .main__filters__input {
      padding: 10px;
      border: 2px solid #ccc;
      outline: none;
      border-radius: 20px;
    }
    h1 {
      margin-bottom: 50px;
    }
    .container {
      text-align: center;
      margin: 0 auto;
      max-width: 1200px;
      display: flex;
      justify-content: space-around;
    }
  }
</style>
