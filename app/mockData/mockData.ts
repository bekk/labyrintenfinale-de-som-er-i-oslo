// mockData.ts
export interface SeriesData {
    title: string;
    releaseYear: number;
    seasons: number;
    episodes: number;
    averageRating: number;
    totalReviews: number;
    overallSentiment: {
      positive: number;
      neutral: number;
      negative: number;
    };
    overallReactions: {
        good: number;
        love: number;
        shock: number;
        comedy: number;
        satisfaction: number;
        angry: number;
        confusion: number;
        sad: number;
    };
    genres: string[];
    productionCompany: string;
    description: string;
    imageUrl: string;
    id: string;
    seasonData?: {
      [key: number]: {
        averageRating: number;
        reviewCount: number;
        sentiment: {
          positive: number;
          neutral: number;
          negative: number;
        }
        overallReactions: {
            good: number;
            love: number;
            shock: number;
            comedy: number;
            satisfaction: number;
            angry: number;
            confusion: number;
            sad: number;
        }
      }
    };
  }
  
  export interface EpisodeData {
    id: number;
    season: number;
    episodeNumber: number;
    title: string;
    airDate: string;
    viewerCount: number;
    rating: number;
    reviewCount: number;
    sentiment: {
      positive: number;
      neutral: number;
      negative: number;
    };
    topKeywords: string[];
  }
  
  export const seriesData: SeriesData = {
    title: "SKAM",
    releaseYear: 2015,
    seasons: 4,
    episodes: 43,
    averageRating: 8.7,
    totalReviews: 6234,
    overallSentiment: {
      positive: 76,
      neutral: 18,
      negative: 6
    },
    overallReactions: {
        good: 1634,
        love: 1824,
        shock: 960,
        comedy: 589,
        satisfaction: 1289,
        angry: 379,
        confusion: 1492,
        sad: 1798
    },
    genres: ["Drama", "Teen", "Romance"],
    productionCompany: "NRK",
    description: "SKAM følger en gruppe elever på Hartvig Nissens videregående skole i Oslo, og tar opp temaer som identitet, vennskap, kjærlighet, seksuell trakassering, og psykiske problemer.",
    imageUrl: "/api/placeholder/300/200",
    id: "skam",
    seasonData: {
      1: {
        averageRating: 8.5,
        reviewCount: 1420,
        sentiment: {
          positive: 73,
          neutral: 20,
          negative: 7
        },
        overallReactions: {
            good: 1634,
            love: 1824,
            shock: 960,
            comedy: 589,
            satisfaction: 1289,
            angry: 379,
            confusion: 1492,
            sad: 1798
        },
      },
      2: {
        averageRating: 8.9,
        reviewCount: 1634,
        sentiment: {
          positive: 82,
          neutral: 14,
          negative: 4
        }
      },
      3: {
        averageRating: 9.4,
        reviewCount: 1856,
        sentiment: {
          positive: 92,
          neutral: 6,
          negative: 2
        }
      },
      4: {
        averageRating: 8.8,
        reviewCount: 1324,
        sentiment: {
          positive: 85,
          neutral: 11,
          negative: 4
        }
      }
    }
  };
  
  export const allSeries: SeriesData[] = [
    {
      id: "skam",
      title: "SKAM",
      releaseYear: 2015,
      seasons: 4,
      episodes: 43,
      averageRating: 8.7,
      totalReviews: 6234,
      overallSentiment: {
        positive: 76,
        neutral: 18,
        negative: 6
      },
      overallReactions: {
        good: 1634,
        love: 1824,
        shock: 960,
        comedy: 589,
        satisfaction: 1289,
        angry: 379,
        confusion: 1492,
        sad: 1798
    },
      genres: ["Drama", "Teen", "Romance"],
      productionCompany: "NRK",
      description: "SKAM følger en gruppe elever på Hartvig Nissens videregående skole i Oslo, og tar opp temaer som identitet, vennskap, kjærlighet, seksuell trakassering, og psykiske problemer.",
      imageUrl: "app/routes/admin/images/skam.jpg"
    },
    {
      id: "exit",
      title: "Exit",
      releaseYear: 2019,
      seasons: 3,
      episodes: 16,
      averageRating: 8.3,
      totalReviews: 4320,
      overallSentiment: {
        positive: 68,
        neutral: 22,
        negative: 10
      },
      overallReactions: {
        good: 1698,
        love: 256,
        shock: 1956,
        comedy: 978,
        satisfaction: 201,
        angry: 1183,
        confusion: 789,
        sad: 498
    },
      genres: ["Drama", "Finance", "Thriller"],
      productionCompany: "NRK",
      description: "Exit følger fire finansmenn i 30-årene bosatt på Oslos vestkant, som lever et liv i luksus og eksess. Basert på virkelige historier.",
      imageUrl: "app/routes/admin/images/exit.jpeg"
    },
    {
      id: "ragnarok",
      title: "Ragnarok",
      releaseYear: 2020,
      seasons: 2,
      episodes: 12,
      averageRating: 7.5,
      totalReviews: 3850,
      overallSentiment: {
        positive: 65,
        neutral: 24,
        negative: 11
      },
      overallReactions: {
        good: 1156,
        love: 298,
        shock: 398,
        comedy: 198,
        satisfaction: 489,
        angry: 172,
        confusion: 298,
        sad: 798
    },
      genres: ["Fantasy", "Drama", "Mythology"],
      productionCompany: "NRK/Netflix",
      description: "I den lille fiktive byen Edda setter klimaendringer, industriforurensning og smelting av isbreer scenen for en apokalyptisk kamp mellom gamle krefter.",
      imageUrl: "app/routes/admin/images/ragnarok.jpg"
    },
    {
      id: "okkupert",
      title: "Okkupert",
      releaseYear: 2015,
      seasons: 3,
      episodes: 24,
      averageRating: 7.9,
      totalReviews: 5120,
      overallSentiment: {
        positive: 70,
        neutral: 20,
        negative: 10
      },
      overallReactions: {
        good: 1981,
        love: 1298,
        shock: 867,
        comedy: 129,
        satisfaction: 698,
        angry: 245,
        confusion: 498,
        sad: 500
    },
      genres: ["Political Thriller", "Drama", "Action"],
      productionCompany: "TV2",
      description: "I nær fremtid tar Russland over Norge for å gjenoppta oljeproduksjonen, men snart blir konflikten global. Serien følger personer fra alle sider av okkupasjonen.",
      imageUrl: "app/routes/admin/images/okkupert.avif"
    },
    {
      id: "beforeigners",
      title: "Beforeigners",
      releaseYear: 2019,
      seasons: 2,
      episodes: 12,
      averageRating: 7.8,
      totalReviews: 2950,
      overallSentiment: {
        positive: 72,
        neutral: 18,
        negative: 10
      },
      overallReactions: {
        good: 1390,
        love: 878,
        shock: 498,
        comedy: 298,
        satisfaction: 490,
        angry: 278,
        confusion: 490,
        sad: 254
    },
      genres: ["Science Fiction", "Crime", "Comedy"],
      productionCompany: "HBO Nordic",
      description: "Mennesker fra fortiden begynner plutselig å dukke opp i nåtiden over hele verden. I Oslo, en politibetjent med fordommer mot 'tidsmigrantene' blir tvunget til å jobbe med den første politibetjenten fra vikingtiden.",
      imageUrl: "app/routes/admin/images/beforeigners.jpg"
    },
    {
      id: "snofallsnofallet",
      title: "Snøfall",
      releaseYear: 2016,
      seasons: 5,
      episodes: 120,
      averageRating: 8.5,
      totalReviews: 1820,
      overallSentiment: {
        positive: 85,
        neutral: 12,
        negative: 3
      },
      overallReactions: {
        good: 501,
        love: 289,
        shock: 100,
        comedy: 300,
        satisfaction: 298,
        angry: 100,
        confusion: 89,
        sad: 57
    },
      genres: ["Family", "Fantasy", "Christmas"],
      productionCompany: "NRK",
      description: "NRKs populære julekalender følger ni år gamle Selma som oppdager en magisk adventskalender som transporterer henne til julelandsbyen Snøfall, hvor hun opplever eventyr og mysterier.",
      imageUrl: "app/routes/admin/images/snøfall.jpeg"
    },
    {
      id: "norsemen",
      title: "Vikingane (Norsemen)",
      releaseYear: 2016,
      seasons: 3,
      episodes: 18,
      averageRating: 8.1,
      totalReviews: 4780,
      overallSentiment: {
        positive: 78,
        neutral: 15,
        negative: 7
      },
      overallReactions: {
        good: 1803,
        love: 902,
        shock: 1102,
        comedy: 490,
        satisfaction: 409,
        angry: 209,
        confusion: 409,
        sad: 200
    },
      genres: ["Comedy", "Historical", "Parody"],
      productionCompany: "NRK",
      description: "En komedie om dagliglivet i landsbyen Norheim rundt år 790. Serien følger innbyggerne og deres mange utfordringer - fra maktspill og likestilling til vennepolitikk og eksistensielle kriser.",
      imageUrl: "app/routes/admin/images/norsemen.jpg"
    },
    {
      id: "norway",
      title: "Alt for Norge",
      releaseYear: 2021,
      seasons: 1,
      episodes: 8,
      averageRating: 7.2,
      totalReviews: 1245,
      overallSentiment: {
        positive: 62,
        neutral: 25,
        negative: 13
      },
      overallReactions: {
        good: 300,
        love: 145,
        shock: 90,
        comedy: 128,
        satisfaction: 302,
        angry: 201,
        confusion: 300,
        sad: 87
    },
      genres: ["Drama", "Science Fiction", "Dystopian"],
      productionCompany: "NRK",
      description: "I en nær fremtid har Norge blitt forvandlet til et digitalt utopia der all data samles og livskvalitet måles kontinuerlig. Men under den perfekte overflaten finnes mørke hemmeligheter.",
      imageUrl: "app/routes/admin/images/altfornorge.jpg"
    }
  ];
  
  export const episodeData: EpisodeData[] = [
    // Season 1
    {
      id: 1,
      season: 1,
      episodeNumber: 1,
      title: "Du ser ut som en slut",
      airDate: "2015-09-25",
      viewerCount: 152000,
      rating: 8.4,
      reviewCount: 186,
      sentiment: {
        positive: 71,
        neutral: 22,
        negative: 7
      },
      topKeywords: ["fest", "vennskap", "skole", "russetid"]
    },
    {
      id: 2,
      season: 1,
      episodeNumber: 2,
      title: "Jonas, dette kommer aldri til å funke",
      airDate: "2015-10-02",
      viewerCount: 178000,
      rating: 8.5,
      reviewCount: 203,
      sentiment: {
        positive: 74,
        neutral: 19,
        negative: 7
      },
      topKeywords: ["forhold", "drama", "kjæreste", "konflikt"]
    },
    {
      id: 3,
      season: 1,
      episodeNumber: 3,
      title: "Vi er de største loserne på skolen",
      airDate: "2015-10-09",
      viewerCount: 195000,
      rating: 8.7,
      reviewCount: 215,
      sentiment: {
        positive: 78,
        neutral: 16,
        negative: 6
      },
      topKeywords: ["vennskap", "identitet", "fest", "aksept"]
    },
    {
      id: 4,
      season: 1,
      episodeNumber: 4,
      title: "Allah vil vi skal ha det gøy",
      airDate: "2015-10-16",
      viewerCount: 205000,
      rating: 8.5,
      reviewCount: 210,
      sentiment: {
        positive: 76,
        neutral: 18,
        negative: 6
      },
      topKeywords: ["religion", "vennskap", "identitet", "fest"]
    },
    {
      id: 5,
      season: 1,
      episodeNumber: 5,
      title: "På jobb er jeg sjefen",
      airDate: "2015-10-23",
      viewerCount: 210000,
      rating: 8.6,
      reviewCount: 195,
      sentiment: {
        positive: 75,
        neutral: 19,
        negative: 6
      },
      topKeywords: ["jobb", "autoritet", "skole", "foreldre"]
    },
    {
      id: 6,
      season: 1,
      episodeNumber: 6,
      title: "Jeg tenker du har blitt helt psyko",
      airDate: "2015-10-30",
      viewerCount: 220000,
      rating: 8.7,
      reviewCount: 205,
      sentiment: {
        positive: 74,
        neutral: 18,
        negative: 8
      },
      topKeywords: ["mental helse", "konfrontasjon", "vennskap", "svik"]
    },
    {
      id: 7,
      season: 1,
      episodeNumber: 7,
      title: "Om du bare hadde hjertet mitt",
      airDate: "2015-11-06",
      viewerCount: 225000,
      rating: 8.6,
      reviewCount: 198,
      sentiment: {
        positive: 73,
        neutral: 20,
        negative: 7
      },
      topKeywords: ["kjærlighet", "usikkerhet", "vennskap", "sjalusi"]
    },
  
    // Season 2
    {
      id: 10,
      season: 2,
      episodeNumber: 1,
      title: "Hei",
      airDate: "2016-02-26",
      viewerCount: 230000,
      rating: 8.9,
      reviewCount: 267,
      sentiment: {
        positive: 82,
        neutral: 14,
        negative: 4
      },
      topKeywords: ["ny sesong", "Noora", "William", "identitet"]
    },
    {
      id: 11,
      season: 2,
      episodeNumber: 2,
      title: "Du lyver til en venninne og skylder på meg",
      airDate: "2016-03-04",
      viewerCount: 245000,
      rating: 9.0,
      reviewCount: 280,
      sentiment: {
        positive: 85,
        neutral: 12,
        negative: 3
      },
      topKeywords: ["vennskap", "kjærlighet", "William", "løgn"]
    },
    {
      id: 12,
      season: 2,
      episodeNumber: 3,
      title: "Jeg er sånn som kommer hjem til folk",
      airDate: "2016-03-11",
      viewerCount: 260000,
      rating: 9.1,
      reviewCount: 292,
      sentiment: {
        positive: 87,
        neutral: 11,
        negative: 2
      },
      topKeywords: ["rus", "fest", "kjærlighet", "popularitet"]
    },
    {
      id: 13,
      season: 2,
      episodeNumber: 4,
      title: "Ikke direkte uattraktiv",
      airDate: "2016-03-18",
      viewerCount: 275000,
      rating: 9.0,
      reviewCount: 270,
      sentiment: {
        positive: 84,
        neutral: 13,
        negative: 3
      },
      topKeywords: ["utseende", "selvbilde", "William", "Noora"]
    },
    {
      id: 14,
      season: 2,
      episodeNumber: 5,
      title: "Jeg visste det ikke før du sa det",
      airDate: "2016-03-25",
      viewerCount: 285000,
      rating: 8.8,
      reviewCount: 260,
      sentiment: {
        positive: 80,
        neutral: 16,
        negative: 4
      },
      topKeywords: ["innsikt", "selverkjennelse", "forhold", "vennskap"]
    },
    {
      id: 15,
      season: 2,
      episodeNumber: 6,
      title: "Jeg vil ikke være den kokken",
      airDate: "2016-04-01",
      viewerCount: 290000,
      rating: 8.7,
      reviewCount: 255,
      sentiment: {
        positive: 78,
        neutral: 17,
        negative: 5
      },
      topKeywords: ["roller", "forventninger", "identitet", "press"]
    },
  
    // Season 3
    {
      id: 20,
      season: 3,
      episodeNumber: 1,
      title: "Lykke til, Isak",
      airDate: "2016-10-07",
      viewerCount: 520000,
      rating: 9.4,
      reviewCount: 510,
      sentiment: {
        positive: 92,
        neutral: 7,
        negative: 1
      },
      topKeywords: ["Isak", "Even", "LHBT", "identitet"]
    },
    {
      id: 21,
      season: 3,
      episodeNumber: 2,
      title: "Du er over 18, sant?",
      airDate: "2016-10-14",
      viewerCount: 570000,
      rating: 9.5,
      reviewCount: 545,
      sentiment: {
        positive: 94,
        neutral: 5,
        negative: 1
      },
      topKeywords: ["kjærlighet", "identitet", "fest", "Even"]
    },
    {
      id: 22,
      season: 3,
      episodeNumber: 3,
      title: "Nå bånder dere i overkant mye",
      airDate: "2016-10-21",
      viewerCount: 590000,
      rating: 9.6,
      reviewCount: 560,
      sentiment: {
        positive: 95,
        neutral: 4,
        negative: 1
      },
      topKeywords: ["vennskap", "seksualitet", "aksept", "Emma"]
    },
    {
      id: 23,
      season: 3,
      episodeNumber: 4,
      title: "Keen på å henge i kveld?",
      airDate: "2016-10-28",
      viewerCount: 600000,
      rating: 9.5,
      reviewCount: 550,
      sentiment: {
        positive: 93,
        neutral: 6,
        negative: 1
      },
      topKeywords: ["date", "spenning", "usikkerhet", "Even"]
    },
    {
      id: 24,
      season: 3,
      episodeNumber: 5,
      title: "Samme tid et helt annet sted",
      airDate: "2016-11-04",
      viewerCount: 610000,
      rating: 9.3,
      reviewCount: 540,
      sentiment: {
        positive: 90,
        neutral: 8,
        negative: 2
      },
      topKeywords: ["perspektiv", "paralleller", "likheter", "kontraster"]
    },
    {
      id: 25,
      season: 3,
      episodeNumber: 6,
      title: "Escobar season",
      airDate: "2016-11-11",
      viewerCount: 620000,
      rating: 9.2,
      reviewCount: 535,
      sentiment: {
        positive: 89,
        neutral: 9,
        negative: 2
      },
      topKeywords: ["hemmeligheter", "rus", "vennskap", "tillitt"]
    },
  
    // Season 4
    {
      id: 30,
      season: 4,
      episodeNumber: 1,
      title: "Allah hadde digget deg",
      airDate: "2017-04-14",
      viewerCount: 620000,
      rating: 8.8,
      reviewCount: 495,
      sentiment: {
        positive: 84,
        neutral: 13,
        negative: 3
      },
      topKeywords: ["Sana", "religion", "identitet", "vennskap"]
    },
    {
      id: 31,
      season: 4,
      episodeNumber: 2,
      title: "Jeg er den jenta...",
      airDate: "2017-04-21",
      viewerCount: 605000,
      rating: 8.9,
      reviewCount: 480,
      sentiment: {
        positive: 86,
        neutral: 12,
        negative: 2
      },
      topKeywords: ["kulturkonflikt", "identitet", "vennskap", "familie"]
    },
    {
      id: 32,
      season: 4,
      episodeNumber: 3,
      title: "Hva mener du om status?",
      airDate: "2017-04-28",
      viewerCount: 590000,
      rating: 8.7,
      reviewCount: 465,
      sentiment: {
        positive: 83,
        neutral: 14,
        negative: 3
      },
      topKeywords: ["status", "rykter", "popularitet", "vennskap"]
    },
    {
      id: 33,
      season: 4,
      episodeNumber: 4,
      title: "Allah hadde vært skuffa over deg",
      airDate: "2017-05-05",
      viewerCount: 600000,
      rating: 8.8,
      reviewCount: 475,
      sentiment: {
        positive: 84,
        neutral: 13,
        negative: 3
      },
      topKeywords: ["moral", "religion", "forventninger", "indre konflikt"]
    },
    {
      id: 34,
      season: 4,
      episodeNumber: 5,
      title: "Hvis du er trist er jeg trist",
      airDate: "2017-05-12",
      viewerCount: 615000,
      rating: 8.9,
      reviewCount: 485,
      sentiment: {
        positive: 87,
        neutral: 10,
        negative: 3
      },
      topKeywords: ["empati", "vennskap", "støtte", "følelser"]
    },
    {
      id: 35,
      season: 4,
      episodeNumber: 6,
      title: "Jeg vil ikke snakke mer om det",
      airDate: "2017-05-19",
      viewerCount: 625000,
      rating: 8.9,
      reviewCount: 490,
      sentiment: {
        positive: 86,
        neutral: 12,
        negative: 2
      },
      topKeywords: ["grenser", "kommunikasjon", "respekt", "privatliv"]
    },
    {
      id: 43,
      season: 4,
      episodeNumber: 10,
      title: "Takk for alt",
      airDate: "2017-06-24",
      viewerCount: 750000,
      rating: 9.6,
      reviewCount: 825,
      sentiment: {
        positive: 95,
        neutral: 4,
        negative: 1
      },
      topKeywords: ["avslutning", "serien", "vennskap", "avskjed"]
    }
  ];