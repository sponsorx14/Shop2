<template>
  <div class="pagination">
    <p>Page:</p>
    <ul class="pagination--list">
      <li v-for="item in displayPages">
        <a
            @click="changePage(item)"
            :class="currentPage === item ? 'active' : ''"
            href='#'
        >
          {{ item}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    data(){
      return {
        currentPage: 1,
      }
    },
    methods: {
      changePage(item){
        this.$store.dispatch('changePage', item);
      }
    },
    computed: {
      displayPages() {
        this.currentPage = this.$store.state.paginationModal.currentPage;
        return this.$store.state.paginationModal.pages;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  .pagination {
    margin: 0 auto;
    max-width: 600px;
    .pagination--list {
      display: flex;
      justify-content: center;
      padding: 0;
      li {
        list-style: none;
        a {
          transition: .3s;
          text-decoration: none;
          padding: 10px 15px;
          color: $blue;
          background-color: $white;
          border: 1px solid $grey;
          margin-right: -1px;
          &:hover {
            transition: .3s;
            background-color: $dark-white;
          }
          &.active {
            background-color: $yellow;
            color: $white;
            border-color: $yellow;
          }
        }
      }
    }
  }

</style>