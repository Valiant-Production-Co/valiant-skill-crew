export type Product = {
  id: string
  name: string
  category: string
  colorway: string
  price: number
  accent: 'gold' | 'silence-red' | 'v-orange'
  image: string
  backImage?: string
  description: string
  features: string[]
  badge?: string
}

export const products: Product[] = [
  {
    id: 'signature-hooded-bomber',
    name: 'Signature Hooded Bomber',
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
    id: 'crest-crewneck',
    name: 'Crest Crewneck',
    category: 'Crewneck',
    colorway: 'Heather Gray',
    price: 84,
    accent: 'gold',
    image: '/products/gray-crewneck.jpeg',
    description:
      'The everyday piece. A heavyweight heather-gray crewneck carrying the full color crest front and center — Excellence is Our Only Standard, in one clean print.',
    features: [
      'Heavyweight cotton blend',
      'Full-color front crest print',
      'Ribbed collar and cuffs',
      'Relaxed unisex fit',
    ],
  },
]
