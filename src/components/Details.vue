<template>
  <div class="main">
    <div
      v-for="item in showDatails"
      class="box"
    >
      <router-link to="/">
        <i class="fas fa-arrow-circle-left"></i>
      </router-link>
      <a
        :href="item.image"
        target="_blank"
      >
        <img
          :src="item.image"
          class="box__image"
          alt=""
        >
      </a>
      <p class="box__name">
        {{ item.name }}
      </p>
      <p class="box__details">
        Screen size:
        {{ item.details.screen }}
      </p>
      <p class="box__details">
        Memory:
        {{ item.details.memory }}
      </p>
      <p class="box__details">
        System:
        {{ item.details.system }}
      </p>
      <p class="box__price">
        Only for:
        {{ item.price }}zł
      </p>
      <p class="box__stock">
        In Stock:
        {{ item.inStock }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Details",
    computed: {
      showDatails() {
        const routeId = parseInt(this.$route.params.id);
        return this.$store.state.products.filter(item => item.id === routeId);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  .main {
    margin: 30px 0;
    .box {
      border: 2px solid $dark-white;
      padding: 20px;
      margin: 30px auto;
      max-width: 600px;
      border-radius: 20px;
      .fas {
        color: $grey2;
        font-size: 50px;
      }
      &__image {
        max-width: 600px;
      }
      &__name {
        font-size: 24px;
      }
      &__price {
        font-size: 20px;
      }
      &__stock {
        color: $deep-red;
      }
      &__details {
        font-size: 20px;
      }
    }
  }


</style>