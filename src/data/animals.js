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
      neutered: true,
      healthy: true,
    },
    compatibility: {
      children: true,
      otherDogs: true,
      cats: false,
    },
    smallDescription:
      "Amigável e brincalhão, Max adora longas caminhadas e brincar de buscar.",
    story: `Max chegou até nós em janeiro de 2024...`,
    personality: `Max é um cão extremamente amoroso e leal...`,
    idealHome: `Max precisa de uma família que tenha tempo...`,
    specialNeeds: `Max não tem necessidades especiais...`,
    medicalHistory: `Max chegou com sarna, que foi tratada...`,
  },
];
export default animals;
