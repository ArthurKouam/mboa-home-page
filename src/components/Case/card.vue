<script setup>
  defineProps({
    caser: {
      required: true,
    }
  })
</script>


<template>
  <div class=" flex flex-col md:flex-row gap-7 lg:gap-10">

    <div class=" hidden flex-col flex-5/12 md:flex justify-center gap-7">

      <p class="bg-gray-300 px-9 py-2 rounded-3xl w-fit">{{ caser.tag }}</p>

      <h4 class="text-3xl md:text-4xl font-semibold">
        {{ caser.title }}
      </h4>

      <button class="flex gap-4 items-center justify-center cursor-pointer text-sm bg-transparent border rounded-full px-9 py-4  border-black text-black w-fit">
        <span class=" overflow-hidden whitespace-nowrap text-ellipsis z-20 ">Voir plus</span>
        <svg class="rotate-45" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8.50005 4C8.2239 4 8.00005 3.77614 8.00005 3.5C8.00005 3.22386 8.2239 3 8.50005 3H16.5C16.7761 3 17 3.22386 17 3.5V11.5C17 11.7761 16.7761 12 16.5 12C16.2239 12 16 11.7761 16 11.5V4.7071L3.85355 16.8536C3.65829 17.0488 3.34171 17.0488 3.14645 16.8536C2.95118 16.6583 2.95119 16.3417 3.14645 16.1464L15.2929 4H8.50005Z" fill="currentColor"></path></svg>
      </button>
    </div>

    <div class=" md:flex-7/12">
      <img class=" md:ml-8 w-full" :src="caser.img" alt="">
    </div>

    <div class=" flex flex-col md:hidden gap-6">
      <h4 class="text-3xl md:text-4xl font-semibold">
        {{ caser.title }}
      </h4>

      <p class="bg-gray-300 text-lg px-9 py-2 rounded-3xl w-fit md:text-xl">{{ caser.tag }}</p>

      <button class="flex gap-4 items-center justify-center cursor-pointer text-sm bg-transparent border rounded-full disabled:pointer-events-none px-9 py-4 w-fit">
        <span class=" overflow-hidden whitespace-nowrap text-ellipsis z-20 ">Voir plus</span>
        <svg class="rotate-45" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8.50005 4C8.2239 4 8.00005 3.77614 8.00005 3.5C8.00005 3.22386 8.2239 3 8.50005 3H16.5C16.7761 3 17 3.22386 17 3.5V11.5C17 11.7761 16.7761 12 16.5 12C16.2239 12 16 11.7761 16 11.5V4.7071L3.85355 16.8536C3.65829 17.0488 3.34171 17.0488 3.14645 16.8536C2.95118 16.6583 2.95119 16.3417 3.14645 16.1464L15.2929 4H8.50005Z" fill="currentColor"></path></svg>
      </button>
    </div>
  </div>
</template>

<style>

</style>