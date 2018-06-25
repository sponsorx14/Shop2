<template>
  <div class="product-container">
    <h2> Available products: </h2>
    <div
      v-for="item in newProducts"
      :key="item.id"
      class="box"
    >
      <router-link
        :to="{name: 'details', params: {id: item.id}}"
        class="box__button"
      >
        Details
      </router-link>

      <img :src="item.image" class="box__image" alt="">
      <p
        class="box__name"
      >
        {{ item.name }}
      </p>

      <p
        class="box__price">
        {{ item.price }}zł
      </p>
      <p
        class="box__inStock"
      >
        In stock:
        {{ item.inStock }}
      </p>

      <button
        @click="addToBasketOne(item)"
        class="box__button"
      >
        Buy one
      </button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Product',
    data() {
      return {
        quantity: 0,
        inputQuantity: 1
      };
    },
    computed: {
      products() {
        return this.$store.state.products;
      },
      newProducts() {
        const newProducts = this.$store.getters.newProducts;

        return newProducts;
      }
    },
    methods: {

      addToBasketOne(item) {
        this.$store.commit('addToBasketOne',
          {
            name: item.name,
            quantity: 1,
            price: item.price,
          });
      },
    },
  };

</script>

<style lang="scss" scoped>
  .product-container {
    display: flex;
    flex-direction: column;
    .box {
      transition: .5s;
      border: 2px solid #e6e6e6;
      padding: 20px;
      margin: 20px;
      border-radius: 20px;
      &__image {
        max-width: 200px;
      }
      &__input {
        width: 15%;
      }
      &__button {
        margin: 10px auto;
        text-decoration: none;
        max-width: 100px;
        display: block;
        border: 0;
        background-color: #4286f4;
        color: #fff;
        padding: 10px 15px;
        border-radius: 20px;
        cursor: pointer;
        outline: none;
        &:hover {
          background-color: #5998ff;
        }
      }
      &:hover {
        transition: .5s;
        background-color: #f9f9f9;
      }
    }
  }
</style>
