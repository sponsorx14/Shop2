<template>
  <div class="product-container">
    <div
      v-for="(item) in products"
      :key="item.id"
      class="box"
    >
      <img :src="item.image" class="box__image" alt="">
      <p
        class="box__name"
      >
        {{ item.name }}
      </p>

      <p class="box__price">
        {{ item.price }}zł
      </p>
      <p>
        <!--<input-->
          <!--@keyup="getQuantity($event)"-->
          <!--type="text"-->
          <!--class="box__input"-->
          <!--placeholder="Qty"-->
        <!--&gt;-->
        In stock:
        <span>
          {{ item.inStock }}
        </span>
      </p>
      <button
        @click="addToStore(item)"
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
        qty: 1,
      };
    },
    computed: {
      products() {
        return this.$store.state.products;
      },
    },
    methods: {
      addToStore(item) {
        const qty = parseInt(this.qty);
        const price = qty * item.price;

        this.$store.commit('updateBasket',
          {
            name: item.name,
            qty,
            price: price
          });
      },
      // getQuantity($event) {
      //   this.qty = $event.target.value;
      // }
    },
  };

</script>

<style lang="scss" scoped>
  .product-container {
    display: flex;
    flex-direction: column;
    .box {
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
    }
  }
</style>
