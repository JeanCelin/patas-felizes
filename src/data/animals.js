// meses precisam ser escritos como "0." seguido do mes, exemplo: 10 meses = 0.10; 11 meses = 0.11

const animals = [
  {
    id: 1,
    slug: "suzy",
    category: "dogs",
    name: "Suzy",
    sex: "Fêmea",
    breed: "Vira-lata",
    age: 2,
    weight: 12,
    size: "Pequeno",
    location: "Abrigo Principal",
    status: true,
    adoptionFee: 80,
    images: [
      {
        id: "i01",
        src: "/dogs/suzy/suzy-main.jpg",
        alt: "Suzy",
      },
      {
        id: "i02",
        src: "/dogs/suzy/suzy1.jpg",
        alt: "Suzy, uma vira-lata fofa",
      },
      {
        id: "i03",
        src: "/dogs/suzy/suzy2.jpg",
        alt: "Suzy, uma vira-lata fofa",
      },
      {
        id: "i04",
        src: "/dogs/suzy/suzy3.jpg",
        alt: "Suzy, uma vira-lata fofa",
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
    about: {
      smallDescription:
        "Tímida e encantadora, Suzy é uma cadelinha de pelos macios que adora longas sonecas ao sol.",

      story:
        "Suzy chegou ao abrigo ainda filhote, após ser resgatada de uma região rural onde vivia sozinha. Mistura de beagle com basset, ela herdou o olhar curioso e o corpo baixinho característicos dessas raças. No começo, era muito assustada e passava boa parte do tempo escondida, observando tudo de longe. Com paciência e carinho da equipe, ela começou a se abrir — hoje, aceita afagos e até abana o rabo quando reconhece alguém de confiança.",

      personality:
        "Suzy é calma e reservada, mas muito doce quando se sente segura. Gosta de outros cães tranquilos, especialmente aqueles que respeitam seu espaço. Não se dá bem com gatos e costuma evitar ambientes muito agitados, o que inclui casas com crianças pequenas. É o tipo de cachorrinha que vai conquistar você com o olhar sereno e a delicadeza dos seus gestos.",

      idealHome:
        "O lar ideal para Suzy é um ambiente calmo, com tutores pacientes que compreendam seu jeito mais introspectivo. Ela se adapta bem a apartamentos ou casas pequenas, desde que tenha um cantinho confortável para descansar. Um quintal silencioso seria um bônus, especialmente se houver outro cão tranquilo como companhia.",

      specialNeeds:
        "Suzy não possui necessidades médicas especiais, mas precisa de tempo e respeito para se sentir à vontade em novos ambientes. Movimentos bruscos ou barulhos altos a assustam facilmente.",

      medicalHistory:
        "Está vacinada, castrada e microchipada. Fez todos os exames necessários e encontra-se em ótimo estado de saúde. Mantém uma rotina regular de check-ups e cuidados veterinários",
    },
  },
  {
    id: 2,
    slug: "mia",
    category: "cats",
    name: "Mia",
    sex: "Fêmea",
    breed: "Vira-lata",
    age: 9,
    weight: 3.5,
    size: "Pequeno",
    location: "Abrigo Central",
    status: true,
    adoptionFee: 60,
    images: [
      {
        id: "i01",
        src: "/cats/mia/mia-main.jpg",
        alt: "Mia, uma gata vira-lata curiosa e carinhosa",
      },
      {
        id: "i02",
        src: "/cats/mia/mia1.jpg",
        alt: "Mia, uma gata vira-lata curiosa e carinhosa",
      },
      {
        id: "i03",
        src: "/cats/mia/mia2.jpg",
        alt: "Mia, uma gata vira-lata curiosa e carinhosa",
      },
      {
        id: "i04",
        src: "/cats/mia/mia3.jpg",
        alt: "Mia, uma gata vira-lata curiosa e carinhosa",
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
      otherDogs: false,
      cats: true,
    },
    about: {
      smallDescription:
        "Serena e tranquila, Mia é uma gata dócil que adora tirar longos cochilos e passear calmamente pelo ambiente.",

      story: `Mia foi encontrada em uma zona rural, já adulta, vagando sozinha entre os campos. Apesar da vida simples e solitária que levava, ela se mostrava curiosa e confiante. Quando foi resgatada, um dos voluntários do abrigo percebeu que, ao miar para ela, Mia respondia com um miado suave e encantador — e assim nasceu seu nome. Desde então, Mia se adaptou muito bem à nova rotina e se tornou uma das gatas mais queridas do abrigo.`,

      personality: `Mia é uma gata calma, observadora e muito afetuosa quando ganha confiança. Gosta de ambientes tranquilos, de se espreguiçar ao sol e de tirar cochilos nas horas mais silenciosas do dia. Também adora passear e explorar novos cantinhos com curiosidade. É sociável com humanos e outros gatos, desde que o convívio seja respeitoso e sem agitação.`,

      idealHome: `O lar ideal para Mia é um ambiente sereno, onde ela possa manter sua rotina de descanso e momentos de lazer. Casas ou apartamentos espaçosos, com áreas seguras para explorar, são perfeitos para ela. Tutores tranquilos e pacientes, que apreciem seu jeito calmo e independente, serão seus melhores companheiros.`,

      specialNeeds: `Mia não possui necessidades especiais. Apenas precisa de um ambiente seguro e silencioso, onde possa descansar e se sentir à vontade.`,

      medicalHistory: `Mia foi castrada, vacinada e microchipada. Está com a saúde em dia e realiza consultas veterinárias regulares para garantir seu bem-estar.`,
    },
  },
  {
    id: 3,
    slug: "lira",
    category: "dogs",
    name: "Lira",
    sex: "Fêmea",
    breed: "Vira-lata",
    age: 2,
    weight: 14,
    size: "Pequeno",
    location: "Abrigo Central",
    status: true,
    adoptionFee: 80,
    images: [
      {
        id: "i09",
        src: "/dogs/lira/lira-main.jpg",
        alt: "Lira, uma cachorra alegre",
      },
      {
        id: "i10",
        src: "/dogs/lira/lira1.jpg",
        alt: "Lira, uma cachorra alegre",
      },
      {
        id: "i11",
        src: "/dogs/lira/lira2.jpg",
        alt: "Lira, uma cachorra alegre",
      },
      {
        id: "i12",
        src: "/dogs/lira/lira3.jpg",
        alt: "Lira, uma cachorra alegre",
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
        "Cheia de energia e com um apetite invejável, Lira é uma cachorrinha alegre que ama correr, brincar e estar perto de pessoas.",
      story: `Lira foi resgatada de uma família que, infelizmente, não podia mais sustentá-la. Desde o primeiro dia no abrigo, sua energia contagiante chamou a atenção de todos. Mistura de beagle com basset, ela herdou o faro apurado e a curiosidade das duas raças — mas com pernas mais longas do que o comum, o que a torna uma corredora nata. Sempre animada, Lira adora desafios físicos e não dispensa uma boa refeição depois das brincadeiras.`,

      personality: `Lira é uma cachorra extrovertida, confiante e cheia de vitalidade. Adora brincar de correr, buscar brinquedos e explorar o ambiente. É extremamente sociável com pessoas e outros cães, e se dá muito bem com crianças, sendo ótima companhia para famílias ativas. No entanto, não se dá bem com gatos, pois seu instinto de caça pode falar mais alto.`,

      idealHome: `O lar ideal para Lira é um ambiente com espaço para correr e brincar, como uma casa com quintal ou uma família que goste de passeios e atividades ao ar livre. Ela precisa de tutores dispostos a acompanhar seu ritmo energético e oferecer bastante estímulo físico e mental.`,

      specialNeeds: `Lira não possui necessidades especiais, mas precisa de uma rotina com exercícios diários e tempo para gastar energia. Longas caminhadas e brincadeiras são essenciais para seu equilíbrio.`,

      medicalHistory: `Lira está vacinada e microchipada. Passou por avaliação veterinária completa e está com a saúde perfeita, pronta para começar uma nova vida com sua futura família.`,
    },
  },
  {
    id: 4,
    slug: "luna",
    category: "dogs",
    name: "Luna",
    sex: "Fêmea",
    breed: "Vira-lata",
    age: 12,
    weight: 9,
    size: "Pequeno",
    location: "Abrigo Leste",
    status: true,
    adoptionFee: 40,
    images: [
      {
        id: "i13",
        src: "/dogs/luna/luna-main.jpg",
        alt: "Luna, uma vira-lata encantadora",
      },
      {
        id: "i14",
        src: "/dogs/luna/luna1.jpg",
        alt: "Luna, uma vira-lata encantadora",
      },
      {
        id: "i15",
        src: "/dogs/luna/luna2.jpg",
        alt: "Luna, uma vira-lata encantadora",
      },
      {
        id: "i16",
        src: "/dogs/luna/luna3.jpg",
        alt: "Luna, uma vira-lata encantadora",
      },
    ],
    health: {
      vaccinated: true,
      microchipped: false,
      neutered: false,
      healthy: true,
    },
    compatibility: {
      children: true,
      otherDogs: true,
      cats: true,
    },
    about: {
      smallDescription:
        "Luna é uma simpática senhorinha de pelos pretos e olhar doce. Tranquila e carinhosa, ela adora um colo e longas sonecas ao sol.",

      story: `Luna chegou ao abrigo já idosa, após viver muitos anos sob os cuidados de uma família que não pôde mais ficar com ela. De estatura baixinha e origem mista de pincher com outra raça não identificada, ela conquistou a todos com sua serenidade e seu jeitinho afetuoso. Hoje, com cerca de 12 anos, Luna passa boa parte do tempo descansando, mas sempre acorda pronta para receber um carinho ou deitar ao lado de alguém que lhe ofereça companhia.`,

      personality: `Luna é dócil, calma e muito carinhosa. Gosta da presença humana e aprecia cafunés e conversas suaves. Já não se interessa tanto por brincadeiras, mas continua sendo uma excelente companheira para quem busca um animal tranquilo e amoroso. É indiferente à presença de outros cães e gatos, convivendo bem com todos sem demonstrar ciúmes ou medo.`,

      idealHome: `O lar ideal para Luna é um ambiente silencioso e confortável, com tutores pacientes e amorosos que compreendam suas necessidades de uma cachorrinha idosa. Ela se adapta bem a apartamentos e casas pequenas, desde que tenha uma caminha macia e um espaço tranquilo para descansar.`,

      specialNeeds: `Devido à idade avançada e ao desgaste dos dentes, Luna deve evitar alimentos muito duros. Refeições úmidas ou ração amolecida são ideais para ela. Também é importante manter acompanhamento veterinário regular para monitorar sua saúde.`,

      medicalHistory: `Luna foi vacinada e está com a saúde estável para sua idade. Ainda não foi microchipada nem castrada, mas recebe todos os cuidados necessários no abrigo para garantir seu conforto e bem-estar.`,
    },
  },
  {
    id: 5,
    slug: "brutos",
    category: "dogs",
    name: "Brutos",
    sex: "Macho",
    breed: "Vira-Lata",
    age: 6,
    weight: 20,
    size: "Grande",
    location: "Abrigo Sul",
    status: true,
    adoptionFee: 100,
    images: [
      {
        id: "i17",
        src: "/dogs/brutos/brutos-main.png",
        alt: "Brutos",
      },
      {
        id: "i18",
        src: "/dogs/brutos/brutos1.png",
        alt: "Brutos",
      },
      {
        id: "i19",
        src: "/dogs/brutos/brutos2.png",
        alt: "Brutos",
      },
      {
        id: "i20",
        src: "/dogs/brutos/brutos3.png",
        alt: "Brutos",
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
      cats: true,
    },
    about: {
      smallDescription:
        "Brutos é um cão de 6 anos com um coração enorme. Apesar do passado difícil, ele aprendeu a confiar novamente e hoje busca um lar cheio de amor e paciência.",

      story: `Brutos chegou ao abrigo após uma história triste de maus-tratos e abandono. Quando foi resgatado, estava magro, machucado e muito desconfiado das pessoas. Aos poucos, com cuidados constantes, carinho e paciência da equipe, ele começou a se abrir novamente. Hoje, é um cão forte e carinhoso, que adora receber atenção e aproveita cada demonstração de afeto como se fosse a primeira vez.`,

      personality: `Brutos é leal e protetor, mas ao mesmo tempo muito sensível. Ele precisa de tempo para confiar completamente, mas quando o faz, se torna um amigo fiel e amoroso. Gosta de caminhadas tranquilas e de estar perto de quem confia. Apesar do tamanho e da aparência firme, é muito amoroso.`,

      idealHome: `O lar ideal para Brutos é com tutores pacientes e experientes, que entendam sua história e saibam oferecer segurança e afeto. Um ambiente calmo, com espaço para ele se movimentar e relaxar, é ideal. Ele se dá bem com pessoas adultas e pode conviver com outros cães equilibrados, desde que a adaptação seja feita com cuidado.`,

      specialNeeds: `Por ter um passado de maus-tratos, Brutos precisa de um processo de adaptação gradual e previsível. Deve conviver com pessoas que respeitem seus limites e ofereçam uma rotina estável e segura.`,

      medicalHistory: `Brutos foi vacinado e microchipado. Passou por tratamento veterinário completo após o resgate e atualmente está com a saúde em dia. Recebe acompanhamento regular para garantir seu bem-estar físico e emocional.`,
    },
  },
  {
    id: 6,
    slug: "koda",
    category: "dogs",
    name: "Koda",
    sex: "Macho",
    breed: "Husky siberiano",
    age: 5,
    weight: 35,
    size: "Grande",
    location: "Fazenda Oeste",
    status: true,
    adoptionFee: 170,
    images: [
      {
        id: "i21",
        src: "/dogs/koda/koda-main.webp",
        alt: "Thor, um pastor alemão protetor",
      },
      {
        id: "i22",
        src: "/dogs/koda/koda1.webp",
        alt: "Thor, um pastor alemão protetor",
      },
      {
        id: "i23",
        src: "/dogs/koda/koda2.webp",
        alt: "Thor, um pastor alemão protetor",
      },
      {
        id: "i24",
        src: "/dogs/koda/koda3.jpg",
        alt: "Thor, um pastor alemão protetor",
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
      cats: true,
    },
    about: {
      smallDescription:
        "Koda é um Husky majestoso e enérgico, com olhar penetrante e personalidade carismática. Ele adora atividades ao ar livre e explorar novos ambientes.",

      story: `Koda foi encontrado há alguns anos, perdido e sozinho, após se separar de sua família. Apesar das tentativas de localizar seus donos, ninguém apareceu para buscá-lo. Desde então, ele se adaptou ao abrigo, tornando-se uma presença marcante entre os voluntários e outros cães. Sua história é de resiliência: mesmo após anos de abandono, Koda manteve sua natureza amigável e seu espírito brincalhão.`,

      personality: `Koda é confiante, ativo e inteligente. Ele adora correr, brincar e se desafiar com atividades físicas. Apesar de seu porte imponente, é carinhoso com pessoas de confiança e gosta de interações positivas. Pode ser reservado com estranhos, mas sua lealdade e afeto se mostram intensos com quem conquista sua confiança.`,

      idealHome: `O lar ideal para Koda é com tutores experientes em raças de alta energia, que possam oferecer exercícios diários e estímulos mentais constantes. Uma casa com quintal ou acesso a áreas abertas é essencial, assim como passeios longos e brincadeiras interativas. Ele se adapta bem a famílias ativas, mas precisa de paciência e consistência devido ao seu histórico de abandono.`,

      specialNeeds: `Koda não possui necessidades médicas especiais, mas precisa de atenção à sua saúde mental e física, garantindo atividades regulares e um ambiente estimulante. O cuidado com exercícios e socialização é fundamental para seu bem-estar.`,

      medicalHistory: `Koda foi vacinado, castrado e microchipado. Passou por avaliações veterinárias regulares e mantém boa saúde geral. Recebe acompanhamento contínuo para garantir que esteja sempre ativo e saudável.`,
    },
  },
  {
    id: 7,
    slug: "pacoca",
    category: "dogs",
    name: "Paçoca",
    sex: "Macho",
    breed: "Vira-lata",
    age: 0.5,
    weight: 0.7,
    size: "Pequeno",
    location: "Abrigo Principal",
    status: false,
    adoptionFee: 80,
    images: [
      {
        id: "i01",
        src: "/dogs/pacoca/pacoca-main.jpg",
        alt: "Suzy",
      },
      {
        id: "i02",
        src: "/dogs/pacoca/pacoca1.jpg",
        alt: "Suzy, uma vira-lata fofa",
      },
      {
        id: "i03",
        src: "/dogs/pacoca/pacoca2.jpg",
        alt: "Suzy, uma vira-lata fofa",
      },
      {
        id: "i04",
        src: "/dogs/pacoca/pacoca3.jpg",
        alt: "Suzy, uma vira-lata fofa",
      },
    ],
    health: {
      vaccinated: true,
      microchipped: false,
      neutered: false,
      healthy: true,
    },
    compatibility: {
      children: true,
      otherDogs: false,
      cats: false,
    },
    about: {
      smallDescription:
        "Paçoca é um filhote marrom cheio de vida, brincalhão e curioso, sempre pronto para fazer novos amigos e explorar o mundo ao redor.",

      story: `Paçoca chegou ao abrigo com apenas quatro meses de idade, após ser encontrado sozinho em um bairro residencial. Mesmo tão jovem, já demonstrava uma personalidade encantadora: alegre, curioso e sempre disposto a brincar. Desde então, vem crescendo forte e saudável, conquistando todos com seu jeitinho carinhoso e energia sem fim.`,

      personality: `Paçoca é um filhote divertido e amoroso, adora correr, brincar com bolinhas e receber atenção. Está em plena fase de descoberta, aprendendo a conviver com pessoas e outros animais. É sociável, carinhoso e aprende rápido, o que o torna um ótimo companheiro para quem busca um cão ativo e cheio de alegria.`,

      idealHome: `O lar ideal para Paçoca é um ambiente com espaço para brincar e tutores pacientes, dispostos a educá-lo com carinho. Famílias com crianças ou outros cães são perfeitas para ele, desde que possam acompanhá-lo em suas aventuras diárias.`,

      specialNeeds: `Por ser filhote, Paçoca precisa de uma rotina de treinos leves, brincadeiras e socialização. Também é importante manter o acompanhamento veterinário e a vacinação em dia para garantir um crescimento saudável.`,

      medicalHistory: `Paçoca já recebeu as primeiras vacinas e foi vermifugado. Ainda é muito jovem para castração, mas o procedimento será realizado quando atingir a idade adequada. Está com excelente saúde e cheio de energia para brincar e crescer feliz.`,
    },
  },
];

export default animals;
