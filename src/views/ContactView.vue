<script setup>

  import { ref } from 'vue'

  const firstname = ref('')
  const lastname = ref('')
  const email = ref('')
  const tel = ref('')
  const message = ref('')

</script>


<template>

  <div class="w-full md:w-9/12 px-4 md:px-0 m-auto pt-36 md:pt-44">
    <div class="grid md:grid-cols-12 md:gap-6 gap-y-14">
      <div class="flex flex-col  gap-8 col-span-5" style="opacity: 1; will-change: auto; transform: none;">
        <h2 class="lg:leading-[70px] lg:text-[64px] text-[40px] leading-[44px] font-semibold text-black">Dites bonjour</h2>
        <p class="md:text-lg text-sm mb-4">Dites-nous en plus sur votre projet ou dites simplement bonjour. Vous pouvez également nous envoyer un courriel à.</p>
        
        <div>
          <button class="flex items-center cursor-pointer justify-center gap-4 text-sm border rounded-full px-9 py-4  border-black text-black">
            <span class="max-w-full overflow-hidden whitespace-nowrap text-ellipsis z-20 ">contact@mboadigital.tech</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8.50005 4C8.2239 4 8.00005 3.77614 8.00005 3.5C8.00005 3.22386 8.2239 3 8.50005 3H16.5C16.7761 3 17 3.22386 17 3.5V11.5C17 11.7761 16.7761 12 16.5 12C16.2239 12 16 11.7761 16 11.5V4.7071L3.85355 16.8536C3.65829 17.0488 3.34171 17.0488 3.14645 16.8536C2.95118 16.6583 2.95119 16.3417 3.14645 16.1464L15.2929 4H8.50005Z" fill="currentColor"></path></svg>
          </button>
        </div>

      </div>


      <div class="flex flex-col gap-6 col-span-7" style="opacity: 1; will-change: auto; transform: none;">
        <div class="App">
          <div class="grid gap-6">
            <div class="grid  md:grid-cols-2 gap-5">
              <div class="relative md:text-lg text-sm ">

                <input v-model="firstname" type="text" class="peer bg-transparent border-b border-black text-black focus:outline-none focus:border-black placeholder-transparent w-full h-[56px]">
                <label :class="{'-top-3.5': firstname !== '', 'top-4' : firstname == ''}" for="firstname" class="absolute left-0 transition-all text-black peer-focus:-top-3.5 peer-focus:text-black text-base">Prénom</label>
                <div v-if="firstname == ''" class="text-red-500 text-xs">Prénom requis</div>
              
              </div>

              <div class="relative md:text-lg text-sm ">
                <input v-model="lastname" type="text" class="peer bg-transparent border-b border-black text-black focus:outline-none focus:border-black placeholder-transparent w-full h-[56px]">
                <label :class="{'-top-3.5': lastname !== '', 'top-4' : lastname == ''}" for="lastname" class="absolute left-0 transition-all text-black peer-focus:-top-3.5 peer-focus:text-black text-base">Nom de famille</label>
                <div v-if="lastname == ''" class="text-red-500 text-xs">Nom requis</div>
              </div>

            </div>

            <div class="relative md:text-lg text-sm ">
              <input v-model="email" type="text" class="peer bg-transparent border-b border-black text-black focus:outline-none focus:border-black placeholder-transparent w-full h-[56px]">
              <label :class="{'-top-3.5': email !== '', 'top-4' : email == ''}" for="email" class="absolute left-0 transition-all text-black peer-focus:-top-3.5 peer-focus:text-black text-base">Email</label>
              <div v-if="email == ''" class="text-red-500 text-xs">Email requis</div>
            </div>

            <div class="relative md:text-lg text-sm ">
              <input v-model="tel" type="text" class="peer bg-transparent border-b border-black text-black focus:outline-none focus:border-black placeholder-transparent w-full h-[56px]">
              <label for="phone" :class="{'-top-3.5': tel !== '', 'top-4' : tel == ''}" class="absolute left-0 transition-all text-black peer-focus:-top-3.5 peer-focus:text-black text-base">Téléphone</label>
              <div v-if="tel == ''" class="text-red-500 text-xs">Le numéro de téléphone est requis</div>
            </div>

            <div class="relative md:text-lg text-sm">
              <textarea v-model="message" class="peer bg-transparent border-b border-black text-black focus:outline-none focus:border-black placeholder-transparent w-full h-auto"></textarea>
              <label for="message" :class="{'-top-3.5': message !== '', 'top-4' : message == ''}" class="absolute left-0 transition-all text-black peer-focus:-top-3.5 peer-focus:text-black text-base">Message</label>
              <div v-if="message == ''" class="text-red-500 text-xs">Le message est requis</div>
            </div>
            <div>
              <button class=" cursor-pointer justify-center gap-4 text-sm border rounded-full px-9 py-4  border-black text-black">
                <span class="max-w-full overflow-hidden whitespace-nowrap text-ellipsis z-20 ">Envoyer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>