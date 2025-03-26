<script setup>
  defineProps({
    title: {
      type: String
    },
    des: {
      type: String
    },
    active: {
      type: Boolean
    },
    n: {
      type: Number
    }
  })

  defineEmits(['close'])

</script>

<template>

  <div class="w-full border-b-2 border-b-gray-500 py-8 md:py-12 overflow-hidden relative">
    <div class=" flex justify-between items-center">
      <span :class="{'text-black font-semibold': active, 'text-gray-500': !active}" class=" cursor-pointer md:text-6xl text-[40px] leading-[40px] max-w-[80%] transition-colors ease-in duration-300 hover:text-black hover:font-semibold  ">
        {{ title }}
      </span>
      <button @click.stop="$emit('close', n)" v-if="active" class=" rounded-full bg-black p-4 md:p-7 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M26.2901 4.29289C26.6806 3.90237 27.3138 3.90237 27.7043 4.29289C28.0948 4.68342 28.0948 5.31658 27.7043 5.70711L17.4129 15.9985L27.7044 26.2901C28.095 26.6806 28.095 27.3138 27.7044 27.7043C27.3139 28.0948 26.6807 28.0948 26.2902 27.7043L15.9987 17.4128L5.70711 27.7043C5.31658 28.0948 4.68342 28.0948 4.29289 27.7043C3.90237 27.3138 3.90237 26.6806 4.29289 26.2901L14.5845 15.9985L4.29301 5.70711C3.90249 5.31658 3.90249 4.68342 4.29301 4.29289C4.68354 3.90237 5.3167 3.90237 5.70723 4.29289L15.9987 14.5843L26.2901 4.29289Z" fill="currentColor"></path></svg>
      </button>
    </div>

    <p v-if="active" class="mt-8 md:mt-12 text-lg">
      {{ des }}
    </p>
  </div>

</template>