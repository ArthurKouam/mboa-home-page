<script setup>
  import headerComponent from './components/headerComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
  <headerComponent></headerComponent>
  <RouterView></RouterView>
  <FooterComponent class=" mt-20 md:mt-28"></FooterComponent>
</template>

<style scoped>

</style>
