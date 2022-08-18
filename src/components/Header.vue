<template>
  <nav class="bg-white py-7 shadow-xl">
    <div class="flex items-center justify-between px-9" >
    <div><router-link to="/"><img class="object-fill h-5 w-48" :src="svg" alt="cocktails" /></router-link></div>

    <ul class="flex items-center"> 
      <li class="mx-3 tracking-widest	md:text-xl text-md duration-500  hover:text-green-700"><router-link to="/">HOME</router-link></li>
      <li class="mx-3 tracking-widest md:text-xl  text-md duration-500	hover:text-green-700"><router-link to="/about">ABOUT</router-link></li>
    </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      svg: "",
    };
  },
  created() {
    this.svg = require("../assets/logo.svg");
  },
};
</script>
