<template>
  <div class="product-container">
    <div class="modal">
      <p>
        Ima modal
      </p>
    </div>
    <h2> Available products: </h2>
    <div
        v-for="item in displayProducts"
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
          alt="phone_img"
      >
      <p class="box__name">
        {{ item.name }}
      </p>
      <p class="box__price">
        {{ item.price }}zł
      </p>
      <p class="box__inStock">
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
    data(){
      return {
        modalData: {}
      }
    },
    computed: {
      displayProducts() {
        return this.$store.getters.getSortedProducts;
      }
    },
    methods: {
      addToBasketOne(item) {
        this.$store.commit('addToBasketOne',
          {
            id: item.id,
            name: item.name,
            quantity: 1,
            price: item.price,
          });
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  .product-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    .modal {
      position: absolute;
      top: 0;
      right: 0;
    }
    .box {
      position: relative;
      border: 2px solid $dark-white;
      padding: 20px;
      margin: 20px;
      border-radius: 20px;
      .fas {
        color: $grey2;
        background-color: $white;
        font-size: 50px;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%)
      }
      &__image {
        max-width: 200px;
      }
      &__button {
        margin: 10px auto;
        text-decoration: none;
        max-width: 100px;
        display: block;
        border: 0;
        background-color: $blue;
        color: $white;
        padding: 10px 15px;
        border-radius: 10px;
        cursor: pointer;
        outline: none;
        transition: .2s;
        &:hover {
          background-color: $light-blue;
          transition: .2s;
        }
      }
    }
  }
</style>
