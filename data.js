// data.js — Waterbear Tech product data file
// How to use: edit this file, then re-upload to Netlify to update the website
// Or use admin.html to edit visually and export this file.

window.SITE_DATA = {
  company: {
    name: "Ningbo Waterbear Environmental Technology Co., Ltd.",
    shortName: "Waterbear Tech",
    whatsapp: "+8613355993701",
    email: "willdigs2@gmail.com"
  },

  categories: [
    {
      id: "furniture-hardware",
      name: "Furniture Hardware",
      icon: "🔩",
      color: "#E8F5EE",
      description: "Cabinet hinges, flat plates, brackets, and hardware accessories for furniture manufacturing and construction."
    },
    {
      id: "environmental-tech",
      name: "Environmental Technology",
      icon: "🌱",
      color: "#D4EDE2",
      description: "Eco-friendly products and green technology solutions for a sustainable future."
    },
    {
      id: "home-decor",
      name: "Home & Garden",
      icon: "🏠",
      color: "#FFF8E7",
      description: "Decorative lighting, seasonal ornaments, and home accessories for indoor and outdoor ambiance."
    }
    // ADD NEW CATEGORIES HERE (copy the block above and edit):
    // {
    //   id: "new-category-id",
    //   name: "Category Name",
    //   icon: "🔧",
    //   color: "#FFF3E0",
    //   description: "Category description here."
    // }
  ],

  products: [
    // === FURNITURE HARDWARE ===
    {
      sku: "WH844-STEEL",
      name: "Steel Cabinet Hinge",
      category: "furniture-hardware",
      specs: ["Φ24", "Φ25", "Φ32", "Φ35"],
      material: "Carbon Steel",
      finish: "Electroplated (Ni/Zn)",
      application: "Kitchen cabinets, wardrobes, furniture manufacturing"
    },
    {
      sku: "WH844-ALU",
      name: "Aluminum Cabinet Hinge",
      category: "furniture-hardware",
      specs: ["Φ25", "Φ35"],
      material: "Aluminum Alloy",
      finish: "Anodized",
      application: "Lightweight furniture, modular cabinets, wardrobe systems"
    },
    {
      sku: "WH845",
      name: "Hinge (Small / Large)",
      category: "furniture-hardware",
      specs: ["Small Φ24", "Big Φ32"],
      material: "Steel",
      finish: "Electroplated",
      application: "Kitchen cabinets, storage units, furniture assembly"
    },
    {
      sku: "WH846",
      name: "Hinge (Small / Large)",
      category: "furniture-hardware",
      specs: ["Small 40×50mm", "Big 50×60mm"],
      material: "Steel",
      finish: "Electroplated",
      application: "Medium to heavy-duty cabinet doors"
    },
    {
      sku: "WH847",
      name: "3-Size Hinge",
      category: "furniture-hardware",
      specs: ["25×32mm", "32×45mm", "38×57mm"],
      material: "Steel",
      finish: "Electroplated",
      application: "Furniture importers, hardware wholesalers"
    },
    {
      sku: "WH833",
      name: "Steel Flat Plate (9 Sizes)",
      category: "furniture-hardware",
      specs: ['2"×2"×2mm', '3"×3"×3mm', '4"×4"×4mm', '5"×5"×4.5mm', '6"×6"×5.5mm'],
      material: "Steel",
      finish: "Electroplated / Galvanized",
      application: "Furniture joints, door frames, structural reinforcement"
    },
    {
      sku: "WH833-ALU",
      name: "Aluminum Flat Plate",
      category: "furniture-hardware",
      specs: ['4"×4"×2mm'],
      material: "Aluminum Alloy",
      finish: "Anodized",
      application: "Custom furniture, exhibition displays, modular shelving"
    },
    {
      sku: "SH6009",
      name: "Hardware Accessory (Bracket/Hook)",
      category: "furniture-hardware",
      specs: ["Standard"],
      material: "Steel",
      finish: "Electroplated",
      application: "Retail fixtures, display hooks, furniture assembly"
    },
    {
      sku: "SH6017",
      name: "Hardware Part",
      category: "furniture-hardware",
      specs: ["100mm", "150mm"],
      material: "Steel",
      finish: "Electroplated",
      application: "Furniture manufacturing, construction hardware"
    },
    // === HOME & GARDEN ===
    {
      sku: "WB-LED-BIRCH-60",
      name: "LED Birch Tree Light",
      category: "home-decor",
      specs: ["60cm Height", "24 Warm White LEDs", "3×AA Battery + USB", "On/Off/Flash Mode"],
      material: "Plastic + LED",
      finish: "White Birch Bark Texture",
      application: "Home decoration, holiday lighting, bedroom ambiance, gift shops, seasonal displays",
      image: "images/products/WB-LED-BIRCH-60.png"
    }
    // ADD NEW PRODUCTS HERE (copy the block above and edit):
    // {
    //   sku: "SKU-001",
    //   name: "Product Name",
    //   category: "furniture-hardware",  // use the category id from above
    //   specs: ["Spec1", "Spec2"],
    //   material: "Material name",
    //   finish: "Finish type",
    //   application: "Application description"
    // }
  ]
};
