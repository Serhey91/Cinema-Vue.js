<style >
.main-menu {
  display: flex;
  flex-direction: row;
}
@media screen and (max-width: 800px) {
  .main-menu {
    flex-direction: column;
  }
}
movie-list {
  width: 75%;
}
movie-filter {
  width: 25%;
}
@media screen and (max-width: 800px) {
}
</style>
<template>
 <div class='main-menu'>
      
      <movie-list
        :findFilms = 'textInput'
        :moviesList = 'movies'></movie-list>
        <movie-filter
        @emitFilter='textInput = $event'
        ></movie-filter>
     
</div>
</template>

<script>
import MovieList from "./MovieList.vue";
import MovieFilter from "./MovieFilter.vue";
export default {
  props: ['movies'],
  data() {
    return {
      textInput: "",
     
    }
  },
  components: {
    "movie-list": MovieList,
    "movie-filter": MovieFilter
  }
}
</script>