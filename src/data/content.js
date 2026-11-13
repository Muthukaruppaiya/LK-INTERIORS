/** Bump when gallery files change so browsers skip old cache */
export const galleryVersion = 'ig-20251114d'

const g = (file) => `/gallery/${file}?v=${galleryVersion}`

export const brand = {
  name: 'LK Interiors',
  studio: 'Studio',
  tagline: 'Dream · Design · Style',
  instagram: 'https://www.instagram.com/lk.interiors.studio?utm_source=qr',
  email: 'hello@lkinteriors.studio',
  phone: '+91 94880 08560',
  location: 'India',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Transform', href: '#transform' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    title: 'Wardrobe Design',
    copy: 'Floor-to-ceiling storage with clean finishes, soft-close fittings, and layouts that fit your room.',
  },
  {
    title: 'Modular Kitchen',
    copy: 'Practical modular kitchens with durable materials, smart storage, and a polished modern look.',
  },
  {
    title: 'False Ceiling',
    copy: 'Layered ceilings and lighting plans that make rooms feel taller, warmer, and more finished.',
  },
  {
    title: 'Full Home Interiors',
    copy: 'TV units, vanity storage, paneling, and complete home solutions tailored to your space.',
  },
]

export const projects = [
  {
    id: 1,
    title: 'LED Wardrobe Wall',
    category: 'Wardrobe',
    image: g('ig-01.jpg'),
  },
  {
    id: 2,
    title: 'Marble TV Console',
    category: 'Living',
    image: g('ig-02.jpg'),
  },
  {
    id: 3,
    title: 'Bedroom Storage System',
    category: 'Wardrobe',
    image: g('ig-03.jpg'),
  },
  {
    id: 4,
    title: 'Blush Modular Kitchen',
    category: 'Kitchen',
    image: g('ig-04.jpg'),
  },
  {
    id: 5,
    title: 'Gloss Kitchen Corner',
    category: 'Kitchen',
    image: g('ig-05.jpg'),
  },
  {
    id: 6,
    title: 'Chevron Feature Cabinet',
    category: 'Custom Joinery',
    image: g('ig-06.jpg'),
  },
]

export const transformations = [
  {
    id: 1,
    title: 'Living Room Makeover',
    location: 'Full Home Interiors',
    before: g('transform-living-before.png'),
    after: g('transform-living-after.png'),
  },
  {
    id: 2,
    title: 'Kitchen Reimagined',
    location: 'Modular Kitchen',
    before: g('transform-kitchen-before.png'),
    after: g('transform-kitchen-after.png'),
  },
]

export const steps = [
  { num: '01', title: 'Discover', copy: 'Site visit, measurements, and understanding how you use the space.' },
  { num: '02', title: 'Design', copy: 'Layouts, materials, and 3D views before fabrication starts.' },
  { num: '03', title: 'Build', copy: 'Precision joinery for wardrobes, kitchens, and custom units.' },
  { num: '04', title: 'Install', copy: 'On-site finishing, fittings, and a clean handover.' },
]

export const testimonials = [
  {
    quote:
      'LK Interiors delivered a wardrobe and TV unit that made the whole home feel finished.',
    name: 'Home Client',
    role: 'Residential Project',
  },
  {
    quote:
      'From modular kitchen to storage, the work was neat, on time, and exactly as discussed.',
    name: 'Apartment Client',
    role: 'Kitchen & Wardrobe',
  },
]
