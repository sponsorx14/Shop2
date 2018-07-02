<template>
  <div class="basket">
    <h2>Your basket: </h2>
    <button
      @click="resetBasket"
      :class="[basketQuantity !== 0 ? '' : hideBasket]"
      class="basket__button"
    >
      Remove all
    </button>
    <div
      v-for="item in basket"
      :class="[item.quantity <= 0 ? hideBasket : '']"
      class="basket__product"
    >
      <p>
        Name:
        {{ item.name}}
      </p>
      <p>
        Qty:
        {{ item.quantity }}
      </p>
      <p>
        Total:
        {{ item.price }}zł
      </p>
      <button
        @click="removeFromBasketOne(item)"
        class="basket__button"
      >
        Remove one
      </button>
      <button
        @click="removeFromBasketAll(item)"
        class="basket__button"
      >
        Remove all
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Basket',
    computed: {
      basketQuantity() {
        return this.$store.state.basketModule.basketQuantity;
      },
      basket() {
        return this.$store.state.basketModule.basket;
      },
      hideBasket() {
        return 'basket__hide';
      }
    },
    methods: {
      removeFromBasketOne(item) {
        this.$store.dispatch('removeFromBasketOne', {
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        });
      },
      removeFromBasketAll(item) {
        this.$store.dispatch('removeFromBasketAll', {
          id: item.id,
          name: item.name,
          quantity: item.quantity
        });
      },
      resetBasket() {
        this.$store.dispatch('resetBasket');
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import '../styles/colors';

  .basket {
    width: 400px;
    margin: 0 auto;
    &__product {
      border-radius: 20px;
      margin: 30px;
      padding: 30px;
      border: 2px solid $light-grey;
    }
    &__button {
      margin: 0 10px;
      padding: 10px 15px;
      border: 0;
      border-radius: 10px;
      background-color: $deep-red;
      color: $white;
      cursor: pointer;
      outline: none;
    }
    &__hide {
      display: none;
    }
  }
</style>