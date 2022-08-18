<template>
<h2 class="text-center mt-10 text-4xl font-bold tracking-tighter" v-if="this.$store.getters.cocktails.length == 0">No Cocktails Matched Your Search Criteria</h2>
  <section v-else class="mt-10 flex flex-col items-center justify-center">
    <div>
      <h3 class="text-center tracking-widest text-3xl font-bold">Cocktails</h3>
    </div>
    <div class="mx-auto mt-20 gap-3 grid lg:grid-cols-2 xl:grid-cols-3">
      <div
        v-for="c in this.$store.getters.cocktails"
        class="bg-white shadow rounded inline-block w-96 m-1"
      >
        
          <!-- img container -->
          <img
            class="w-96 h-96 object-cover rounded-t"
            :src="c.strDrinkThumb"
            alt="d"
          />
        
        <div class="flex flex-col justify-center p-5 tracking-widest">
          <!-- description -->
          <span class="font-bold text-xl"> {{ c.strDrink }}</span>
          <span class="font-bold text-md"> {{ c.strGlass }}</span>
          <span class="text-gray-500"> {{ c.strAlcoholic }}</span>
          <button
            @click="cocktailDetails(c.idDrink)"
            class="rounded p-1 duration-500 hover:opacity-80 w-20 text-center tracking-widest bg-green-800 text-white"
          >
          <!--  -->
            Details
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  
  data(){
    return{
      cocktails:[]
    }
  },
  methods:{
    cocktailDetails(id){
      const route =  this.$route.path + 'cocktail/' + id
      console.log(this.$router)
      this.$router.push(route)
    },
    created(){
    }
  },
};
</script>
