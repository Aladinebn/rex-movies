const MovieList = [
  {
    id: 1,
    title: "baby driver",
    description:
      "Chauffeur pour des braqueurs de banque, Baby a un truc pour être le meilleur dans sa partie : il roule au rythme de sa propre playlist. Lorsqu’il rencontre la fille de ses rêves, Baby cherche à mettre fin à ses activités criminelles pour revenir dans le droit chemin. Mais il est forcé de travailler pour un grand patron du crime et le braquage tourne mal… Désormais, sa liberté, son avenir avec la fille qu’il aime et sa vie sont en jeu.",
    posterURL: "baby driver.png",
    rating: 3.9,
    trailer: "https://youtu.be/D9YZw_X5UzQ",
  },
  {
    id: 2,
    title: "bad teacher",
    description:
      "Elizabeth Halsey n’est vraiment pas faite pour enseigner. Elle n’a rien à faire des enfants, elle parle mal, elle boit, fume n’importe quoi et ne pense qu’à une chose : se marier pour quitter son job d’enseignante au collège. Lorsque son fiancé la plaque, elle se met en tête d’épouser un jeune prof remplaçant aussi séduisant que riche… Mais Elizabeth a une rivale, la très volontaire Amy, une excellente enseignante. Le prof de gym qui lui fait des avances super lourdes ne simplifie pas les choses non plus. Les plans tordus d’Elizabeth et leurs délirantes conséquences vont secouer ses élèves et ses confrères, mais c’est surtout elle qui n’en sortira pas indemne…",
    posterURL: "bad teacher.png",
    rating: 2.1,
    trailer: "https://www.youtube.com/watch?v=GahC5cVsU6A",
  },
  {
    id: 3,
    title: "the perfume",
    description:
      "Jean-Baptiste Grenouille (Ben Whishaw), né dans la puanteur du Paris du XVIIIe siècle, développe un sens olfactif supérieur, qu'il utilise pour créer les meilleurs parfums du monde. Son travail prend cependant une tournure sombre alors qu'il tente de préserver les senteurs à la recherche du parfum ultime.",
    posterURL: "the perfum.jpg",
    rating: 2.8,
    trailer: "https://www.youtube.com/watch?v=dU3FSX3JjYw",
  },
  {
    id: 4,
    title: "don't look up",
    description:
      "Deux piètres astronomes s'embarquent dans une gigantesque tournée médiatique pour prévenir l'humanité qu'une comète se dirige vers la Terre et s'apprête à la détruire.",
    posterURL: "don't look up.png",
    rating: 3.8,
    trailer: "https://www.youtube.com/watch?v=RbIxYm3mKzI",
  },
  {
    id: 5,
    title: "gatsby",
    description:
      "Printemps 1922. L'époque est propice au relâchement des mœurs, à l'essor du jazz et à l'enrichissement des contrebandiers d'alcool… Apprenti écrivain, Nick Carraway quitte la région du Middle-West pour s'installer à New York. Voulant sa part du rêve américain, il vit désormais entouré d'un mystérieux millionnaire, Jay Gatsby, qui s'étourdit en fêtes mondaines, et de sa cousine Daisy et de son mari volage, Tom Buchanan, issu de sang noble. C'est ainsi que Nick se retrouve au cœur du monde fascinant des milliardaires, de leurs illusions, de leurs amours et de leurs mensonges. Témoin privilégié de son temps, il se met à écrire une histoire où se mêlent des amours impossibles, des rêves d'absolu et des tragédies ravageuses et, chemin faisant, nous tend un miroir où se reflètent notre époque moderne et ses combats.",
    posterURL: "gatsby.png",
    rating: 2.8,
    trailer: "https://www.youtube.com/watch?v=rARN6agiW7o",
  },
  {
    id: 6,
    title: "horrible bosses",
    description:
      "Pour Nick, Kurt et Dale, la seule chose qui pourrait rendre le travail quotidien plus tolérable serait de réduire en poussière leurs intolérables patrons. Démissionner étant exclu, les trois copains échafaudent, avec l’aide de quelques verres de trop et les conseils douteux d’un ancien détenu, un plan quelque peu alambiqué, mais infaillible, pour se débarrasser de leurs employeurs respectifs... définitivement. Il n’y a qu’un problème : les plans les plus infaillibles ne le sont qu’autant que les cerveaux qui les ont conçus le sont.",
    posterURL: "horrible bosses.png",
    rating: 2.6,
    trailer: "https://www.youtube.com/watch?v=VpUeQV8sdOc",
  },
  {
    id: 7,
    title: "mission impossible",
    description:
      "L’équipe IMF (Impossible Mission Force) est dissoute et Ethan Hunt se retrouve désormais isolé, alors que le groupe doit affronter un réseau d’agents spéciaux particulièrement entraînés, le Syndicat. Cette organisation sans scrupules est déterminée à mettre en place un nouvel ordre mondial à travers des attaques terroristes de plus en plus violentes. Ethan regroupe alors son équipe et fait alliance avec Ilsa Faust, agent britannique révoquée, dont les liens avec le Syndicat restent mystérieux. Ils vont s’attaquer à la plus impossible des missions : éliminer le Syndicat.",
    posterURL: "mission impossible.jpg",
    rating: 3.7,
    trailer: "https://www.youtube.com/watch?v=9Yfn2XBGC2E",
  },
  {
    id: 8,
    title: "army of thiefs",
    description:
      "Dans ce préquel du film Army of the Dead, une mystérieuse femme recrute Dieter, employé de banque, afin de braquer des coffres-forts inviolables à travers l'Europe.",
    posterURL: "army of thiefs.jpg",
    rating: 2.5,
    trailer: "https://www.youtube.com/watch?v=Ith2WetKXlg",
  },
  {
    id: 9,
    title: "Mr & Mrs Smith",
    description:
      "Ils sont mari et femme... tueurs à gages tous les deux... mais ne le savent pas ! Jusqu'au jour où les organisations concurrentes pour lesquelles ils travaillent les engagent pour éliminer la même cible. La scène de ménage sera... explosive !",
    posterURL: "Mr & Mrs Smith.png",
    rating: 3.1,
    trailer: "https://www.youtube.com/watch?v=8Z2zSuTz-SY",
  },
  {
    id: 10,
    title: "newness",
    description:
      "L'histoire d'un couple dans un Los Angeles contemporain, en prise avec la culture des rencontres en ligne et les réseaux sociaux.",
    posterURL: "newness.png",
    rating: 3.2,
    trailer: "https://www.youtube.com/watch?v=EtBhKTuPjEk",
  },
  {
    id: 11,
    title: "no pain no gain",
    description:
      "NO PAIN NO GAIN s’inspire de l’histoire incroyable mais vraie de ces trois kidnappeurs amateurs qui, à la recherche d’une vie meilleure, se retrouvent embarqués dans une série d’actes criminels qui dégénèrent rapidement… Rien ne se déroule jamais comme prévu.",
    posterURL: "no pain no gain.png",
    rating: 3.3,
    trailer: "https://www.youtube.com/watch?v=SEQ8jyvmYtw",
  },
  {
    id: 12,
    title: "red notice",
    description:
      "Lorsqu’Interpol déclenche une Alerte Rouge – destinée à traquer et capturer les criminels les plus recherchés au monde –, le FBI fait appel à son meilleur profiler, John Hartley. Il sillonne la planète jusqu’au jour où il se retrouve embarqué dans un braquage spectaculaire et contraint de s’associer au plus grand voleur d’œuvres d’art au monde Nolan Booth pour… arrêter la voleuse d’œuvres d’art la plus recherchée au monde, « le Fou ».",
    posterURL: "red notice.png",
    rating: 3,
    trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms",
  },
  {
    id: 13,
    title: "the adam project",
    description:
      "Un pilote entreprend un voyage dans le temps aux côtés de l’enfant qu’il était et de son père disparu afin de soigner les plaies du passé, tout en sauvant l’avenir. ",
    posterURL: "the adam project.png",
    rating: 3.3,
    trailer: "https://www.youtube.com/watch?v=IE8HIsIrq4o",
  },
  {
    id: 14,
    title: "the big short",
    description:
      "Wall Street. 2005. Profitant de l’aveuglement généralisé des grosses banques, des medias et du gouvernement, quatre outsiders anticipent l’explosion de la bulle financière et mettent au point… le casse du siècle ! Michael Burry, Mark Baum, Jared Vennett et Ben Rickert : des personnages visionnaires et hors du commun qui vont parier contre les banques … et tenter de rafler la mise !",
    posterURL: "the big short.png",
    rating: 3.7,
    trailer: "https://www.youtube.com/watch?v=vgqG3ITMv1Q",
  },
  {
    id: 15,
    title: "the hangover",
    description:
      "Au réveil d'un enterrement de vie de garçon bien arrosé, les trois amis du fiancé se rendent compte qu'il a disparu 40 heures avant la cérémonie de mariage. Ils vont alors devoir faire fi de leur gueule de bois et rassembler leurs bribes de souvenirs pour comprendre ce qui s'est passé.",
    posterURL: "the hangover.png",
    rating: 4,
    trailer: "https://www.youtube.com/watch?v=tcdUhdOlz9M",
  },
  {
    id: 16,
    title: "the mask",
    description:
      "Stanley Ipkiss, modeste employé de banque, passionné par l'univers de Tex Avery, trouve un masque ancien aux pouvoirs surnaturels. Il est néanmoins partagé entre devenir cette créature verte sûre d'elle ou rester le timide Stanley Ipkiss, incapable d'aborder la magnifique chanteuse de cabaret Tina Carlyle.",
    posterURL: "the mask.png",
    rating: 3.9,
    trailer: "https://www.youtube.com/watch?v=LZl69yk5lEY",
  },
  {
    id: 17,
    title: "the unknown saint",
    description:
      "Au beau milieu du désert, Amine court. Sa fortune à la main, la police aux trousses, il enterre son butin dans une tombe bricolée à la va-vite. Lorsqu'il revient dix ans plus tard, l'aride colline est devenue un lieu de culte où les pèlerins se pressent pour adorer celui qui y serait enterré : le Saint Inconnu. Obligé de s'installer au village, Amine va devoir composer avec les habitants sans perdre de vue sa mission première : récupérer son argent.",
    posterURL: "the unknown saint.png",
    rating: 3.4,
    trailer: "https://www.youtube.com/watch?v=3MJ6Un1TRfQ",
  },
  {
    id: 18,
    title: "venom",
    description:
      "Possédé par un symbiote qui agit de manière autonome, le journaliste Eddie Brock devient le protecteur létal Venom.",
    posterURL: "venom.png",
    rating: 3.2,
    trailer: "https://www.youtube.com/watch?v=u9Mv98Gr5pY",
  },
];

export default MovieList;
