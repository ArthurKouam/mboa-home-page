<script setup>
  import card from '@/components/home/card.vue';
  import carrousselItem from '@/components/home/carrousselItem.vue';
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { ref, computed } from 'vue';
  import "swiper/css";
  import "swiper/css/navigation"
  import { Navigation, Autoplay } from "swiper/modules";
  import Icon from '@/components/home/Icon.vue';
  import { Vue3Marquee } from 'vue3-marquee';
  import Expertise from '@/components/home/Expertise.vue';
  import FooterComponent from '@/components/FooterComponent.vue';

  const modules = [Navigation, Autoplay];
  const datas = [
    {title: '100+', subtitle: 'Projets réalisés'},
    {title: 'Millons', subtitle: 'D\'utilisateurs finaux satisfaits'},
    {title: '30 à 50%', subtitle: 'D\'éconmie'},
    {title: 'Millions £', subtitle: 'De retour d\'investissement'},
    {title: 'Certified', subtitle: 'Clouds AWS & Azure'},
  ]

  const tab = ref([false, false, false, false, false])

  const getTab = computed(()=> tab.value)

  const icons = ['angular.svg', 'aws.svg', 'express.svg', 'nodejs.svg', 'react.svg', 'vuetify.svg', 'tailwind.svg', ]

  const breakpoints = {
          640: { slidesPerView: 1 },  
          768: { slidesPerView: 2 },  
          1024: { slidesPerView: 2.2 }
        }

  const close = (n)=>{
    tab.value[n] = false;
  }

  const open = (n)=>{
    for (let index = 0; index < tab.value.length; index++) {
      tab.value[index] = false 
    }
    
    tab.value[n] = true;
  }

  const width = ref(window.innerWidth)

</script>

