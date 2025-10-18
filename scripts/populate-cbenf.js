const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kyx4ncqy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2023-05-03'
})

const cbenfData = {
  _type: 'landingPageEventos',
  slug: {
    _type: 'slug',
    current: 'cbenf'
  },
  title: '75º Congresso Brasileiro de Enfermagem',
  shortTitle: '75º CBEnf',
  description: 'O maior evento da enfermagem brasileira está chegando a Porto Alegre',
  status: 'active',
  eventDates: {
    preCongress: '22-23 de Novembro',
    mainEvent: '23-26 de Novembro',
    year: 2025
  },
  location: {
    venue: 'Campus PUCRS',
    city: 'Porto Alegre - RS',
    fullAddress: 'Pontifícia Universidade Católica do Rio Grande do Sul - Bairro Partenon - Zona Leste de Porto Alegre'
  },
  participation: {
    expectedParticipants: '+5.000',
    edition: '75º',
    parallelEvents: '7º CLAHEN • 8º SENABS'
  },
  hotels: [
    {
      name: 'Charlie Connect PUC',
      pricePerNight: 'R$ 320,00',
      distance: '1,5 km do evento',
      rating: 4,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Estacionamento', 'Academia', 'Piscina']
    },
    {
      name: 'Pousada São Lourenço',
      pricePerNight: 'R$ 159,00',
      distance: '8,5 km do evento',
      rating: 3,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Estacionamento']
    },
    {
      name: 'Hotel Deville Prime Porto Alegre',
      pricePerNight: 'R$ 235,00',
      distance: '9,5 km do evento',
      rating: 4,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Piscina', 'Restaurante']
    },
    {
      name: 'Intercity Porto Alegre Praia de Belas',
      pricePerNight: 'R$ 310,00',
      distance: '11,5 km do evento',
      rating: 4,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Piscina', 'Spa']
    },
    {
      name: 'Hotel Continental Business',
      pricePerNight: 'R$ 145,00',
      distance: '10,5 km do evento',
      rating: 3,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Centro de negócios']
    },
    {
      name: 'Hotel Express Vieira Souto',
      pricePerNight: 'R$ 154,00',
      distance: '9,5 km do evento',
      rating: 3,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Estacionamento']
    },
    {
      name: 'Slaviero Essential Porto Alegre Centro',
      pricePerNight: 'R$ 190,00',
      distance: '10,0 km do evento',
      rating: 4,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Restaurante']
    },
    {
      name: 'Comfort Hotel Porto Alegre',
      pricePerNight: 'R$ 172,00',
      distance: '10,5 km do evento',
      rating: 3,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia']
    },
    {
      name: 'Hotel Laghetto Viverone Beira Mar',
      pricePerNight: 'R$ 290,00',
      distance: '12,0 km do evento',
      rating: 4,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Piscina', 'Vista para o mar']
    },
    {
      name: 'Swan Generation Porto Alegre',
      pricePerNight: 'R$ 189,00',
      distance: '11,0 km do evento',
      rating: 4,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Restaurante']
    },
    {
      name: 'Novotel Porto Alegre',
      pricePerNight: 'R$ 350,00',
      distance: '12,5 km do evento',
      rating: 4,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Piscina', 'Spa', 'Restaurante']
    },
    {
      name: 'Hotel Plaza São Rafael',
      pricePerNight: 'R$ 280,00',
      distance: '10,0 km do evento',
      rating: 4,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Piscina', 'Centro de negócios']
    },
    {
      name: 'Ritter Hotéis',
      pricePerNight: 'R$ 165,00',
      distance: '9,0 km do evento',
      rating: 3,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Estacionamento']
    },
    {
      name: 'TRYP by Wyndham Higienópolis Porto Alegre',
      pricePerNight: 'R$ 220,00',
      distance: '9,5 km do evento',
      rating: 4,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Restaurante']
    },
    {
      name: 'Hotel Laghetto Stilo Higienópolis',
      pricePerNight: 'R$ 200,00',
      distance: '9,0 km do evento',
      rating: 4,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Sauna']
    },
    {
      name: 'Blue Tree Premium Porto Alegre',
      pricePerNight: 'R$ 245,00',
      distance: '11,0 km do evento',
      rating: 4,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Piscina', 'Restaurante']
    },
    {
      name: 'Hotel Everest Porto Alegre',
      pricePerNight: 'R$ 175,00',
      distance: '10,5 km do evento',
      rating: 3,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Estacionamento']
    },
    {
      name: 'eSuites Savassi Toscanini',
      pricePerNight: 'R$ 190,00',
      distance: '8,5 km do evento',
      rating: 4,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Restaurante']
    },
    {
      name: 'Mercure Porto Alegre Manhattan',
      pricePerNight: 'R$ 260,00',
      distance: '10,0 km do evento',
      rating: 4,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Restaurante', 'Centro de negócios']
    },
    {
      name: 'Radisson Porto Alegre',
      pricePerNight: 'R$ 320,00',
      distance: '11,5 km do evento',
      rating: 5,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Piscina', 'Spa', 'Restaurante', 'Centro de negócios']
    },
    {
      name: 'Hotel Açores Porto Alegre',
      pricePerNight: 'R$ 195,00',
      distance: '10,5 km do evento',
      rating: 3,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Estacionamento', 'Restaurante']
    },
    {
      name: 'Master Express Dom Pedro II',
      pricePerNight: 'R$ 135,00',
      distance: '11,0 km do evento',
      rating: 3,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Estacionamento']
    },
    {
      name: 'Hampton by Hilton Porto Alegre',
      pricePerNight: 'R$ 275,00',
      distance: '11,5 km do evento',
      rating: 4,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Piscina', 'Centro de negócios']
    },
    {
      name: 'Hilton Garden Inn Porto Alegre Moinhos de Vento',
      pricePerNight: 'R$ 295,00',
      distance: '8,5 km do evento',
      rating: 4,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Piscina', 'Restaurante']
    },
    {
      name: 'Hotel Embaixador',
      pricePerNight: 'R$ 180,00',
      distance: '10,0 km do evento',
      rating: 3,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Estacionamento']
    },
    {
      name: 'Sheraton Porto Alegre Hotel',
      pricePerNight: 'R$ 380,00',
      distance: '11,0 km do evento',
      rating: 5,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Piscina', 'Spa', 'Restaurante', 'Centro de negócios', 'Concierge']
    },
    {
      name: 'Hotel Ritter Downtown',
      pricePerNight: 'R$ 155,00',
      distance: '10,5 km do evento',
      rating: 3,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Estacionamento']
    },
    {
      name: 'Fast 10 City Hotel',
      pricePerNight: 'R$ 251,00',
      distance: '9,0 km do evento',
      rating: 4,
      breakfast: true,
      checkIn: '14h',
      checkOut: '12h',
      amenities: ['Wi-Fi gratuito', 'Academia', 'Restaurante']
    }
  ],
  tours: [
    {
      name: 'City tour meio turno com café ao fim da tarde e jantar italiano',
      price: 'R$ 665,00',
      priceDetails: 'por pessoa',
      minimum: 'Saída com mínimo de duas pessoas',
      description: 'Conheça os principais pontos turísticos de Porto Alegre com parada para café e jantar em restaurante italiano tradicional'
    },
    {
      name: 'City tour meio turno com café/happy hour e tempo livre no Cais',
      price: 'R$ 431,00',
      priceDetails: 'por pessoa',
      minimum: 'Saída com mínimo de duas pessoas',
      description: 'Tour pela cidade com parada para happy hour e tempo livre no Cais Embarcadero'
    },
    {
      name: 'Bate e volta de Porto Alegre para dois dias em Gramado e Canela',
      price: 'R$ 1.025,00',
      priceDetails: 'por pessoa',
      minimum: 'Saída com mínimo de duas pessoas',
      description: 'Dois dias completos conhecendo as cidades serranas mais famosas do Sul'
    },
    {
      name: 'Bate e volta de Porto Alegre para dois dias no Vale dos Vinhedos',
      price: 'R$ 1.025,00',
      priceDetails: 'por pessoa',
      minimum: 'Saída com mínimo de duas pessoas',
      description: 'Experiência completa no Vale dos Vinhedos com degustação e visita às vinícolas'
    },
    {
      name: 'Bate e volta de Porto Alegre para dois dias em Bento Gonçalves e Gramado',
      price: 'R$ 1.025,00',
      priceDetails: 'por pessoa',
      minimum: 'Saída com mínimo de duas pessoas',
      description: 'Combinação perfeita entre vinhos e chocolate em dois dias inesquecíveis'
    },
    {
      name: 'City tour meio turno com almoço italiano e tempo livre no Cais',
      price: 'R$ 665,00',
      priceDetails: 'por pessoa',
      minimum: 'Saída com mínimo de duas pessoas',
      description: 'Tour cultural com almoço em cantina italiana e passeio livre pelo Cais'
    },
    {
      name: 'City tour de meio turno com almoço churrasco mais tradicional da cidade',
      price: 'R$ 665,00',
      priceDetails: 'por pessoa',
      minimum: 'Saída com mínimo de duas pessoas',
      description: 'Conheça Porto Alegre e saboreie o autêntico churrasco gaúcho'
    },
    {
      name: 'Linha turismo e barco Cisne Branco com happy hour e tempo livre no Cais',
      price: 'R$ 324,00',
      priceDetails: 'por pessoa',
      minimum: 'Saída com mínimo de duas pessoas',
      description: 'Passeio de barco pelo Guaíba com happy hour e tempo livre'
    },
    {
      name: 'Combo linha turismo + barco Cisne Branco',
      price: 'R$ 192,00',
      priceDetails: 'por pessoa',
      minimum: 'Saída com mínimo de duas pessoas',
      description: 'Percurso: Centro Histórico e ilhas'
    },
    {
      name: 'City tour meio turno com happy hour italiano',
      price: 'R$ 560,00',
      priceDetails: 'por pessoa',
      minimum: 'Saída com mínimo de duas pessoas',
      description: 'Passeio cultural com happy hour em cantina italiana'
    },
    {
      name: 'City tour meio turno com café a tarde e jantar com vinhos e cachaças gaúchas',
      price: 'R$ 748,00',
      priceDetails: 'por pessoa',
      minimum: 'Saída com mínimo de duas pessoas',
      description: 'Experiência gastronômica completa com bebidas típicas gaúchas'
    },
    {
      name: 'Bate e volta Porto Alegre para Nova Petrópolis com city tour',
      price: 'R$ 722,00',
      priceDetails: 'por pessoa',
      minimum: 'Saída com mínimo de duas pessoas',
      description: 'Conheça a cidade mais alemã do Brasil em um dia completo'
    },
    {
      name: 'Bate e volta Porto Alegre para Gramado e Canela com city tour',
      price: 'R$ 722,00',
      priceDetails: 'por pessoa',
      minimum: 'Saída com mínimo de duas pessoas',
      description: 'Tour completo pelas cidades serranas em um dia'
    },
    {
      name: 'Bate e volta de Porto Alegre para Bento Gonçalves com city tour',
      price: 'R$ 722,00',
      priceDetails: 'por pessoa',
      minimum: 'Saída com mínimo de duas pessoas',
      description: 'Dia completo na capital do vinho brasileiro'
    }
  ],
  paymentOptions: {
    accommodation: [
      {
        method: '1 vez',
        description: 'via boleto bancário ou Pix'
      },
      {
        method: '5 vezes',
        description: 'via Pix (parcelas mensais e quitação antes do check-in)'
      },
      {
        method: 'Até 10 vezes',
        description: 'via cartão de crédito (nesta modalidade, o valor pode sofrer alteração)'
      }
    ],
    insurance: {
      plan: 'Plano Nacional 60.000',
      period: '23 a 26 de novembro',
      prices: [
        {
          ageRange: 'Até 64 anos',
          price: 'R$ 41,80'
        },
        {
          ageRange: '65 até 85 anos',
          price: 'R$ 62,70'
        },
        {
          ageRange: '86 até 89 anos',
          price: 'R$ 125,40'
        }
      ]
    }
  },
  isActive: true
}

async function createCBEnfDocument() {
  try {
    const result = await client.create(cbenfData)
    console.log('CBEnf document created successfully:', result._id)
    return result
  } catch (error) {
    if (error.statusCode === 409) {
      console.log('Document might already exist, trying to update...')
      try {
        const existingDoc = await client.fetch(`*[_type == "landingPageEventos" && slug.current == "cbenf"][0]`)
        if (existingDoc) {
          const updated = await client
            .patch(existingDoc._id)
            .set(cbenfData)
            .commit()
          console.log('CBEnf document updated successfully:', updated._id)
          return updated
        }
      } catch (updateError) {
        console.error('Error updating document:', updateError)
      }
    } else {
      console.error('Error creating document:', error)
    }
  }
}

if (require.main === module) {
  createCBEnfDocument()
    .then(() => {
      console.log('Operation completed')
      process.exit(0)
    })
    .catch((error) => {
      console.error('Script failed:', error)
      process.exit(1)
    })
}

module.exports = { createCBEnfDocument }