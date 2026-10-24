import type { Product } from "../types";

export const initialProducts: Product[] = [
  // ---------------- BAGS ----------------
  {
    id: 1,
    image: "/images/bag1.jpg",
    name: "Noir Scarf Mini Tote",
    category: "Bags",
    description:
      "A sleek little black tote dressed up with a silky twilly scarf wrapped around the handle. Quiet luxury, girly edition.",
    specification:
      "Faux leather • Top handle • Detachable silk-feel scarf • Fits phone, lipstick, cardholder",
    rating: 5,
    price: 1299,
    quantity: 15,
    featured: true,
  },
  {
    id: 2,
    image: "/images/bag2.jpg",
    name: "Cherry Cherie Handbag",
    category: "Bags",
    description:
      "Wine-red croc-texture trim with soft canvas panels, finished with a glossy golden cherry charm. Main-character energy.",
    specification:
      "Croc-embossed faux leather + canvas • Gold hardware • Cherry keychain included • Zip closure",
    rating: 4,
    price: 1899,
    quantity: 15,
  },
  {
    id: 3,
    image: "/images/bag3.jpg",
    name: "Bunny Blue Crossbody",
    category: "Bags",
    description:
      "A baby-blue crossbody covered in cute bunny prints with a golden bunny-ear clasp and a ribbon scarf. Pure kawaii.",
    specification:
      "PU leather • Bunny-ear gold lock • Top handle + chain strap • Scarf included",
    rating: 5,
    price: 1099,
    quantity: 15,
    featured: true,
  },
  {
    id: 4,
    image: "/images/bag4.jpg",
    name: "Cocoa Teddy Tote",
    category: "Bags",
    description:
      "Chocolate-brown tote with a satin bow, a fluffy teddy bear and a boba charm. Good things take time.",
    specification:
      "Faux leather • Twist lock • Charms included (teddy, flower, boba, heart tag) • Fits 10-inch tablet",
    rating: 5,
    price: 2199,
    quantity: 15,
  },
  {
    id: 5,
    image: "/images/bag5.jpg",
    name: "Cream Blossom Satchel",
    category: "Bags",
    description:
      "A soft cream satchel with a floral silk ribbon and a golden twist lock. Perfect for brunch dates and coffee runs.",
    specification:
      "Smooth PU leather • Gold turn lock • Adjustable crossbody strap • Floral scarf included",
    rating: 4,
    price: 1499,
    quantity: 15,
  },

  // ---------------- MAKEUP ----------------
  {
    id: 6,
    image: "/images/makeup1.jpg",
    name: "Midnight Celestial Palette Set",
    category: "Makeup",
    description:
      "Ornate blue and violet compacts with castle-and-stars engravings. Dreamy shimmer shades that look like a fairytale night sky.",
    specification:
      "Eyeshadow + highlighter compacts • Pearl shimmer finish • Mirror included • Limited edition",
    rating: 5,
    price: 1599,
    quantity: 15,
    featured: true,
  },
  {
    id: 7,
    image: "/images/makeup2.jpg",
    name: "Dollhouse Compact Collection",
    category: "Makeup",
    description:
      "Pastel, embossed blushes and highlighters shaped like cakes, hearts and seashells. Too pretty to use (but you will).",
    specification:
      "Blush & highlight compacts • Embossed carved case • Buildable color • Assorted shapes",
    rating: 5,
    price: 1250,
    quantity: 15,
  },
  {
    id: 8,
    image: "/images/makeup3.jpg",
    name: "Midsummer Fairytale Vanity Set",
    category: "Makeup",
    description:
      "A rose-gold vanity set with a heart-shaped hand mirror, lip color, and glittery eyeshadow. Get ready like a princess.",
    specification:
      "Eyeshadow palette • Lip color • Heart hand mirror • Gift-box ready",
    rating: 4,
    price: 2450,
    quantity: 15,
    featured: true,
  },
  {
    id: 9,
    image: "/images/makeup4.jpg",
    name: "Golden Nude Glam Kit",
    category: "Makeup",
    description:
      "Everything for a warm bronze glow: neutral palettes, glossy liquid lipsticks, foundation and rose-gold brushes.",
    specification:
      "2 eyeshadow palettes • 8 liquid lipsticks • Foundation • 6 makeup brushes",
    rating: 5,
    price: 3199,
    quantity: 15,
  },
  {
    id: 10,
    image: "/images/makeup5.jpg",
    name: "Rosy Glow Lip & Skin Set",
    category: "Makeup",
    description:
      "A pink-perfect box of cherry lip glow oils, tinted lip balms, blush and a skin-prep essence for a fresh, juicy glow.",
    specification:
      "4 lip glow oils • 2 lip balms • Blush • Glow-prep essence • Gift-box packaging",
    rating: 5,
    price: 2899,
    quantity: 15,
  },

  // ---------------- NAILS ----------------
  {
    id: 11,
    image: "/images/nail1.jpg",
    name: "Burgundy Blossom Press-Ons",
    category: "Nails",
    description:
      "Glossy cat-eye wine nails with gold accents, pink butterfly wings and 3D jelly flowers. Elegant and a little dramatic.",
    specification:
      "10-piece set • Almond shape • Sizes XS/S/M/L • Reusable • Glue + prep kit included",
    rating: 5,
    price: 450,
    quantity: 15,
    featured: true,
  },
  {
    id: 12,
    image: "/images/nail2.jpg",
    name: "Starry Periwinkle Pearls",
    category: "Nails",
    description:
      "Dreamy blue-to-white gradients with shimmer, tiny pearls and sparkly stars. Like wearing a galaxy on your fingertips.",
    specification:
      "10-piece set • Long almond • 3D pearl details • Sizes XS/S/M/L • Reusable",
    rating: 4,
    price: 520,
    quantity: 15,
  },
  {
    id: 13,
    image: "/images/nail3.jpg",
    name: "Midnight Butterfly Chrome",
    category: "Nails",
    description:
      "Smoky violet jelly nails with silver chrome butterflies, a crystal heart and a cute black ribbon. Soft goth, still girly.",
    specification:
      "10-piece set • Chrome metal 3D art • Long almond • Comes with ribbon gift tie",
    rating: 5,
    price: 620,
    quantity: 15,
  },
  {
    id: 14,
    image: "/images/nail4.jpg",
    name: "Cherry Chrome Butterflies",
    category: "Nails",
    description:
      "Cherry-red ombre nails with delicate silver butterfly wings, swirls and heart gems. Bold, romantic, unforgettable.",
    specification:
      "10-piece set • Hand-painted chrome gel • Mixed sizes • Reusable • Prep kit included",
    rating: 5,
    price: 580,
    quantity: 15,
  },
  {
    id: 15,
    image: "/images/nail5.jpg",
    name: "Lilac Gem Chrome Set",
    category: "Nails",
    description:
      "Lilac and amethyst nails framed in liquid-silver chrome, with glitter stars and glossy jewel centers. Pure princess.",
    specification:
      "10-piece set • Short-to-medium almond • Jelly gem + chrome finish • Reusable",
    rating: 4,
    price: 540,
    quantity: 15,
  },
];