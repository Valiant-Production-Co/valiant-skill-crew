export type Colorway = {
  id: string
  label: string
  swatch: string
  front: string
  back?: string
}

export type Product = {
  id: string
  name: string
  category: string
  colorway: string
  price: number
  accent: 'gold' | 'silence-red' | 'v-orange'
  image: string
  backImage?: string
  colorways?: Colorway[]
  description: string
  features: string[]
  badge?: string
}

export const products: Product[] = [
  {
    id: 'signature-hooded-bomber',
    name: 'The Valiant Blue Collar Baller',
    category: 'Jacket',
    colorway: 'Jet Black / Orange V',
    price: 189,
    accent: 'v-orange',
    image: '/products/black-bomber-orange-v.jpeg',
    backImage: '/products/jacket-back-crest.jpeg',
    description:
      'The flagship of the lineup. A structured, insulated hooded bomber in a waxed matte black shell, finished with an embroidered orange script V on the chest and the full metallic crest across the back.',
    features: [
      'Insulated waxed shell',
      'Embroidered chest & back crest',
      'Ribbed cuffs and hem',
      'Full YKK zip with storm placket',
    ],
    badge: 'Flagship',
  },
  {
    id: 'silence-work-jacket',
    name: 'Silence Work Jacket',
    category: 'Jacket',
    colorway: 'Jet Black / Red V',
    price: 164,
    accent: 'silence-red',
    image: '/products/black-work-jacket-red-v.jpeg',
    backImage: '/products/crest-black.jpeg',
    description:
      'Built for the field. A rugged hooded work jacket in weather-ready nylon with a bold red embroidered V and the crest embroidered on the back. Made to bring the silence, job after job.',
    features: [
      'Weather-ready nylon shell',
      'Adjustable drawcord hood',
      'Front hand-warmer pockets',
      'Reinforced stress points',
    ],
  },
  {
    id: 'tech-zip-hoodie',
    name: 'Tech Zip Hoodie',
    category: 'Hoodie',
    colorway: 'Jet Black / Gold Script',
    price: 118,
    accent: 'gold',
    image: '/products/black-hoodie-sleeve.jpeg',
    description:
      'A midweight full-zip hoodie in brushed tech fleece. Understated by design, with a gold Valiant signature running down the sleeve for those who know.',
    features: [
      'Brushed tech fleece',
      'Gold sleeve signature embroidery',
      'Lined three-panel hood',
      'Full-length zip',
    ],
  },
  {
    id: 'skill-crew-crewneck',
    name: 'Skill Crew Crewneck',
    category: 'Crewneck',
    colorway: 'Black / Grey / Off-White',
    price: 84,
    accent: 'gold',
    image: '/products/skillcrew-grey-front.png',
    backImage: '/products/gray-crewneck-back.jpeg',
    colorways: [
      {
        id: 'black',
        label: 'Black / Neon V',
        swatch: '#111111',
        front: '/products/skillcrew-black-front.png',
        back: '/products/crest-black.jpeg',
      },
      {
        id: 'grey',
        label: 'Heather Grey / Black',
        swatch: '#b7b7b7',
        front: '/products/skillcrew-grey-front.png',
        back: '/products/gray-crewneck-back.jpeg',
      },
      {
        id: 'off-white',
        label: 'Off-White / Bronze',
        swatch: '#efe8db',
        front: '/products/skillcrew-offwhite-front.png',
      },
    ],
    description:
      'The everyday piece. A heavyweight crewneck carrying the real Skill Crew brush lettering on the left chest — black on the grey, bronze on the off-white. The black version wears the neon "V" mark instead.',
    features: [
      'Heavyweight cotton blend',
      'Left-chest Skill Crew brush print',
      'Three colorways, distinct wordmarks',
      'Ribbed collar and cuffs',
      'Relaxed unisex fit',
    ],
  },
]
