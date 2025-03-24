<script setup>
  defineProps({
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    }
  })
</script>

<template>
  <div class=" text-center ">
    <div class="flex flex-col md:mx-0 gap-2 md:gap-6 md:my-8 p-1.5 m-6">
      <div class="lg:text-4xl font-medium">{{ title }}</div>
      <div class="text-sm lg:text-lg">{{ subtitle }}</div>
    </div>
  </div>
</template>