<script setup>

</script>

<template>
  <header class="w-full flex justify-center fixed top-0 left-0 right-0 h-20 md:h-24 z-50 bg-white">
    <div class=" w-full px-4 flex justify-between items-center lg:w-9/12 lg:px-0">
      <div><img src="/logo.png" width="180" alt="logo mboa digital"></div>
      <nav class=" flex items-center ">
        <ul class="flex items-center md:gap-10 text-sm text-black">
          <li><RouterLink to="/">Acceuil</RouterLink></li>
          <li><RouterLink to="/about">A propos</RouterLink></li>
          <li><RouterLink to="/pricing">Tarification</RouterLink></li>
          <li><RouterLink to="/case">Cas d'étude</RouterLink></li>
          <li><RouterLink to="/contact-us">Contact</RouterLink></li>

        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>

</style>