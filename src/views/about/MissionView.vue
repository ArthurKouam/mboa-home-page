<script setup>

</script>

<template>
  <main class=" w-full px-4 md:px-0 md:w-9/12 m-auto pt-40 md:pt-52">
    <div class=" flex flex-col gap-16 md:gap-16">
      <div class=" grid grid-cols-12">
        <div class=" col-span-12 md:col-span-9 lg:col-span-8 flex flex-col gap-10">
          <h1 class=" text-neutral-400 leading-11 text-3xl">Mission</h1>
          <p class=" font-semibold lg:leading-18 lg:text-[64px] text-4xl leading-11">Une équipe internationale pour relever un défi mondial</p>
        </div>
      </div>

      <div class="grid grid-cols-12">
        <p class=" col-span-12 lg:col-span-6 md:col-span-7 text-lg">
          MBOA DIGITAL est la réponse au défi d’excellence et de compétitivité des équipes tech en Europe et à l’international. ESN franco-camerounaise, nous sommes le “bras droit caché” des équipes tech de grands groupes en France, Belgique, Allemagne et Nouvelle Zélande. Avec +10 ans d’expérience dans les secteurs du Télécom, E-paiement, Logistique et Transport, nous répondons aux problématiques courantes des directions techniques.
        </p>
      </div>
      <div>
        <img class="w-full" src="/src/assets/teams.png" alt="">
      </div>

      <div class="md:grid grid-cols-12">
        <div class=" md:col-span-3 lg:col-span-4">

        </div>

        <div class=" md:col-span-9 lg:col-span-8 flex flex-col gap-6">
          <p>
            Au cœur de nos opérations se trouvent des équipes d’experts, principalement issus de la France et du vaste bassin de talents africains. Nos talents sont continuellement 
            formés aux nouvelles tendances technologiques grâce à un programme de formation et de mentorat internes sur mesure. Cette dévotion garantit notre alignement avec les 
            exigences dynamiques et compétitives du marché technologique. Fondée en 2018, notre ambition est de créer une niche substantielle dans le paysage technologique mondial, en agissant comme un pont entre les talents européens et africains de premier plan et les principales entreprises technologiques mondiales, favorisant un héritage d'innovation et d'excellence.
          </p>
          <div>

          <button class="flex items-center cursor-pointer relative z-20 justify-center gap-4 text-sm bg-transparent border rounded-full transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none px-9 py-4  border-black text-black">
            <span class="max-w-full overflow-hidden whitespace-nowrap text-ellipsis z-20 ">Rencotrez l'equipe</span>
          </button>
        </div>
        </div>

      </div>
    </div>
  </main>

  <main class="relative w-full bg-black mt-16 md:mt-32 py-24 text-white md:py-40">
    <div class=" absolute w-full h-full top-0 left-0 bg-center bg-cover afr"></div>
    <div class="md:w-9/12 md:px-0 m-auto w-full grid grid-cols-12 px-4">
      <div class="col-span-12 w-full md:px-0 lg:col-span-7 md:col-span-8">
        <h3 class="leading-[44px] lg:leading-[70px] text-[40px] font-semibold lg:text-[64px]">Une porte grande ouverte vers un nouveau vivier de talents</h3>
      </div>
      
    </div>

    <div class=" pt-14 md:w-9/12 md:px-0 m-auto w-full grid grid-cols-12 px-4">
        <p class="col-span-12 text-lg lg:col-span-8 md:col-span-7">
          Dans un contexte marqué par des chantiers de transition digitale majeurs, et une pénurie mondiale de travailleurs qualifiée, MBOA DIGITAL a développé un modèle qui permet de combiner des talents en Europe et en Afrique. Avec sa population jeune, éduquée, l’Afrique est considérée comme un continent d’avenir. Notre réseau, notre savoir-faire, nous permettent d’ouvrir à nos clients une porte sur de nouvelles ressources tout en gardant une proximité qui leur est chère. Plus de projets qui trainent dans les tiroirs, faute de ressources pour exécuter, nous nous inscrivons en partenaire de confiance pour une transformation digitale tout en douceur.
        </p>      
      </div>
  </main>

  <main class="md:grid md:w-9/12 m-auto grid-cols-12 w-full mt-16 md:mt-32">

    <div class=" col-span-2 lg:col-span-3 mb-8 md:mb-0 leading-10 text-3xl">Le saviez-vous ?</div>
    <div class=" col-span-10 lg:col-span-9 text-sm md:text-lg">
      <p>
        L’Europe, qui compte des talents tech de qualité, fait face à une pénurie, comme partout dans le monde. Cette tendance va s’accentuer dans les prochaines années, avec des centaines de milliers de postes non pourvus dans le digital. Dans le même temps, l'Afrique se distingue comme un bassin particulièrement avantageux, principalement en raison de sa jeunesse. Le continent compte environ 1,46 milliard d'habitants avec un âge moyen d'environ 19,5 ans, ce qui témoigne d'un vaste réservoir de talents technologiques potentiels.
      </p>
      <p class=" mt-5 md:mt-10">
        Rechercher des modèles alternatifs; créer dans notre cas des liens Europe - Afrique pour accompagner davantage les entreprises dans leur transition numérique tout en limitant les écueils est aujourd’hui vital pour une entreprise du numérique durable.
      </p>
    </div>
  </main>

</template>

<style scoped>
  .afr{
    background-image: url('/src/assets/africa-bg.png');
  }
</style>