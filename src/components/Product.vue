<template>
  <div class="product-container">
    <div
      v-for="(item, index) in products"
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
          <!--placeholder="quantity"-->
        <!--&gt;-->
        In stock:
        <span>
          {{ item.inStock }}
        </span>
      </p>
      <button
        @click="addToStore(item, index)"
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
        quantity: 1,
      };
    },
    computed: {
      products() {
        return this.$store.state.products;
      },
    },
    methods: {
      addToStore(item, index) {
        const quantity = parseInt(this.quantity);
        this.$store.commit('updateBasket',
          {
            name: item.name,
            quantity: quantity,
            price: item.price,
            index
          });
      },
      // getQuantity($event) {
      //   this.quantity = $event.target.value;
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
