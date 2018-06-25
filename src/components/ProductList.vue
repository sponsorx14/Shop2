<template>
  <main>
    <h1>Welcome to the shop</h1>
    <div class="main__filters">
      <div class="main__filters--name">
        <input
          v-model="filterName"
          type="text"
          class="main__filters__input"
          placeholder="Enter a name"
        >
      </div>
      <div class="main__filters--categories">
        <label for="Huawei">Huawei</label>
        <input
          v-model="filterCheckbox"
          true-value="Huawei"
          false-value="Huawei"
          id="Huawei"
          type="checkbox"
          class="main__filters--checkbox"
        >
        <label for="Lenovo">Lenovo</label>
        <input
          v-model="filterCheckbox"
          true-value="Lenovo"
          false-value="Lenovo"
          id="Lenovo"
          type="checkbox"
          class="main__filters--checkbox"
        >
        <label for="Iphone">Iphone</label>
        <input
          v-model="filterCheckbox"
          true-value="Iphone"
          false-value="Iphone"
          id="Iphone"
          type="checkbox"
          class="main__filters--checkbox"
        >
        <label for="Xiaomi">Xiaomi</label>
        <input
          v-model="filterCheckbox"
          true-value="Xiaomi"
          false-value="Xiaomi"
          id="Xiaomi"
          type="checkbox"
          class="main__filters--checkbox"
        >
        <label for="Nokia">Nokia</label>
        <input
          v-model="filterCheckbox"
          true-value="Nokia"
          false-value="Nokia"
          id="Nokia"
          type="checkbox"
          class="main__filters--checkbox"
        >
        <label for="Honor">Honor</label>
        <input
          v-model="filterCheckbox"
          true-value="Honor"
          false-value="Honor"
          id="Honor"
          type="checkbox"
          class="main__filters--checkbox"
        >
      </div>
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
          checkedNames: []
        }
      }
    },
    computed: {
      basket() {
        return this.$store.state.basket
      },
      filterName: {
        get() {

        },
        set(value) {
          this.$store.dispatch('updateResult', value)
        }
      },
      filterCheckbox: {
        get(){

        },
        set(value){
          this.$store.dispatch('filterCheckbox', value)
        }
      }
    },

  };
</script>

<style lang="scss" scoped>
  main {
    padding: 30px;
    .main__filters__input {
      margin: 10px 0;
      padding: 10px;
      border: 2px solid #ccc;
      outline: none;
      border-radius: 20px;
    }
    .main__filters--categories {
      padding: 10px 0;
      .main__filters--checkbox {
        margin-right: 10px;
      }
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
