<script setup>
  defineProps({
    member: {
      required: true
    }
  })
</script>

<template>
  <div class="flex flex-col justify-center md:flex-row gap-6">
    <div class="flex justify-center">
      <img class=" md:h-full md:w-full" :src="member.img" alt="">
    </div>
    <div class="flex flex-col gap-4 ">
      <div class=" flex flex-col gap-2 text-sm md:text-lg">
        <div class="text-2xl text-center md:text-start md:flex gap-2 font-semibold">
          <p class="text-center md:text-start"> {{ member.name }}</p>
          <div class="hidden md:block"></div>
        </div>
        <div class="text-center md:text-start">{{ member.rule }}</div>
        <div class="flex justify-center items-center md:hidden"></div>
      </div>
      <div>
        <p class="text-center md:text-start text-sm md:text-lg lg:line-clamp-5">
          {{ member.description }}
        </p>
      </div>
      <button class="hidden mt-2 lg:flex w-fit gap-4 items-center justify-center cursor-pointer text-sm border rounded-full px-9 py-4  border-black text-black">
        <span class=" overflow-hidden whitespace-nowrap text-ellipsis ">Voir plus</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8.50005 4C8.2239 4 8.00005 3.77614 8.00005 3.5C8.00005 3.22386 8.2239 3 8.50005 3H16.5C16.7761 3 17 3.22386 17 3.5V11.5C17 11.7761 16.7761 12 16.5 12C16.2239 12 16 11.7761 16 11.5V4.7071L3.85355 16.8536C3.65829 17.0488 3.34171 17.0488 3.14645 16.8536C2.95118 16.6583 2.95119 16.3417 3.14645 16.1464L15.2929 4H8.50005Z" fill="currentColor"></path></svg>
      </button>
    </div>
  </div>
</template>