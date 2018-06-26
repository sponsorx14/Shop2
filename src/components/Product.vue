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
      >
        <i class="fas fa-info-circle"></i>
      </router-link>

      <img
        :src="item.image"
        class="box__image"
        alt=""
      >
      <p
        class="box__name"
      >
        {{ item.name }}
      </p>

      <p
        class="box__price"
      >
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
    computed: {
      newProducts() {
        return this.$store.getters.newProducts;
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
    margin: 0 auto;
    .box {
      position: relative;
      transition: .5s;
      border: 2px solid #e6e6e6;
      padding: 20px;
      margin: 20px;
      border-radius: 20px;
      .fas {
        color: #c1c1c1;
        background-color: #fff;
        font-size: 50px;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%)
      }
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
        border-radius: 10px;
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
