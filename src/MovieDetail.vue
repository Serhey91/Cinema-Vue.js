<style scoped>
.movie {
  display: flex;
  flex-direction: column;
  margin: 1rem;
}
.movie-description {
  margin: 0;
  padding: 0;
}
h1,
p {
  margin: 0.2rem 0;
}
.red {
  background: red;
}
.green {
  background: green;
}
.yellow {
  background: orange;
}
.movie-poster img {
  width: 100%;
}
.no-poster {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
  border-radius: 10px;
}
.movie-rating,
.movie-lang {
  color: white;
  font-size: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  padding: 0.3rem;
  margin: 1rem 0;
  font-weight: bold;
  display: inline-block;
}

.home {
  text-align: center;
  padding: 1rem 0;
  margin-bottom: 1rem;
}
.home a {
  border-top: 2px solid white;
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
  padding: 0.5rem 0;
}
</style>
<template>
<div class='detail' v-if="currentMovie">
      <div class='movie'>
      <div class="movie-poster">
          <img v-if="currentMovie.poster_path" v-bind:src='"https://image.tmdb.org/t/p/w500_and_h282_face"+currentMovie.poster_path'>
          <div v-else class='no-poster'>No poster img</div>
          </div>
          <div class="movie-description">
          <div class='movie-title'>         
                    <h1>{{currentMovie.title | upper}}
                    </h1>
                    <p class='movie-rating' v-bind:class='getClassRating(currentMovie.vote_average)'>Votes: {{currentMovie.vote_average}}</p>
                    <p class='movie-data'>Release: {{currentMovie.release_date}}</p>
                    <p class='movie-overview'>Description: {{currentMovie.overview}}</p>
                     <p class='movie-lang'>Language: {{currentMovie.original_language | upper}}</p>
                   </div>
                </div> 
    </div> 
    <div class="home">
        <router-link :to='{name: "home"}'>Back to results</router-link>
    </div>
</div>
</template>
<script>
export default {
  props: ["movies"],
  data() {
    return {
      currentID: 0
    };
  },
  // taking currewnt movie from the collection
  computed: {
    currentMovie() {
      let film = this.movies.find(item => item.id === this.$route.params.id);
      return film ? film : null;
    }
  },
  // filters for template
  filters: {
    upper(val) {
      return val.toUpperCase();
    }
  },
  methods: {
    // show correct color for rating
    getClassRating(rating) {
      if (rating < 3) return "red";
      else if (rating > 3 && rating < 6) return "orange";
      else return "green";
    }
  }
};
</script>