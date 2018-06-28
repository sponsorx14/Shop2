<template>
  <div class="modal">
    <transition-group name="fadeIn" enter-active-class="fadeIn" leave-active-class="fadeOut" tag="div">
      <div class="modal--item" :key="index" v-for="(item, index) in modalData">
        <i class="fas fa-info-circle"></i>
        <button>
          <i
              @click="removeModal(item, index)"
              class="fas fa-times"
          ></i>
        </button>
        <p>
          Your product:
          <span> {{ item.name }}</span>
          has been successfully added into your basket!
        </p>
      </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: "Modal",
    data() {
      return {
        modalData: this.$store.state.modalModule.modalData,
      }
    },
    methods: {
      removeModal(item) {
        this.$store.dispatch('clearTimer', item)
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  .modal {
    z-index: 3;
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

  @keyframes fadeIn {
    0% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(10px);
    }
  }

  .fadeIn {
    animation: fadeIn .2s ease;
  }

  .fadeOut {
    animation: fadeOut .2s ease;
  }
</style>