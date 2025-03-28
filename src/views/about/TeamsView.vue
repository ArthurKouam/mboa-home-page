<script setup>
  import card from '@/components/about/card.vue';
  
  const teams = [
    {
      img: '/photos/img1.svg',
      name: "Habib Tafo",
      rule: "Associé, Directeur Général",
      description: "Habib Tafo est un consultant numérique avec plus de 15 ans d'expérience en livraison de solutions logicielles et conseil en transformation numérique. Il a réalisé des projets d’envergure nationale au sein de la DSI de Pôle Emploi, puis en Nouvelle-Zélande, avant de créer MBOA DIGITAL.", 
    },
    {
      img: '/photos/img2.svg',
      name: "Ernest Mougoue",
      rule: "Associé, Expert en Cybersécurité",
      description: "Ernest est un leader en cybersécurité qui a commencé sa carrière en effectuant des évaluations en tant que consultant avant de construire et de diriger des programmes de sécurité dans des organisations des secteurs technologique et de la fintech. Après avoir dirigé l'équipe de sécurité des produits chez Pinterest, il a rejoint MBOA DIGITAL en tant qu’associé pour porter plus haut notre ambition de créer des solutions robustes et sécurisées.",
    },
    {
      img: '/photos/img3.svg',
      name: "Samuel Nchinda",
      rule: "Associé, Board Advisor",
      description: "Samuel est un cadre supérieur chez Orange Business Service. Avec plus de 24 ans d'expérience dans la fourniture de solutions globales aux grandes entreprises, il occupe désormais le poste de vice-président des Solutions Orange Amérique, avec un fort accent sur la conquête du marché américain. Il apporte son expérience à MBOA DIGITAL pour construire un fournisseur de service global.",
    },
    {
      img: '/photos/img4.svg',
      name: "Ariel Tchougang",
      rule: "Tech Lead, Formateur",
      description: "Ariel est un ingénieur logiciel expérimenté. Il a passé plus d’une dizaine d’années à livrer des solutions pour de grands comptes avant d’embrasser un parcours de formateur cloud AWS. Ariel est pleinement investi dans le projet MBOA DIGITAL et apporte son expérience sur les volets expertise des projets, ainsi que la formation cloud des consultants.",
    },
    {
      img: '/photos/img5.svg',
      name: "Valery Melou",
      rule: "Delivery Lead",
      description: "Valéry, développeur web full-stack exceptionnel et atypique, incarne l'essence de la jeunesse dynamique qui caractérise MBOA DIGITAL. Issu d'un parcours autodidacte, il a perfectionné ses compétences en développant pour divers clients en tant que freelance sur des plateformes en ligne avant de s'engager avec MBOA DIGITAL. Au fil des années, Valéry s'est révélé être un pilier crucial de l'entreprise, renforçant la satisfaction des clients grâce à son leadership proactif et à sa rigueur.",
    },
    {
      img: '/photos/img6.svg',
      name: "Divine Bah",
      rule: "People & Culture Lead",
      description: "Divine Bah est un leader expérimenté avec plus d'une décennie d'expérience au sein de plusieurs startups qu’il a cofondées. Il détient un doctorat en sciences humaines et des capacités de management hors pair. MBOA DIGITAL est son dernier challenge, et pour y arriver il a suivi un brillant cursus de réorientation, avec des cours et certifications ITIL 4, AWS, Azure, Scrum… Il est maintenant responsable de cultiver une dynamique d’excellence au sein de l’entreprise.",
    }
  ]
</script>

<template>

  <div class=" w-full md:w-9/12 px-4 md:px-0 m-auto pt-36 md:pt-44">
    <h1 class=" text-neutral-400 leading-11 text-4xl">Équipe</h1>

    <div class=" grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12 lg:gap-y-24 mt-14">
      <card v-for="(member, index) in teams" :member="member" :key="index"></card>
    </div>
  </div>

</template>