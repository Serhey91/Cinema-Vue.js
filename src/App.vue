
<style scoped>
#app {
  background-color: #3f3f3f;
  padding: 0;
  color: #fff;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
.header {
  background-color: #2f2f2f;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.header_img {
  width: 10%;
  height: 90px;
}
.header_title {
  width: 90%;
  text-align: right;
  display: inline-block;
  margin: 0;
  font-size: 2.5rem;
}
@media screen and (max-width: 800px) {
  .header_img {
    width: 15%;
    height: 60px;
  }
  .header_title {
    font-size: 2rem;
  }
}
@media screen and (max-width: 500px) {
  .header_img {
    width: 15%;
    height: 60px;
  }
  .header_title {
    font-size: 1.2rem;
  }
}
</style>
<template>
  <div id="app">
    <div class="header">
    <img class='header_img' src="./assets/logo.png">  
    <p class='header_title'>Cinema Vue.js app</p>
    </div>
    <div class='container'>
      
      <router-view :movies='movies'></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      url:
        "https://api.themoviedb.org/3/movie/now_playing?api_key=e530dbf87d3f35fe1c14ace5c962084a&page="
    }
  },
  created() {
    for (let x = 1; x <= 40; x++) {
      this.$http
        .get(`${this.url}${x}`)
        .then(response => response.json())
        .then(data => 
          data.results.forEach(movieObj => this.movies.push(movieObj)))
    }}}
 
  

</script>
