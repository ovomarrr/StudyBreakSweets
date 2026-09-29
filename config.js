// EDIT THIS FILE to update the weekly menu, schools, contact info, and payment settings.
// The site layout does not need to change when the weekly menu changes.
const SITE_CONFIG = {
  businessName: "Baked by Piper",
  tagline: "Fresh-baked cookies, made for your school day.",
  instagram: "cookies.by.piper",
  email: "cookies.by.piper3@gmail.com",

  // Add Piper's real Cash App link here before publishing.
  // Example format: https://cash.app/$YourCashtag
  cashAppUrl: "https://cash.app/$PiperBork",

  // Paste the deployed Google Apps Script Web App URL here.
  // The included GOOGLE_SHEETS_SETUP.md walks you through the one-time setup.
  googleSheetsEndpoint: "https://script.google.com/macros/s/AKfycbwHFPnpcCx9KJZ-iWcQILC82UXFk1FtwTPkP7R0QjfMzEnEv4ROO96gjiySdc2rPs2qRg/exec",

  orderingNote: "Orders are sent to the Cookies by Piper order sheet and then you can complete payment through Cash App.",
  schools: [
    "Woodbridge High School",
    "Lake Braddock Secondary School (LBSS)",
    "Edison High School"
  ],

  // WEEKLY MENU: change this list each week. The order page and menu update automatically.
  products: [
    {
      id: "Nut_ella",
      name: "Nutella deluxe",
      description: "available in woodbridge only. ran out in edison and lbss.",
      price: 3.00,
      availability: "unavailable",
      emoji: "🍪",
      featured: true
    },
    {
      id: "Fruity_pebs",
      name: "Fruity pebbles",
      description: "A fruity pebbles flavored cookie.",
      price: 3.00,
      availability: "Available",
      emoji: "🤍",
      featured: true
    },
    {
      id: "brown-butter",
      name: "Blank till further notice",
      description: "open spot",
      price: 3.50,
      availability: "unavailable",
      emoji: "🍫",
      featured: true
    },
    {
      id: "ctc",
      name: "blank till further notice",
      description: "opens spot.",
      price: 3.00,
      availability: "Sample / editable",
      emoji: "✨",
      featured: true
    },
    {
      id: "red-velvet",
      name: "blank till further notice",
      description: "Soft red velvet cookie with a rich chocolate flavor.",
      price: 3.25,
      availability: "Sample / editable",
      emoji: "❤️",
      featured: false
    }
  ]
};
