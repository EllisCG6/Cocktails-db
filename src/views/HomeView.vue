<template>
  <main class="mx-auto">
   <SearchBar @sendSearchTerm="updateCocktails"/>
    <Loading v-if="loading"/>
   <ShowCocktails v-else />
  </main>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'
import ShowCocktails from '@/components/ShowCocktails.vue'
 import Loading from '@/components/Loading.vue' 

export default {
  name: 'HomeView',
  components: {
    SearchBar,
    ShowCocktails,
    Loading, 
  },
  data() {
    return {
      searchTerm: '',
      url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
      loading: false
    }
  },
  methods: {
    async fetchCocktails(searchTerm = 'a') {
      this.loading = true
      const response = await fetch(`${this.url}${searchTerm}`, {
        method: "get",
      })
      const data = await response.json();
      
      const {drinks} = data
      this.loading = false;
      for(var i of drinks){
        this.$store.state.cocktails.push(i)
      }
      
      
       
    },
   async updateCocktails(e){
     this.$store.state.cocktails = []
     await this.fetchCocktails(e)
    }
  },
  created() {
    this.fetchCocktails()
  }
}
</script>
