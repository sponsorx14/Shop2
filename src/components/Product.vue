<template>
  <div class="container">
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
      <p
        class="box__details-screen"
      >
        {{ item.details.screen }}
      </p>
      <p
        class="box__details-memory"
      >
        {{ item.details.memory }}
      </p>
      <p
        class="box__details-system"
      >
        {{ item.details.system }}
      </p>
      <p>
        <input
          type="text"
          class="box__input"
          placeholder="Qty"
        >
        of
        <span>
          {{ item.inStock }}
        </span>
      </p>
      <button
        @click="addToStore(item)"
      >
        Buy
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Product',
  data() {
    return {
      basket: {
        name: '',
        qty: 0,
        totalPrice: 0,
      },
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },


  },
  methods: {

  },


};

</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
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
