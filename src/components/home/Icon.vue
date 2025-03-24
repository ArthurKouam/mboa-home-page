<script setup>
  defineProps({
    icon: {
      type: String,
    }
  })
</script>

<template>
  <img :src="icon" class="h-14" />
</template>