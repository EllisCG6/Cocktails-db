<template>
  <Loading v-if="loading"></Loading>
  <main v-else  class="flex flex-col justify-center items-center">
    <div class="text-center mt-10">
      <router-link
        to="/"
        class="rounded p-3 duration-500 hover:opacity-80 w-20 text-center tracking-widest bg-green-800 text-white"
        >BACK HOME</router-link
      >

      <h4 class="font-bold text-4xl mt-5">{{ Name }}</h4>
    </div>

    <div class="grid md:grid-cols-[1fr_1fr] mx-auto gap-5 items-center mt-10">
      <img :src="Thumb" alt="thumb" class="object-contain w-96 h-96 rounded" />

      <div class="text-lg pt-0 md:max-w-lg max-w-xs lg:max-w-xl text-left">
        <p class="detail"><span class="span-detail">Name:</span>{{ Name }}</p>
        <p class="detail">
          <span class="span-detail">Category:</span>{{ Category }}
        </p>
        <p class="detail">
          <span class="span-detail">Info:</span>{{ Alcoholic }}
        </p>
        <p class="detail"><span class="span-detail">Glass:</span>{{ Glass }}</p>
        <p class="detail">
          <span class="span-detail">Ingredients:</span>{{ Ingredient1 }}
          {{ Ingredient2 }} {{ Ingredient3 }} {{ Ingredient4 }}
        </p>
        <p class="detail">
          <span class="span-detail">Instructions:</span>{{ Instructions }}
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import Loading from '@/components/Loading.vue'

export default {
  components:{
    Loading
  },
  props: ["id"],
  computed: {
    Category() {
      return this.selectedCocktail.strCategory;
    },
    Alcoholic() {
      return this.selectedCocktail.strAlcoholic;
    },
    Thumb() {
      return this.selectedCocktail.strDrinkThumb;
    },
    Glass() {
      return this.selectedCocktail.strGlass;
    },
    Ingredient1() {
      return this.selectedCocktail.strIngredient1;
    },
    Ingredient2() {
      return this.selectedCocktail.strIngredient2;
    },
    Ingredient3() {
      return this.selectedCocktail.strIngredient3;
    },
    Ingredient4() {
      return this.selectedCocktail.strIngredient4;
    },
    Instructions() {
      return this.selectedCocktail.strInstructions;
    },
    Name() {
      return this.selectedCocktail.strDrink;
    },
  },
  data() {
    return {
      selectedCocktail: null,
      loading: false,
    };
  },
  async created() {
    this.loading = true;
    this.selectedCocktail = this.$store.getters.cocktails.find(
      (cocktail) => cocktail.idDrink === this.id
    );
    this.loading = false;
    if (this.$store.getters.cocktails.length == 0) {
      this.loading = true;
      await this.fetchCocktailByID(this.id);
      console.log("a Â");
      console.log(this.selectedCocktail);
      this.loading = false;
    }
  },
  methods: {
    async fetchCocktailByID(searchTerm) {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
      const response = await fetch(`${url}${searchTerm}`, {
        method: "get",
      });
      const data = await response.json();

      console.log("a venit");
      console.log(data);
      const { drinks } = data;
      this.selectedCocktail = drinks[0];
    },
  },
};
</script>
