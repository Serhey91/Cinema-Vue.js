<style scoped>
.movie {
  border-bottom: 2px solid #c0c0a8;
  padding: 2rem 0;
  display: flex;
}
.movie-poster img {
  width: 350px;
  display: block;
  height: 200px;
}
.movie-description {
  padding-left: 1rem;
}
.movie-title {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.movie-no-mathes {
  color: #ffa624;
  margin: 0;
  margin-right: 0.5rem;
  font-size: 2rem;
}

h1 {
  color: #ffa624;
  margin: 0;
  margin-right: 0.5rem;
  font-size: 2rem;
}
a {
  text-decoration: none;
}

.movie-rating {
  color: white;
  font-size: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  padding: 0.3rem 0.5rem 0.2rem;
  font-weight: bold;
}
.no-poster {
  border: 2px solid #fff;
  border-radius: 5px;
  width: 350px;
  height: 200px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
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
@media screen and (max-width: 800px) {
  .movie-poster img,
  .no-poster {
    width: 250px;
    height: 150px;
  }
  .movie-data {
    margin: 0;
  }
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
}

@media screen and (max-width: 500px) {
  .movie-poster img,
  .no-poster {
    height: 80px;
    width: 150px;
  }
  h1 {
    font-size: 1rem;
  }
  .movie-rating {
    padding: 0.1rem 0.2rem 0.1rem;
    margin-bottom: 0;
  }
  .movie-data {
    font-size: 0.8rem;
  }
}
</style>
<template>
     <div>   
   <div v-if='showMovies.length === 0' class='movie-no-mathes'>No mathes for: '{{findFilms}}'</div>   
   <div v-else>
   <b-pagination align="center" :total-rows="750" :per-page='50' v-model="pageNumber">
   </b-pagination>  
   <hr>
   <div v-for="item in showMovies" class='movie'>
      <router-link v-bind:to='{name: "movie", params: {id: item.id}}'>
   <div class="movie-poster">
          <img v-if="item.poster_path" v-bind:src='"https://image.tmdb.org/t/p/w500_and_h282_face"+item.poster_path'>
          <div v-else class='no-poster'>No poster img</div>
          </div>
           </router-link>
          <div class="movie-description">
          <div class='movie-title'>
          <router-link v-bind:to='{name: "movie", params: {id: item.id}}'>
                    <h1>{{item.title}}
                    </h1>
                  </router-link>
                    <p class='movie-rating' v-bind:class='getClassRating(item.vote_average)'>Votes: {{item.vote_average}}</p>
                    <p class='movie-data'>Release: {{item.release_date}}</p>
                   </div>
                </div> 
    </div>
    <br>
    <b-pagination align="center" :total-rows="750" :per-page='50' v-model="pageNumber">
    </b-pagination>    
   </div>

    </div>
</template>
<script>
import bPagination from "bootstrap-vue/es/components/pagination/pagination";
export default {
  // finding films query string
  props: {
    findFilms: {
      type: String
    },
    // collection of films from the server
    listData: {
      type: Array,
      required: true
    },
    // size of the page with films
    size: {
      type: Number,
      required: false,
      default: 50
    }
  },
  data() {
    return {
      pageNumber: 0
    };
  },
  // computed prop for changing size and collection of films
  computed: {
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.listData.slice(start, end);
    },
    // using filter
    showMovies() {
      return this.paginatedData.filter(
        film =>
          film.title.toLowerCase().indexOf(this.findFilms.toLowerCase()) !== -1
      );
    }
  },
  methods: {
    // method for background of rating
    getClassRating(rating) {
      if (rating < 3) return 'red';
      else if (rating >3 && rating <6) return 'orange';
      else return 'green'
    }
  },
  // registering bootstrap component
  components: {
    "b-pagination": bPagination
  }
};
</script>
