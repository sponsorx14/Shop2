<template>
  <div class="product-container">
    <div
      v-for="item in products"
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
        @click="addToBasket(item)"
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
        quantity: 1,
      };
    },
    computed: {
      products() {
        return this.$store.state.products;
      },
    },
    methods: {
      addToBasket(item) {
        const quantity = parseInt(this.quantity);

        this.$store.commit('addToBasket',
          {
            name: item.name,
            quantity: quantity,
            price: item.price,
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
      }
    }
  }
</style>