<template>
  <div class=" pt-48 md:pt-52 flex gap-16 md:gap-32 flex-col items-center justify-center w-full px-4 md:w-9/12 md:px-0 m-auto">
    
    <div class=" md:grid grid-cols-12">
      <div class=" md:col-span-7 flex flex-col gap-9 md:gap-12">
        <h2 class=" leading-[44px] lg:leading-[70px] text-[40px] font-semibold lg:text-[64px]">Équipes de développeurs d’élite</h2>
        <p class="text-sm md:text-2xl">Gagnez en compétitivité en vous appuyant sur des compétences digitales de haut niveau. Embarquez votre équipe en <span class="font-bold">quelques jours</span>.</p>
        
        <div>
          <button class="flex items-center cursor-pointer relative z-20 justify-center gap-4 text-sm bg-transparent border rounded-full transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none px-9 py-4  border-black text-black">
            <span class="max-w-full overflow-hidden whitespace-nowrap text-ellipsis z-20 ">Discutons de votre projet</span>
          </button>
        </div>
      </div>
    </div>

    <div class=" w-full grid grid-cols-1 grid-rows-5 md:grid-cols-5 md:grid-rows-1 ">
      <card v-for="(data, index) in datas" :title="data.title" :subtitle="data.subtitle" :key="index"/>
    </div>

  </div>

  <div class=" mt-16 md:mt-32 bg-black py-32 text-white justify-center items-center text-center">

    <div class=" w-full px-4 md:w-9/12 md:px-0 flex flex-col gap-12 md:gap-16 mx-auto">
      <div class="w-full">
        <img class="w-full" src="/src/assets/teams-working.png" alt="team working">
      </div>

      <h2 class=" leading-[44px] lg:leading-[70px] text-[40px] font-semibold lg:text-[64px]">Une porte grande ouverte vers un nouveau vivier de talents</h2>

      <p class="text-sm md:text-lg">
        Dans un contexte marqué par des chantiers de transition digitale majeurs, et une pénurie mondiale de travailleurs qualifiés, MBOA DIGITAL a développé un modèle qui permet de combiner des talents en Europe et en Afrique. Avec sa population jeune, éduquée, l’Afrique est considérée comme un continent d’avenir. Notre réseau, notre savoir-faire, nous permettent d’ouvrir à nos clients une porte sur de nouvelles ressources tout en gardant une proximité qui leur est chère. Plus de projets qui trainent dans les tiroirs, faute de ressources pour exécuter, nous nous inscrivons en partenaire de confiance pour une transformation digitale tout en douceur.
      </p>

      <div class="">
          <button class="m-auto flex text-white items-center cursor-pointer relative z-20 justify-center gap-4 text-sm bg-transparent border rounded-full transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none px-9 py-4  border-white hover:text-white undefined">
            <div class="absolute left-0 top-0 bottom-0 h-full rounded-full z-[-1] bg-black" style="width: 0%;"></div>
            <span class="max-w-full overflow-hidden whitespace-nowrap text-ellipsis z-20 ">Discutons de votre projet</span>
          </button>
        </div>
    </div>

  </div>

  <div class=" mt-16 md:mt-32 gap-16 md:gap-32 flex flex-col justify-center w-full px-4 md:w-9/12 md:px-0 m-auto">
    
    <div>
      <div class=" grid grid-cols-12">
        <div class="flex flex-col gap-6 md:gap-12 col-span-12 md:col-span-9 mb-10 md:mb-12 lg:col-span-7">
          <h3 class=" text-3xl leading-10">Nos réalisations</h3>
          <p class="font-medium leading-[44px] lg:leading-[70px] text-[40px] lg:text-[64px]">Des produits robustes utilisés à grande échelle</p>
        </div>

      </div>

      <swiper class="swiper" :space-between="50" :modules="modules"
        :slides-per-view="1"
        :breakpoints="breakpoints"
        :loop="true"
        :autoplay="{
          delay: 1500,
          disableOnInteraction: false
        }"
      >
        <swiper-slide  v-for="n in 7" :key="n">
          <carrousselItem></carrousselItem>
        </swiper-slide>
      </swiper>

    </div>

    <div class="w-full flex flex-col gap-14 lg:gap-20">
      <p class=" leading-[44px] lg:leading-[70px] text-[40px] text-center font-semibold lg:text-[64px]">
        Nous concevons et construisons <br> des produits innovants.
      </p>

      <p class="text-sm md:text-lg text-center">
        Le numérique est désormais au cœur de chaque entreprise. La capacité d'une entreprise à innover dans ce domaine est un véritable game changer. Chez MBOA DIGITAL, nous comprenons le métier et les processus de nos clients et nous nous engageons à fournir des solutions innovantes qui font la différence. Nous avons des antécédents prouvés de fourniture de logiciels robustes utilisés à grande échelle, et pour cela nous nous appuyons sur une palette technologique en constante évolution.
      </p>
    </div>

    <Vue3Marquee :pause-on-hover="true" :clone="true">
      <Icon class=" px-10 " v-for="(icon, n) in icons" :icon="'/src/assets/icon/'+ icon"></Icon>
    </Vue3Marquee>

    <div class="md:grid md:grid-cols-12">
      <div class="md:col-span-3 mb-4">
        <h4 class="md:text-[32px] text-[24px] md:leading-[40px]">Expertise</h4>
      </div>

      <div class=" md:col-span-9 mt-2">
        <Expertise v-for="n in 5" :n="n" @click="open(n)" @close="close" :active="getTab[n]" :title="'Consulting'" :des="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minus ducimus laborum nam quas explicabo quos mollitia facilis quibusdam, placeat aut voluptas? Repellat inventore omnis voluptatem dolorum sed dolorem accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minus ducimus laborum nam quas explicabo quos mollitia facilis quibusdam, placeat aut voluptas? Repellat inventore omnis voluptatem dolorum sed dolorem accusantium.'.repeat(2)"></Expertise>
      </div>
    </div>
   
  </div>

  <FooterComponent class=" mt-20 md:mt-28"></FooterComponent>

</template>

<style scoped>

</style>