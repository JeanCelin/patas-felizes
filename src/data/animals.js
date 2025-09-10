const animals = [
  {
    id: "max",
    category: "dogs",
    name: "Max",
    sex: "Macho",
    breed: "Golden Retriever",
    age: 4,
    weight: 28,
    size: "Grande",
    location: "Abrigo Principal",
    status: true,
    adoptionFee: 150,
    images: [
      {
        id: "i01",
        src: "/dogs/max.jpeg",
        alt: "Max, um golden retriever brincalhão",
      },
      {
        id: "i02",
        src: "/dogs/max.jpeg",
        alt: "Max, um golden retriever brincalhão",
      },
      {
        id: "i03",
        src: "/dogs/max.jpeg",
        alt: "Max, um golden retriever brincalhão",
      },
      {
        id: "i04",
        src: "/dogs/max.jpeg",
        alt: "Max, um golden retriever brincalhão",
      },
    ],
    health: {
      vaccinated: true,
      microchipped: true,
      neutered: false,
      healthy: true,
    },
    compatibility: {
      children: true,
      otherDogs: true,
      cats: false,
    },
    about: {
      smallDescription:
        "Amigável e brincalhão, Max adora longas caminhadas e brincar de buscar.",

      story: `Max chegou até nós em janeiro de 2024, após ser encontrado vagando pelas ruas em condições precárias. Estava desnutrido e com medo de pessoas, mas com muito amor e cuidado, ele se transformou no cão amoroso e brincalhão que é hoje. Max teve que passar por um tratamento para sarna e foi castrado durante sua recuperação.`,

      personality: `Max é um cão extremamente amoroso e leal. Ele adora brincar de buscar a bolinha e é muito inteligente, aprendendo comandos rapidamente. É um companheiro perfeito para famílias ativas que gostam de caminhadas e atividades ao ar livre. Max também é muito protetor com sua família, mas nunca agressivo.`,
      idealHome: `Max precisa de uma família que tenha tempo para exercitá-lo diariamente. Uma casa com quintal seria ideal, mas não é obrigatório desde que ele tenha caminhadas regulares. Ele se daria bem com crianças de todas as idades e outros cães, mas não recomendamos para casas com gatos.`,
      specialNeeds: `Max não tem necessidades especiais, mas precisa de exercícios regulares para manter sua saúde física e mental. Ele também se beneficia de atividades que estimulem sua inteligência, como brinquedos interativos.`,
      medicalHistory: `Max chegou com sarna, que foi completamente tratada. Ele foi castrado, vacinado e microchipado. Atualmente está em perfeita saúde e em dia com todos os cuidados veterinários.`,
    },
  },
];
export default animals;
