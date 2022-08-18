<template>
  <div class=" rounded mt-20  mx-auto md:max-w-xl  max-w-md bg-white shadow-lg">
    <section class="p-10 flex flex-col justify-center">
      <p class="tracking-widest font-bold text-green-800"
        >Search your favorite cocktail</p
      >
      <input @input="sendTerm" ref="input" class=" p-3 bg-gray-100 h-9 mt-2" type="search" name="search" id="" />
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    sendTerm(){
      this.$emit('sendSearchTerm',this.$refs.input.value )
    }
}
}
</script>
