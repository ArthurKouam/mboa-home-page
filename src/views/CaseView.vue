<script setup>
  import card from '@/components/Case/card.vue';

  const cases = [
    {
      img: "/carousel3.svg",
      title: "Plateforme Digitale : Une Réponse Agile aux Défis de la Télécommunication",
      tag: "Telecommunications",
    },
    {
      img: "/carousel2.png",
      title: "Réinvention Digitale : Un Nouvel Horizon pour la Livraison de Courrier en Océanie",
      tag: "Logistique",
    },
    {
      img: "/carousel4.svg",
      title: "Révolution dans la Gestion des Retours : Un Système de RMA Innovant pour un Géant des Télécoms",
      tag: "Electronique",
    },
    {
      img: "/carousel6.svg",
      title: "Révolution Numérique dans le Secteur de la Santé Pédiatrique",
      tag: "Santé",
    },
    {
      img: "/carousel7.svg",
      title: "L'Automatisation au Service du Contrôle de Gestion",
      tag: "Nos produits",
    },
    {
      img: "/carousel1.svg",
      title: "La Révolution de la Gestion de Paie au Cameroun",
      tag: "Nos produits",
    },
  ]
</script>

<template>
  <div class=" w-full md:w-9/12 px-4 md:px-0 m-auto pt-36 md:pt-44">
    <h1 class=" text-neutral-400 mb-12 leading-16 text-4xl">Cas d'étude</h1>

    <div class=" flex flex-col gap-16">
      <card v-for=" (caser, index ) in cases" :caser="caser" :key="index"></card>
    </div>
  </div>
</template>

<style>

</style>