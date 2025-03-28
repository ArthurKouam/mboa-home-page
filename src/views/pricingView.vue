<script setup>

  import imput from '@/components/tarif/imput.vue';
  import { ref } from 'vue'

  const arias = [
    {
      label: "Analysis"
    },
    {
      label: "UI UX Design"
    },
    {
      label: "Front End"
    },
    {
      label: "DevOps"
    },
    {
      label: "Quality Analysis"
    },
  ]

  const tab = [0, 0, 0, 0, 0]

  const total = ref(0)


  const calcul = (val, count) => {

    console.log(count)
    tab[count] = val;

    let sum = 0

    for (let index = 0; index < tab.length; index++)
      sum += tab[index];
      
    total.value = sum
  }

  const update = (count) => {
    tab[count] ++;

    let sum = 0

    for (let index = 0; index < tab.length; index++)
      sum += tab[index];
      
    total.value = sum
  }

  const _update = (count) => {
    tab[count] --;

    let sum = 0

    for (let index = 0; index < tab.length; index++)
      sum += tab[index];
      
    total.value = sum
  }

</script>

<template>
  <div class="w-full md:w-9/12 px-4 md:px-0 m-auto pt-36 md:pt-44">
    <h1 class=" text-neutral-400 leading-11 text-4xl mb-16">Evaluer mon projet</h1>

    <div class=" grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-64">
      
      <div class=" flex flex-col gap-10">
        <div class=" flex flex-col gap-5">
          <imput @add="update" @reduce="_update" @count="calcul" v-for="(aria, index) in arias" :aria="aria" :count="index" :key="index"></imput>
        </div>

        <div>
          <span>total</span>
          <p class=" text-4xl font-bold leading-16">
            {{ total * 300 }} EUR
          </p>
        </div>

        <div>
          <button class="flex items-center cursor-pointer relative z-20 justify-center gap-4 text-sm bg-transparent border rounded-full transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none px-9 py-4  border-black text-black">
            <span class="max-w-full overflow-hidden whitespace-nowrap text-ellipsis z-20 ">Discutons de votre projet</span>
          </button>
        </div>

        <div class=" text-xs">
          <p>
            (*) Ceci est un outil de simulation, et n’a aucune valeur contractuelle. 
            Merci de nous contacter pour discuter de votre projet, notre équipe se chargera d’établir une évaluation.
          </p>
        </div>
      </div>

      <div>
        <h3 class=" text-xl font-bold mb-10">Nos services</h3>

        <div class=" flex flex-col">
          <div class=" mb-10">
            <h4 class=" text-3xl mb-6">
              Equipe de développement As A Service
            </h4>
            <p class="md:text-lg">
              Pour les entreprises qui recherchent une équipe pour compléter un projet dans un délai court ou qui ont besoin de capacités supplémentaires ponctuelles. Ou à la recherche d'une équipe dédiée pour s'attaquer à leur important backlog de produits. Un partenaire long terme, qui développe une expertise sur vos métiers.
            </p>
          </div>

          <div class=" mb-14">
            <h4 class=" text-3xl mb-6">
              Service Desk As A Service
            </h4>
            <p class="md:text-lg">
              Pour les entreprises dédiées à offrir un service fiable à leurs utilisateurs finaux. Notre Service Desk fournit des SLA exigeants sur une base 24/7, avec une culture de résolution d'incidents centrée sur l'utilisateur final.            
            </p>
          </div>

          <div class=" mb-10">
            <h4 class=" text-xl font-bold mb-6">Nos engagements</h4>

            <ul class=" list flex flex-col gap-4 md:text-lg">
              <li>Garantie satisfaction, corrections à nos frais en cas de malfaçons</li>
              <li>Un interlocuteur senior, qualifié, qui suit votre projet avec vous</li>
              <li>Haut niveau de service avec des SLAs support exigeants</li>
              <li>Visibilité budget/réalisation, avec du reporting mensuel</li>
            </ul>
          </div>

          <div>
            <button class="flex items-center cursor-pointer relative z-20 justify-center gap-4 text-sm bg-transparent border rounded-full transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none px-9 py-4  border-black text-black">
              <span class="max-w-full overflow-hidden whitespace-nowrap text-ellipsis z-20 ">Parler a un commercial</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .list *::before{
    content: "";
    display: inline-block;
    margin-right: 10px;
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
  }
</style>