<template>
  <div class="main">
    <router-link
      to="/"
      class="main__button--back"
    >
      Go back
    </router-link>
    <div
      v-for="item in getData"
      class="box"
    >
      <a
        :href="item.image" target="_blank"
      >
        <img
          :src="item.image"
          class="box__image" alt=""
        >
      </a>
      <p
        class="box__name"
      >
        {{ item.name }}
      </p>
      <p
        class="box__details"
      >
        Screen size:
        {{ item.details.screen }}
      </p>
      <p
        class="box__details"
      >
        Memory:
        {{ item.details.memory }}
      </p>
      <p
        class="box__details"
      >
        System:
        {{ item.details.system }}
      </p>

      <p
        class="box__price"
      >
        Only for:
        {{ item.price }}zł
      </p>
      <p
        class="box__stock"
      >
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
      getData() {
        const routeId = parseInt(this.$route.params.id);

        return this.$store.state.products.filter(item => item.id === routeId);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    margin: 30px 0;
    &__button--back {
      text-decoration: none;
      border: 0;
      background-color: #4286f4;
      color: #fff;
      padding: 10px 15px;
      border-radius: 20px;
      cursor: pointer;
      outline: none;
    }
  }
  .box {
    border: 2px solid #e6e6e6;
    padding: 20px;
    margin: 30px auto;
    max-width: 600px;
    border-radius: 20px;
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
      color: #bc2121;
    }
    &__details {
      font-size: 20px;
    }
  }


</style>