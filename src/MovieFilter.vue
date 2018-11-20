<style scoped>
.movie-filter {
  flex-basis: 25%;
  color: #fff;
  font-size: 1.15rem;
  margin-bottom: 2rem;
  padding: 2rem;
}

.filter_title {
  border-bottom: 3px solid #fff;
}

.filter_src {
  width: 100%;
  border-radius: 5px;
  outline: none;
  height: 1.8rem;
  text-indent: 5px;
  font-size: 20px;
  transition: all 1s ease;
}
.filter_src:focus {
  border-bottom: 3px solid blueviolet;
}

@media screen and (max-width: 800px) {
  .movie-filter {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    padding: 1rem;
    border-bottom: 2px solid #fff;
  }
  .filter_title {
    border-bottom: none;
  }
}
@media screen and (max-width: 800px) {
  
  .filter_title {
    font-size:1.5rem;
  }
}
</style>
<template>
    <div class='movie-filter'>
        <h2 class='filter_title'>
            Choose film
            </h2>
            <input 
            class='filter_src' 
            type="text" 
            placeholder="enter your film" 
            autocomplete="off"
            v-on:input='emitFilter'
            v-model='filterText'>
       
    </div>
</template>
<script>
export default {
  data() {
    return {
      filterText: ""
    };
  },
  methods: {
    emitFilter() {
      this.$emit("emitFilter", this.filterText);
    }
  }
};
</script>