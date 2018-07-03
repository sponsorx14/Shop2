<template>
  <div class="product-container">
    <h2> Available products: </h2>
    <div class="product-container-holder">
      <div
          v-for="item in displayProducts"
          :key="item.id"
          class="box"
      >
        <router-link
            class="box__link"
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
  </div>
</template>

<script>
  export default {
    name: 'Product',
    computed: {
      displayProducts() {
        const data = this.$store.getters.getSortedProducts;
        const indexStart = this.$store.state.paginationModal.range.from;
        const indexEnd = this.$store.state.paginationModal.range.to;
        this.$store.dispatch('showPages', data.length);
        return data.slice(indexStart, indexEnd);
      }
    },
    methods: {
      addToBasketOne(item) {
        this.$store.dispatch('displayModal', item);
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
    margin: 0 auto;
    width: 100%;
    .product-container-holder {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .box {
    width: calc(50% - 80px);
    position: relative;
    border: 2px solid $dark-white;
    padding: 20px;
    margin: 40px;
    border-radius: 20px;
    &__link {
      display: block;
    }
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


</style>
