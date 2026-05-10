const ourPhilosophyBody = [
  'At Springs Fish Shop & Café, we believe in simple food done properly. We focus on fresh, locally sourced fish and traditional British café food, prepared with care and without unnecessary complication.',
  'We are a small, community-focused business in West Sussex, where quality and consistency matter more than trends. Everything we serve is shaped by tradition, freshness, and honest cooking.',
];

const seafoodBody = [
  'Our seafood is sourced fresh and prepared daily at our fish counter. We offer a changing selection of seasonal fish and traditional favourites, prepared with care and attention to quality.',
  'From everyday staples to speciality catches, everything we sell is selected for freshness, flavour, and simplicity.',
];

export const siteContent = {
  meta: {
    title: 'Springs Fish Shop & Café',
    description: 'Springs Fish Shop & Café in West Sussex. Fresh fish, classic British food and a traditional local café.',
    url: 'https://springsfishshop.com',
    image: '/images/fish-counter.jpeg',
    keywords: ['fishmonger', 'café', 'smoked fish', 'seafood', 'West Sussex'],
  },
  nav: {
    brand: 'Springs Fish Shop & Café',
    logo: '/images/logo-transparent.png',
    logoAlt: 'Springs Fish Shop and Café logo',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Menu', href: '/menu' },
      { label: 'Order', href: '/order' },
      { label: 'Seafood', href: '/seafood' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  header: {
    eyebrow: 'West Sussex fishmonger and café',
    title: 'Springs Fish Shop and Cafe',
    subtitle: 'A traditional fish shop and café serving fresh seafood and classic British food in West Sussex.',
    ctas: [
      { label: 'View Menu', href: '/menu' },
      { label: 'Place Order', href: '/order' },
      { label: 'Our Philosophy', href: '/about' },
      { label: 'Seafood', href: '/seafood' },
    ],
  },
  home: {
    heroPanel: {
      eyebrow: 'Fish counter',
      heading: 'Fresh fish, prepared simply.',
      body: 'A traditional fish shop and café serving fresh seafood and classic British food in West Sussex.',
    },
    story: {
      eyebrow: 'A traditional West Sussex fish shop',
      heading: 'Fresh seafood, simple homemade food and a local café feel.',
      body: 'Springs Fish Shop & Café brings together a traditional fish counter and a friendly café on Edburton Road. We focus on fresh fish, classic British food and straightforward hospitality for the local community.',
    },
    cafe: {
      eyebrow: 'Café by the fish counter',
      heading: 'Fresh breakfasts, sandwiches and homemade café food.',
      body: 'A traditional café serving freshly prepared English breakfasts, sausage rolls, sandwiches, and simple homemade meals alongside our fish counter.',
      noteHeading: 'Café focus',
      noteBody: 'Stop in for a proper breakfast, a simple lunch or something freshly made to take away.',
      image: '/images/matcha.jpeg',
      imageAlt: 'Iced matcha drink from Springs Fish Shop and Café.',
      foodImage: '/images/smoked-salmon-toast.jpeg',
      foodImageAlt: 'Smoked salmon on toast served at Springs Fish Shop and Café.',
    },
    location: {
      eyebrow: 'West Sussex',
      heading: 'Find us on Edburton Road.',
      body: 'Visit Springs Fish Shop & Café for the fish counter, café food and a friendly local welcome.',
      noteHeading: 'Opening hours',
      noteBody: 'Tuesday to Sunday, 9:00am to 3:00pm. Monday closed.',
      mapHeading: 'Find Us',
      mapBody: 'Edburton Road, Edburton, Henfield, BN5 9LN',
    },
  },
  menu: {
    heading: 'Menu',
    intro: 'A quietly edited café menu of breakfasts, lunch plates, sandwiches and daily specials.',
    image: '/images/cafe-food.jpeg',
    imageAlt: 'Fresh café food served at Springs Fish Shop and Café.',
    cakesFeature: {
      heading: 'Cakes at the counter',
      body: 'We also offer a changing selection of cakes at the counter, including regular, gluten-free, and dairy-free options where available.',
      image: '/images/cakes-counter.jpeg',
      imageAlt: 'Cake counter at Springs Fish Shop and Café.',
    },
    categories: [
      {
        id: 'breakfast',
        name: 'Breakfast',
        description: 'Morning plates prepared simply and served from the café.',
        items: [
          { name: 'Springs Breakfast', description: 'Sausage, bacon, hash brown, fried egg, flat mushroom, beans and toast.', price: '£9.95' },
          { name: 'Veggie Breakfast', description: 'Sausage, 2 hash browns, flat mushroom, fried egg, on the vine tomatoes and toast.', price: '£8.95' },
          { name: 'Scrambled Eggs on Sourdough', description: 'Add avocado £2. Add smoked salmon £3.', price: '£6.95' },
          { name: 'Kippers', description: 'Whole or fillets. Add a poached egg £1.', price: '£7.95' },
          { name: 'Smashed Avocado', description: 'Served on sourdough with 2 poached eggs, drizzled with chilli jam.', price: '£8.95' },
        ],
      },
      {
        id: 'lunch',
        name: 'Lunch',
        description: 'Seasonal plates, warm dishes and fish-led lunches.',
        items: [
          { name: 'Quiche of the Day', description: 'Served with fried new potatoes, side salad and homemade coleslaw.', price: '£9.95' },
          { name: 'Salad Platter', description: 'Smoked or peppered mackerel fillet, prawns in Marie Rose sauce, chilli and garlic prawn skewers, tuna mayo, prawn and crab mayo, or dressed crab with £4 supplement.', price: '£9.95' },
          { name: 'Welsh Rarebit', description: 'Buck rarebit available with a poached egg for £1.', price: '£7.95' },
          { name: 'Smoked Haddock Chowder', description: 'Homemade and served with a toasted roll and butter.', price: '£7.50' },
        ],
      },
      {
        id: 'sandwiches',
        name: 'Sandwiches',
        description: 'Classic fillings, seafood sandwiches and toasted melts.',
        items: [
          { name: 'Sausage', description: '', price: '£5.50' },
          { name: 'Bacon', description: '', price: '£5.50' },
          { name: 'Bacon and Sausage', description: '', price: '£6.50' },
          { name: 'Bacon, Brie and Cranberry', description: '', price: '£6.50' },
          { name: 'BLT', description: 'Bacon, lettuce and tomato.', price: '£6.00' },
          { name: 'Tuna and Cucumber', description: '', price: '£5.50' },
          { name: 'Cheese', description: '', price: '£4.50' },
          { name: 'Ham', description: '', price: '£4.50' },
          { name: 'Ham and Cheese', description: '', price: '£5.50' },
          { name: 'Smoked Salmon and Cream Cheese', description: '', price: '£7.50' },
          { name: 'Chorizo and Cheese Melt', description: 'Toasted and served warm.', price: '£6.00' },
          { name: 'New Yorker', description: '', price: '£6.50' },
          { name: 'Crab and Prawn Mayo', description: '', price: '£6.50' },
          { name: 'Mozzarella, Pesto and Tomato', description: '', price: '£6.00' },
          { name: 'Prawn', description: 'Served with Marie Rose sauce.', price: '£6.50' },
          { name: 'Tuna Melt', description: 'Onion and cheese, toasted.', price: '£6.00' },
        ],
      },
      {
        id: 'specials',
        name: 'Specials',
        description: 'A changing board of seasonal plates and market-led dishes.',
        items: [
          { name: 'Daily Specials', description: 'Please see the blackboard for our daily specials.', price: 'Blackboard' },
        ],
      },
    ],
  },
  order: {
    heading: 'Place Your Order',
    intro: 'Orders are prepared for collection only. After receiving the order request, the business will confirm availability and provide payment details or an invoice if required.',
    detailsHeading: 'Important',
    details: [
      'Collect from Edburton Road, Edburton, Henfield.',
      'Orders are confirmed manually via phone or email.',
    ],
    form: {
      nameLabel: 'Name',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      orderLabel: 'Order details',
      dateLabel: 'Preferred collection date and time',
      datePlaceholder: 'e.g. Saturday 11:30',
      disclaimer: 'I understand this is an order request and availability will be confirmed by email.',
      submit: 'Submit order request',
      sending: 'Sending request...',
      success: 'Thank you. Your request has been sent and availability will be confirmed by email.',
      error: 'Sorry, the request could not be sent. Please call or email us directly.',
    },
    contact: {
      callLabel: 'Call to order',
      emailLabel: 'Email order request',
    },
    sourcing: {
      heading: 'Sourcing',
      body: 'All seafood is supplied in partnership with MCB Seafoods in Brighton. They are our primary seafood supplier and specialise in fresh fish distribution across the South Coast. This helps us keep sourcing consistent and high quality, with stock delivered fresh and handled daily.',
    },
  },
  seafood: {
    heading: 'Seafood',
    intro: seafoodBody,
    image: '/images/fish-counter-wide.jpeg',
    imageAlt: 'Fish counter at Springs Fish Shop and Café.',
    note: 'Stock varies seasonally and weekly depending on availability.',
    sourcing: {
      heading: 'Sourcing',
      body: 'Our fresh fish and seafood is supplied in partnership with MCB Seafoods in Brighton. They are our primary seafood supplier, helping us keep the counter consistent, fresh and carefully handled each day.',
    },
    categories: [
      {
        name: 'Fresh Fish',
        items: [
          'Salmon',
          'Sea bass',
          'Salmon fillets',
          'Cod fillets',
          'Tuna loin',
          'Plaice',
          'Bream',
          'Gurnard',
          'Red mullet',
          'Hake',
        ],
      },
      {
        name: 'Shellfish',
        items: ['Shetland mussels', 'Scallops', 'Oysters', 'Squid'],
      },
      {
        name: 'Smoked Fish',
        items: [
          'Natural smoked haddock',
          'Smoked salmon',
          'Smoked mackerel',
          'Peppered mackerel',
          'Kiln roast smoked fish',
          'Hot smoked salmon',
          'Kipper fillets',
          'Whole kippers',
        ],
      },
    ],
  },
  about: {
    heading: 'About Springs Fish Shop & Café',
    sections: [
      {
        title: 'A traditional fishmonger and café',
        body: 'Springs Fish Shop & Café is a traditional West Sussex fishmonger and café serving fresh fish, seafood and classic homemade food from our shop on Edburton Road. The fish counter is at the heart of the business, supplied in partnership with MCB Seafoods and run with simple preparation, honest service and a focus on freshness.',
      },
      {
        title: 'Local, simple and welcoming',
        body: 'Alongside the fish shop, the café offers freshly prepared English breakfasts, sandwiches, sausage rolls and uncomplicated meals made for everyday visits. It is a local place to collect fish, sit down for food and feel part of the community.',
      },
      {
        title: 'Oak smoke tradition',
        body: 'Set at the foot of the South Downs, Springs carries forward a local food tradition shaped by fish, smoke and careful craft. Oak smoking has been part of the Springs story for decades, and we are honouring that tradition as we prepare to smoke our own fish again very soon.',
      },
      {
        title: 'Our Philosophy',
        body: ourPhilosophyBody.join('\n\n'),
      },
    ],
  },
  contact: {
    heading: 'Contact',
    labels: {
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Opening hours',
      mapTitle: 'Springs Fish Shop & Café map',
    },
    phone: '01903 495284',
    email: 'ellab@mcbseafoods.com',
    displayPhone: '01903 495284',
    phoneHref: 'tel:01903495284',
    address: 'Edburton Road, Edburton, Henfield, BN5 9LN',
    hours: [
      { day: 'Tuesday – Sunday', time: '9:00am – 3:00pm' },
      { day: 'Monday', time: 'Closed' },
    ],
    mapEmbed: 'https://www.google.com/maps?q=Edburton%20Road%2C%20Edburton%2C%20Henfield%2C%20BN5%209LN&output=embed',
  },
  footer: {
    copyright: '© 2026 Springs Fish Shop & Café. All rights reserved.',
    socialLinks: [
      { label: 'Instagram', href: 'https://www.instagram.com/springs.fish.shop/' },
      { label: 'Facebook', href: 'https://www.facebook.com/share/19nCRx7xjE/?mibextid=wwXIfr' },
    ],
    reviewLink: {
      label: 'Read our Google reviews',
      href: 'https://www.google.com/maps/search/?api=1&query=Springs%20Fish%20Shop%20and%20Cafe%20Edburton',
    },
    columns: [
      {
        heading: 'Contact',
        links: [
          { label: '01903 495284', href: 'tel:01903495284' },
          { label: 'ellab@mcbseafoods.com', href: 'mailto:ellab@mcbseafoods.com' },
        ],
      },
      {
        heading: 'Visit',
        links: [
          { label: 'Edburton Road, Edburton, Henfield, BN5 9LN', href: '/contact' },
        ],
      },
      {
        heading: 'Information',
        links: [
          { label: 'Menu', href: '/menu' },
          { label: 'Place an order', href: '/order' },
          { label: 'Seafood', href: '/seafood' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
  },
};
