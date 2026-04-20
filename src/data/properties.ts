export interface Property {
  id: string;
  slug: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  builtArea: number;
  plotArea: number;
  features: string[];
  description: string;
  images: string[];
  type: string;
  featured?: boolean;
}

export const properties: Property[] = [
  {
    id: '1',
    slug: 'detached-luxury-villa-pilar',
    title: 'Detached Luxury Villa in Pilar de la Horadada',
    price: 450000,
    location: 'Pinar de Campoverde, 03191 Pilar de la Horadada, ALICANTE',
    bedrooms: 3,
    bathrooms: 2,
    garages: 2,
    builtArea: 205,
    plotArea: 245,
    type: 'Luxury Villa',
    featured: true,
    features: [
      'Alarm System',
      'Community Swimming Pool',
      'Private Swimming Pool',
      'Solarium',
      'Private Garden',
      'Underfloor Heating',
      'Electric Blinds',
      'Built-in Wardrobes',
      'Porcelain Tile Flooring',
      'Near Golf Course (0.8 km)',
    ],
    description: `I present a sophisticated development of 11 detached homes. This development offers a perfect residential experience for those seeking comfort and serenity. The "Detached" type properties ensure a private oasis with privileged access to a golf course just 0.8 km away. For frequent travellers, the airport is conveniently located 48.3 km away. These homes stand out for their modern design and premium finishes that guarantee maximum well-being.

The impressive exterior facades blend harmoniously with the natural landscape of Pilar de la Horadada. Each home features a private garden, ideal for enjoying the characteristic sunny climate of the area. The terraces and solariums offer unique spaces to relax outdoors while taking in the views. A private swimming pool in each property adds exclusivity, allowing you to enjoy refreshing moments without leaving home.

The interior has been meticulously designed to maximise comfort and functionality. With three bedrooms and two bathrooms, each space is spacious and welcoming for the whole family. Porcelain tile flooring provides elegance and ease of daily maintenance. Underfloor heating ensures warmth during the colder months, while electric blinds and built-in wardrobes add modern practicality to the home.`,
    images: [
      'input_file_3.png',
      'input_file_18.png',
      'input_file_2.png',
      'input_file_9.png',
      'input_file_11.png',
      'input_file_20.png',
      'input_file_22.png',
    ],
  },
  {
    id: '2',
    slug: 'independent-algorfa',
    title: 'Independent Luxury Villa in Algorfa',
    price: 420000,
    location: 'Valencian Community, Algorfa, Alicante',
    bedrooms: 3,
    bathrooms: 2,
    garages: 1,
    builtArea: 98,
    plotArea: 200,
    type: 'Villa',
    features: [
      'Private Swimming Pool',
      'Solarium',
      'Spacious Terrace',
      'Built-in Wardrobes',
      'Advanced Home Automation',
      'Private Garage',
      'Near Golf Course (1 km)',
    ],
    description: `RE/MAX Inmomás presents an exclusive opportunity in Algorfa: a collection of 49 detached homes promising tranquility and comfort. These "Detached" properties ensure privacy and an exceptional lifestyle. Their proximity to golf courses, just 1 km away, makes them an ideal paradise for golfers. Furthermore, the location is strategic, with the nearest airport only 35 km away, facilitating international connections.

Enjoy the Mediterranean climate with a private pool in each home, perfect for cooling off without leaving home. The solarium offers the ideal place to relax in the sun in complete privacy. Likewise, the spacious terrace is a versatile space that invites you to enjoy al fresco dining or simply contemplate the natural surroundings.

The homes are designed with maximum comfort and functionality in mind. With three bedrooms and two bathrooms, they are perfect for families or couples seeking ample living space. Built-in wardrobes provide efficient storage solutions. They also feature advanced home automation for easy control of home functions and a private garage that guarantees security for both parking and storage.`,
    images: [
      'https://picsum.photos/seed/algorfa1/1200/800',
      'https://picsum.photos/seed/algorfa2/1200/800',
      'https://picsum.photos/seed/algorfa3/1200/800',
    ],
  },
  {
    id: '3',
    slug: 'minimalist-mansion-marbella',
    title: 'Modern Minimalist Mansion',
    price: 1250000,
    location: 'Marbella, Malaga, Spain',
    bedrooms: 5,
    bathrooms: 4,
    garages: 3,
    builtArea: 450,
    plotArea: 800,
    type: 'Mansion',
    features: [
      'Infinity Pool',
      'Smart Home System',
      'Home Cinema',
      'Wine Cellar',
      'Gym',
    ],
    description: 'An architectural masterpiece overlooking the Mediterranean. This mansion combines raw concrete with warm wood and floor-to-ceiling glass.',
    images: [
      'https://picsum.photos/seed/mansion1/1200/800',
    ],
  },
  {
    id: '4',
    slug: 'contemporary-penthouse-valencia',
    title: 'Contemporary Penthouse',
    price: 890000,
    location: 'Valencia, Spain',
    bedrooms: 3,
    bathrooms: 3,
    garages: 2,
    builtArea: 180,
    plotArea: 0,
    type: 'Penthouse',
    features: [
      'Panoramic Views',
      'Private Terrace',
      'Concierge Service',
      'Underground Parking',
    ],
    description: 'Luxury living in the heart of the city. This penthouse offers breathtaking views and top-of-the-line finishes.',
    images: [
      'https://picsum.photos/seed/penthouse1/1200/800',
    ],
  },
  {
    id: '5',
    slug: 'modern-villa-polop',
    title: 'Modern Sea View Villa in Polop',
    price: 598000,
    location: 'Cantal Plate, Polop, Alicante, Spain',
    bedrooms: 3,
    bathrooms: 3,
    garages: 1,
    builtArea: 165,
    plotArea: 400,
    type: 'Villa',
    features: [
      'Sea Views',
      'Private Swimming Pool',
      'Private Garden',
      'Spacious Terraces',
      'Solarium Option',
      'Electric Blinds',
      'Porcelain Tile Flooring',
      'Modern Appliances',
      'Built-in Wardrobes',
      'A/C Pre-installation',
    ],
    description: `RE/MAX Inmomás presents a unique opportunity in Polop: 10 detached homes that combine modernity and functionality. Designed for comfort, these houses offer three bedrooms and three bathrooms, ideal for families who value space and convenience. Located in a natural setting with sea views, these properties allow you to enjoy tranquility without sacrificing contemporary amenities.

The exteriors of these homes are a true visual delight. Each house has its own private garden, perfect for outdoor moments with friends or family. The terraces extend the living space, allowing you to enjoy the Mediterranean climate while taking in the sea views. For those seeking exclusivity, there is the option of a private solarium, and each home has a private pool that guarantees refreshing summer days.

The interiors of the homes are designed with elegance and practicality in mind. Porcelain tile floors provide durability and style, while electric blinds make everyday life easier. The inclusion of modern appliances and built-in wardrobes optimizes storage. In addition, the pre-installation for air conditioning ensures a cool environment during the warmer months of the year.`,
    images: [
      'https://picsum.photos/seed/polop1/1200/800',
      'https://picsum.photos/seed/polop2/1200/800',
      'https://picsum.photos/seed/polop3/1200/800',
      'https://picsum.photos/seed/polop4/1200/800',
    ],
  },
  {
    id: '6',
    slug: 'villa-las-colinas-golf',
    title: 'Villa in Las Colinas Golf',
    price: 835000,
    location: 'Las Colinas Golf, 03189 Orihuela, Alicante',
    bedrooms: 3,
    bathrooms: 3,
    garages: 1,
    builtArea: 129,
    plotArea: 300,
    type: 'Villa',
    features: [
      'Private Swimming Pool',
      'Private Garden',
      'Spacious Terraces',
      'Porcelain Tile Flooring',
      'Fully Furnished',
      'Modern Appliances',
      'Advanced Home Automation',
      'Efficient Air Conditioning',
      'Underfloor Heating',
      'Electric Blinds',
      'Near Golf Course (0.5 km)',
    ],
    description: `RE/MAX Inmomás presents an exclusive collection of 16 properties located in the prestigious Dehesa de Campoamor. These homes, available in detached and villa styles, offer a lifestyle in harmony with nature without sacrificing modern comforts. Just 0.5 km from the golf course, these houses are ideal for those who wish to combine a tranquil environment with sporting activities.

Enjoy the Mediterranean climate to the fullest in the outdoor spaces designed for your well-being. Each property has its own private garden, where you can create a personal haven of peace and relaxation. The spacious terraces are designed for al fresco dining or moments of rest after an active day. In addition, each home includes a private pool that adds an exclusive touch.

The interior is meticulously designed to provide warmth and modern style. With three bedrooms and three bathrooms per home, ample space is guaranteed for the whole family. Porcelain tile flooring adds not only elegance but also practicality for daily maintenance. Fully furnished and equipped with modern appliances, these homes are designed with attention to every detail. Technological innovations such as advanced home automation faciliate a contemporary lifestyle.`,
    images: [
      'https://picsum.photos/seed/colinas1/1200/800',
      'https://picsum.photos/seed/colinas2/1200/800',
      'https://picsum.photos/seed/colinas3/1200/800',
    ],
  },
  {
    id: '7',
    slug: 'independent-finestrat',
    title: 'Independent Luxury Villa in Finestrat',
    price: 579000,
    location: 'Golf Puig Campana, Finestrat, ALICANTE',
    bedrooms: 3,
    bathrooms: 3,
    garages: 1,
    builtArea: 163,
    plotArea: 400,
    type: 'Villa',
    features: [
      'Sea Views',
      'Near Golf Course (700m)',
      'Private Swimming Pool',
      'Private Garden',
      'Solarium',
      'Pergolas',
      'Ceramic Tile Flooring',
      'High-end Appliances',
      'Home Automation System',
      'Electric Blinds',
      'Air Conditioning',
      'Built-in Wardrobes',
      'Video Intercom',
    ],
    description: `Located in the charming town of Finestrat, this exclusive collection of 11 detached homes offers a privileged setting with sea views. Designed for those seeking a sophisticated lifestyle, these properties stand out for their proximity to the sea, just 5 km away, and their location near a golf course, 700 meters away. Each home is meticulously designed to maximize comfort and functionality, integrating cutting-edge technology and high-quality finishes.

The exteriors of these detached homes in Finestrat are designed to take full advantage of the Mediterranean climate. Each property features a private garden and terrace, ideal for relaxing outdoors. In addition, they have a solarium that offers extra space to soak up the sun and enjoy panoramic sea views. The presence of a private swimming pool at each home adds a touch of luxury and exclusivity, allowing you to enjoy a refreshing swim in the privacy of your own home.

The interior of these detached homes in Finestrat is designed for maximum comfort and functionality. With a layout that includes three bedrooms and three bathrooms, every space is optimized for the well-being of its residents. Ceramic tile floors add a modern touch and are easy to maintain. The kitchen is equipped with high-end appliances, and the home automation system allows for easy control of various aspects of the home.`,
    images: [
      'https://picsum.photos/seed/finestrat1/1200/800',
      'https://picsum.photos/seed/finestrat2/1200/800',
      'https://picsum.photos/seed/finestrat3/1200/800',
      'https://picsum.photos/seed/finestrat4/1200/800',
    ],
  },
  {
    id: '8',
    slug: 'independent-torre-horadada',
    title: 'Independent Luxury Villa in Torre de la Horadada',
    price: 589900,
    location: 'Torre de la Horadada, 03191 Pilar de la Horadada, Alicante',
    bedrooms: 3,
    bathrooms: 3,
    garages: 1,
    builtArea: 160,
    plotArea: 350,
    type: 'Villa',
    features: [
      '300m from the Sea',
      'Private Swimming Pool',
      'Private Garden',
      'Spacious Terraces',
      'Solarium',
      'Ceramic Tile Flooring',
      'Premium Appliances',
      'Air Conditioning',
      'Built-in Wardrobes',
      'Electric Blinds',
      'Video Intercom',
    ],
    description: `RE/MAX Inmomás presents a unique opportunity in Torre de la Horadada, featuring four exclusive detached homes just 300 meters from the sea. These properties are perfect for those who wish to enjoy Mediterranean living with the beach at their doorstep. Designed with comfort and functionality in mind, each home boasts three bedrooms and three bathrooms, providing ideal spaces for families.

The exterior design of these homes in Torre de la Horadada is conceived to take full advantage of the sunny climate of the Alicante coast. Each property has its own private garden, creating a perfect space for enjoying the outdoors. The spacious terraces are ideal for dining or relaxing at sunset, while the solarium offers a privileged spot for sunbathing year-round. In addition, each home includes a private pool, adding a touch of luxury.

The interiors are meticulously designed to offer comfort and modern style. Ceramic floors provide elegance and ease of maintenance, while air conditioning ensures an ideal temperature year-round. Equipped with premium appliances, these homes simplify daily tasks and enhance quality of life. Built-in wardrobes optimize storage, keeping every space in the home tidy. With integrated electric blinds and video intercoms, an extra level of security is added.`,
    images: [
      'https://picsum.photos/seed/torre1/1200/800',
      'https://picsum.photos/seed/torre2/1200/800',
      'https://picsum.photos/seed/torre3/1200/800',
    ],
  },
  {
    id: '9',
    slug: 'detached-villa-finestrat',
    title: 'Detached Villa with 3 Bedrooms in Finestrat',
    price: 489000,
    location: 'Finestrat Urbanizations, 03509 Finestrat, ALICANTE',
    bedrooms: 3,
    bathrooms: 2,
    garages: 1,
    builtArea: 110,
    plotArea: 305,
    type: 'Villa',
    features: [
      'Parking',
      'Single-story Layout',
      'Detached Property',
      'Quiet Residential Area',
      'Under Construction (May 2026)',
      'Modern Integrated Kitchen',
      'Large Plot',
      'Privileged Privacy',
    ],
    description: `A detached, single-story villa is offered for sale in Finestrat, currently under construction, located in a very quiet area, ideal for year-round living as well as enjoying holidays with complete privacy and comfort.

The house will have 3 bedrooms, 2 full bathrooms, and a bright living room integrated with the kitchen in a modern and functional space. The constructed area is 95 m² on a 305 m² plot. Completion is scheduled for May 2026.

At €489,000, it is currently the most competitively priced option among independent villas in the area, offering an exceptional opportunity for those looking for a modern home in a sought-after location.`,
    images: [
      'https://picsum.photos/seed/finestrat_villa_1/1200/800',
      'https://picsum.photos/seed/finestrat_villa_2/1200/800',
      'https://picsum.photos/seed/finestrat_villa_3/1200/800',
    ],
  },
];
