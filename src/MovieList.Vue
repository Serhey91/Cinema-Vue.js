<style scoped>
.movie-list {
  flex-basis: 75%;
  padding: 2rem 1rem;
}

.movie-loading {
  color: #ffa624;
  margin: 0;
  margin-right: 0.5rem;
  font-size: 2rem;
}

@media screen and (max-width: 800px) {
  .movie-list {
    order: 2;
    padding: 0rem 1rem 1rem;
  }
}
</style>
<template>
    <div class='movie-list'> 
        <div v-if='moviesList.length' >
        <movie-pagination :findFilms='findFilms' :listData='moviesList'></movie-pagination>
        </div>
        <div v-else class='movie-loading'>Loading movies from server...</div>
    </div>
</template>
<script>
import Pagination from "./Pagination.vue";
export default {
  props: ["findFilms", "moviesList"],
  data() {
    return {
      
    }
  },
  // registering pagination component
  components: {
    "movie-pagination": Pagination
  }
};
</script>
