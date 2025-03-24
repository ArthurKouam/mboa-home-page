<script setup>
  defineProps({
    tag: {
      type: String
    },
    image: {
      type: String
    },
    title: {
      type: String
    },
    
  })
</script>

<template>
  <div class=" flex flex-col gap-4">
    <div>
      <img src="/src/assets/carousel2.png" class="w-full">
    </div>
    <p class=" text-4xl font-medium">La Révolution de la Gestion de Paie au Cameroun</p>
    <div>
      <div class=" bg-gray-400 rounded-4xl w-fit px-4 py-2 w-">informatique</div>
    </div>
  </div>
</template>

<style scoped>

</style>