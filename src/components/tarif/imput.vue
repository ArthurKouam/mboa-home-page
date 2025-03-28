<script setup>

  import { ref } from 'vue'

  const val = ref(0)

  const props = defineProps({
    aria: {
      required: true,
    },
    count: {
      required: true
    },
  })

  const emit = defineEmits(['add', 'reduce', 'count'])

  const reduce = () => {
    if(val.value>0){
      val.value--
      emit('reduce', props.count)
    }
  }

  const add = () => {
    val.value++
    emit('add', props.count)
  }

</script>

<template>
  <div class=" flex">
    <label class=" flex-1/2">
      {{ aria.label }}
    </label>
    <div class="flex flex-1/2">
      <input class=" border-0 border-b outline-none appearance-none" type="number" placeholder="0" v-model="val" @change="$emit('count', val, count)" min="0">
      <div class=" border-b flex gap-2 flex-row">
        <p>(jours)</p>
        <div class="flex flex-col gap-0.5">
          <button class="cursor-pointer" @click="add" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4.14708 12.3541C3.95147 12.1592 3.9509 11.8426 4.14582 11.647L9.6108 6.16252C9.82574 5.9468 10.1751 5.9468 10.39 6.16252L15.855 11.647C16.0499 11.8426 16.0493 12.1592 15.8537 12.3541C15.6581 12.549 15.3415 12.5485 15.1466 12.3528L10.0004 7.18827L4.85418 12.3528C4.65927 12.5485 4.34269 12.549 4.14708 12.3541Z" fill="black"></path></svg>
          </button>

          <button class="cursor-pointer" @click="reduce" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15.8527 7.64582C16.0484 7.84073 16.0489 8.15731 15.854 8.35292L10.389 13.8374C10.1741 14.0531 9.82477 14.0531 9.60982 13.8374L4.14484 8.35292C3.94993 8.15731 3.95049 7.84073 4.1461 7.64582C4.34171 7.4509 4.65829 7.45147 4.85321 7.64708L9.99942 12.8117L15.1456 7.64708C15.3406 7.45147 15.6571 7.4509 15.8527 7.64582Z" fill="black"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

