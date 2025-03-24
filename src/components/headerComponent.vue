<script setup>
  import { ref, onMounted } from 'vue'

  const open = ref(false)

  const nav = ref()


</script>

<template>
  <header class="w-full flex justify-center fixed top-0 left-0 right-0 h-20 md:h-24 z-50 bg-white">
    <div class=" w-full px-4 flex justify-between items-center lg:w-9/12 lg:px-0">
      <div><img src="/logo.png" width="180" alt="logo mboa digital"></div>
      <nav :class="{'active': open}" id="nav" class=" duration-300 w-full translate-x-full opacity-0 md:translate-x-0 md:opacity-1 md:w-fit bg-white p-10 absolute top-20 right-0 md:flex md:relative md:top-0 items-center">
        <ul ref="nav" class=" flex flex-col leading-11 md:flex-row min-h-screen md:min-h-0 text-3xl md:items-center gap-5 md:gap-10 md:text-sm text-black">
          <li><RouterLink to="/">Acceuil</RouterLink></li>
          <li><RouterLink to="/about">A propos</RouterLink></li>
          <li><RouterLink to="/pricing">Tarification</RouterLink></li>
          <li><RouterLink to="/case">Cas d'étude</RouterLink></li>
          <li><RouterLink to="/contact-us">Contact</RouterLink></li>
        </ul>
      </nav>
      <div class=" md:hidden">
        <svg @click="open = !open" v-if="!open" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        
        <button @click="open = !open" v-else class="btn rounded-full bg-black p-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M26.2901 4.29289C26.6806 3.90237 27.3138 3.90237 27.7043 4.29289C28.0948 4.68342 28.0948 5.31658 27.7043 5.70711L17.4129 15.9985L27.7044 26.2901C28.095 26.6806 28.095 27.3138 27.7044 27.7043C27.3139 28.0948 26.6807 28.0948 26.2902 27.7043L15.9987 17.4128L5.70711 27.7043C5.31658 28.0948 4.68342 28.0948 4.29289 27.7043C3.90237 27.3138 3.90237 26.6806 4.29289 26.2901L14.5845 15.9985L4.29301 5.70711C3.90249 5.31658 3.90249 4.68342 4.29301 4.29289C4.68354 3.90237 5.3167 3.90237 5.70723 4.29289L15.9987 14.5843L26.2901 4.29289Z" fill="currentColor"></path></svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
  .btn{
    animation: fade 0.6s ease-out;
  }

  .active{
    translate: 0;
    opacity: 1;
    transition: 600ms ease-out;
    
  }

  @keyframes fade {
    0%{
      opacity: 0;
    }
  }
</style>