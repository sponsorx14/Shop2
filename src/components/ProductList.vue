<template>
  <main>
    <h1>Welcome to the shop</h1>
    <div class="main__filters">
      <div class="main__filters main__filters--name">
        <input
          v-model="filterName"
          type="text"
          class="main__filters__input"
          placeholder="Enter a name"
        >
      </div>
      <div class="main__filters main__filters--categories">
        <label>Huawei</label>
        <input
          v-model="setCheckBox"
          value="Huawei"
          type="checkbox"
          class="main__filters--categories--checkbox"
        >
        <label>Lenovo</label>
        <input
          v-model="setCheckBox"
          value="Lenovo"
          type="checkbox"
          class="main__filters--categories--checkbox"
        >
        <label>Iphone</label>
        <input
          v-model="setCheckBox"
          value="Iphone"
          type="checkbox"
          class="main__filters--categories--checkbox"
        >
        <label>Xiaomi</label>
        <input
          v-model="setCheckBox"
          value="Xiaomi"
          type="checkbox"
          class="main__filters--categories--checkbox"
        >
        <label>Nokia</label>
        <input
          v-model="setCheckBox"
          value="Nokia"
          type="checkbox"
          class="main__filters--categories--checkbox"
        >
        <label>Honor</label>
        <input
          v-model="setCheckBox"
          value="Honor"
          type="checkbox"
          class="main__filters--categories--checkbox"
        >
      </div>
      <div class="main__filters main__filters--price">
        <label for="priceFrom">From: </label>
        <input
          v-model="filterPriceFrom"
          class="main__filters--price--input"
          id="priceFrom"
          type="text"
        >
        <label for="priceTo">To: </label>
        <input
          v-model="filterPriceTo"
          class="main__filters--price--input"
          id="priceTo"
          type="text"
        >
      </div>
      <button
        @click="setCheckBox"
        class="main__filters__button"
      >
        Clear filters
      </button>
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
    methods: {
      resetFilters(){
        this.$store.dispatch('resetFilters')
      }
    },
    computed: {
      basket() {
        return this.$store.state.basket
      },
      filterName: {
        get() {},
        set(value) {
          this.$store.dispatch('updateResult', value)
        }
      },
      filterPriceFrom: {
        get(){},
        set(value){
          const values = {
            priceFrom: value
          };
          this.$store.dispatch('filterPrice', values);
        }
      },
      filterPriceTo: {
        get(){},
        set(value){
          const values = {
            priceTo: value
          }
          this.$store.dispatch('filterPrice', values);
        }
      },
      setCheckBox: {
        get(){
          return this.$store.state.filteredCheckboxes;
        },
        set(value){
          this.$store.dispatch('filterCheckbox', value)
        }
      }
    }

  };
</script>

<style lang="scss" scoped>
  main {
    padding: 30px;
    .main__filters {
      margin: 10px;
      &__input {
        margin-bottom: 10px;
        padding: 10px;
        border: 2px solid #ccc;
        outline: none;
        border-radius: 20px;
      }
      &--categories {
        padding: 10px 0;
        &--checkbox {
          margin-right: 10px;
        }
      }
      &--price {
        &--input {
          margin-right: 20px;
          width: 50px;
          padding: 5px;
          border: 2px solid #ccc;
          outline: none;
          border-radius: 20px;
        }
      }
      &__button {
        padding: 10px;
        margin: 10px;
        border: 0;
        background-color: #bc2727;
        color: #fff;
        font-size: 20px;
        border-radius: 10px;
        cursor: pointer;
        outline: none;
        &:hover {
          background-color: #cc2c2c;
        }
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
