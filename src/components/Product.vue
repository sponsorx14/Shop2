<template>
  <div class="product-container">
    <div class="modal">
      <div class="modal--item" v-for="item in modalData">
        <i class="fas fa-info-circle"></i>
        <button>
          <i
              @click="removeModal(item)"
              class="fas fa-times"
          ></i>
        </button>
        <p>
          Your product:
          <span> {{ item.name }}</span>
          has been successfully added into your basket!
        </p>
      </div>
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
        modalData: [],
      }
    },
    computed: {
      displayProducts() {
        return this.$store.getters.getSortedProducts;
      }
    },
    methods: {
      addToBasketOne(item) {
        this.modalData.push(Object.assign({}, item));
        this.displayModal();
        this.$store.commit('addToBasketOne',
          {
            id: item.id,
            name: item.name,
            quantity: 1,
            price: item.price,
          });
      },
      displayModal(){
        const data = this.modalData;
        setTimeout(function(){
          data.shift();
        },5000)
      },
      removeModal(item){
        const modalId = this.modalData.indexOf(item);
        this.modalData.splice(modalId, 1);
      }
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
      position: fixed;
      top: 100px;
      right: 0;
      margin: 0 5px;
      &--item {
        position: relative;
        border-radius: 10px;
        margin: 0 0 10px;
        line-height: 28px;
        padding: 10px 30px;
        background-color: $green;
        .fa-info-circle,
        .fa-times {
          font-size: 36px;
          position: absolute;
          color: $white;
        }
        .fa-info-circle {
          top: 0;
          left: 0;
          transform: translate(25%, 25%);
        }
        .fa-times {
          cursor: pointer;
          right: 0;
          top: 0;
          transform: translate(-50%, 25%);
        }
        button {
          border: 0;
          padding: 0;
        }
        p {
          padding-bottom: 10px;
        }
        span {
          display: block;
          font-weight: bold;
        }
      }
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
