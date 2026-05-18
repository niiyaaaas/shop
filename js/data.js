const productDatabase = {
    // MUSCLEBLAZE
    "mb-biozyme": {
        brand: "MuscleBlaze",
        title: "Biozyme Performance Whey Protein",
        img: "assets/images/mb_biozyme.png",
        rating: 4.8,
        reviews: 1245,
        desc: "Clinically proven to ensure 50% higher protein absorption and 60% superior BCAA absorption with Enhanced Absorption Formula (EAF®).",
        flavors: ["Rich Chocolate", "Magical Mango", "Kesar Thandi", "Cafe Mocha"],
        weights: [
            { label: "500 g", price: 1399, oldPrice: 1899 },
            { label: "1 kg (27 Servings)", price: 2499, oldPrice: 3299, isDefault: true },
            { label: "2 kg (54 Servings)", price: 4699, oldPrice: 6499 },
            { label: "4 kg (108 Servings)", price: 8999, oldPrice: 12999 }
        ]
    },
    "mb-preworkout": {
        brand: "MuscleBlaze",
        title: "Pre Workout 300",
        img: "assets/images/mb_preworkout.png",
        rating: 4.6,
        reviews: 890,
        desc: "Explosive energy formula with 300mg caffeine and BioPerine for enhanced focus, endurance, and insane muscle pumps.",
        flavors: ["Fruit Punch", "Green Apple", "Melon Twist"],
        weights: [
            { label: "250 g (30 Servings)", price: 1299, oldPrice: 1699, isDefault: true }
        ]
    },
    "mb-gainer": {
        brand: "MuscleBlaze",
        title: "Super Gainer XXL",
        img: "assets/images/mb_gainer.png",
        rating: 4.5,
        reviews: 1540,
        desc: "High-calorie dense formula for massive muscle gains. Contains complex carbs and high-quality protein blend.",
        flavors: ["Chocolate", "Vanilla", "Banana"],
        weights: [
            { label: "1 kg", price: 1299, oldPrice: 1699 },
            { label: "3 kg", price: 3499, oldPrice: 4999, isDefault: true },
            { label: "5 kg", price: 5499, oldPrice: 7499 }
        ]
    },
    "mb-fishoil": {
        brand: "MuscleBlaze",
        title: "Omega 3 Fish Oil 1000mg",
        img: "assets/images/mb_fishoil.png",
        rating: 4.9,
        reviews: 2100,
        desc: "Triple strength fish oil providing EPA and DHA to support joint health, cardiovascular function, and immunity.",
        flavors: ["Unflavored"],
        weights: [
            { label: "60 Capsules", price: 499, oldPrice: 799, isDefault: true },
            { label: "120 Capsules", price: 899, oldPrice: 1499 }
        ]
    },

    // GNC
    "gnc-whey": {
        brand: "GNC",
        title: "Pro Performance 100% Whey",
        img: "assets/images/gnc_whey.png",
        rating: 4.7,
        reviews: 3200,
        desc: "High-quality, macronutrient protein formula with high amounts of naturally occurring amino acids needed for muscle recovery.",
        flavors: ["Chocolate Supreme", "Vanilla Cream", "Strawberry"],
        weights: [
            { label: "2 lbs (907g)", price: 3199, oldPrice: 3799, isDefault: true },
            { label: "4 lbs (1.8kg)", price: 5899, oldPrice: 6999 }
        ]
    },
    "gnc-isolate": {
        brand: "GNC",
        title: "AMP Pure Isolate",
        img: "assets/images/gnc_isolate.png",
        rating: 4.8,
        reviews: 950,
        desc: "Ultra-pure, fast-absorbing whey isolate that fuels muscles fast to maximize performance and growth.",
        flavors: ["Chocolate Frosting", "Vanilla Custard"],
        weights: [
            { label: "2 lbs", price: 4299, oldPrice: 5499, isDefault: true },
            { label: "4 lbs", price: 7999, oldPrice: 9999 }
        ]
    },
    "gnc-creatine": {
        brand: "GNC",
        title: "Pro Performance Creatine Monohydrate",
        img: "assets/images/gnc_creatine.png",
        rating: 4.6,
        reviews: 1420,
        desc: "Manufactured with unsurpassed quality control to ensure purity, potency and freshness. Helps improve sports performance.",
        flavors: ["Unflavored"],
        weights: [
            { label: "100 g", price: 499, oldPrice: 699 },
            { label: "250 g (83 Servings)", price: 1099, oldPrice: 1499, isDefault: true }
        ]
    },
    "gnc-multivitamin": {
        brand: "GNC",
        title: "Mega Men Sport Multivitamin",
        img: "assets/images/gnc_multivitamin.png",
        rating: 4.9,
        reviews: 2800,
        desc: "Clinically studied multivitamin blend designed to support colon, prostate health, and boost athletic performance.",
        flavors: ["Unflavored"],
        weights: [
            { label: "60 Caplets", price: 1299, oldPrice: 1899, isDefault: true },
            { label: "120 Caplets", price: 2199, oldPrice: 3299 }
        ]
    },

    // WELLCORE
    "wellcore-creatine": {
        brand: "Wellcore",
        title: "Pure Micronized Creatine Monohydrate",
        img: "assets/images/wellcore_creatine.png",
        rating: 4.8,
        reviews: 4500,
        desc: "100% pure micronized creatine monohydrate for rapid absorption, increased strength, and explosive energy during intense workouts.",
        flavors: ["Unflavored"],
        weights: [
            { label: "100 g", price: 399, oldPrice: 599 },
            { label: "250 g (83 Servings)", price: 899, oldPrice: 1299, isDefault: true }
        ]
    },
    "wellcore-gainer": {
        brand: "Wellcore",
        title: "Extreme Mass Gainer Formula",
        img: "assets/images/wellcore_gainer.png",
        rating: 4.4,
        reviews: 670,
        desc: "High-calorie complex carb and protein blend designed for rapid mass gaining and increased strength in hardgainers.",
        flavors: ["Rich Chocolate", "French Vanilla"],
        weights: [
            { label: "1 kg", price: 899, oldPrice: 1299 },
            { label: "2.5 kg", price: 1899, oldPrice: 2499, isDefault: true }
        ]
    },
    "wellcore-preworkout": {
        brand: "Wellcore",
        title: "Pre-Workout Explosive Energy",
        img: "assets/images/wellcore_preworkout.png",
        rating: 4.5,
        reviews: 820,
        desc: "Advanced pre-workout matrix formulated to deliver intense energy, laser focus, and skin-tearing pumps.",
        flavors: ["Watermelon", "Blue Raspberry", "Fruit Punch"],
        weights: [
            { label: "200 g (25 Servings)", price: 999, oldPrice: 1499, isDefault: true }
        ]
    },
    "wellcore-isolate": {
        brand: "Wellcore",
        title: "100% Whey Protein Isolate",
        img: "assets/images/wellcore_isolate.png",
        rating: 4.7,
        reviews: 1100,
        desc: "Premium whey isolate with zero fillers. Fast digesting protein to kickstart muscle repair immediately post-workout.",
        flavors: ["Dark Chocolate", "Vanilla Bean"],
        weights: [
            { label: "1 kg (30 Servings)", price: 3499, oldPrice: 4499, isDefault: true },
            { label: "2 kg (60 Servings)", price: 6499, oldPrice: 8499 }
        ]
    },

    // AVVATAR
    "avvatar-whey": {
        brand: "Avatar",
        title: "Premium Whey Protein Blend",
        img: "assets/images/avvatar_whey.png",
        rating: 4.8,
        reviews: 5400,
        desc: "First truly Made in India whey protein, sourced from 100% grass-fed cows milk for the freshest protein directly from the farm.",
        flavors: ["Malai Kulfi", "Belgian Chocolate", "Cafe Mocha"],
        weights: [
            { label: "1 kg", price: 2299, oldPrice: 2899, isDefault: true },
            { label: "2 kg", price: 4299, oldPrice: 5499 }
        ]
    },
    "avvatar-isolate": {
        brand: "Avatar",
        title: "Iso Zero 100% Whey Isolate",
        img: "assets/images/avvatar_isolate.png",
        rating: 4.9,
        reviews: 1800,
        desc: "Premium 100% Whey Isolate with zero carbs and zero fats for lean muscle building and rapid recovery post-workout.",
        flavors: ["Double Chocolate", "Mango"],
        weights: [
            { label: "1 kg", price: 3499, oldPrice: 4299, isDefault: true },
            { label: "2 kg", price: 6499, oldPrice: 7999 }
        ]
    },
    "avvatar-gainer": {
        brand: "Avatar",
        title: "Muscle Gainer",
        img: "assets/images/avvatar_gainer.png",
        rating: 4.5,
        reviews: 930,
        desc: "Scientifically formulated muscle gainer packed with complex carbohydrates and whey protein for serious size.",
        flavors: ["Chocolate", "Vanilla"],
        weights: [
            { label: "1 kg", price: 1099, oldPrice: 1499 },
            { label: "2 kg", price: 2199, oldPrice: 2999, isDefault: true },
            { label: "4 kg", price: 3999, oldPrice: 5499 }
        ]
    },
    "avvatar-preworkout": {
        brand: "Avatar",
        title: "Alpha Pre-Workout",
        img: "assets/images/avvatar_preworkout.png",
        rating: 4.6,
        reviews: 650,
        desc: "Ultimate pre-workout supplement designed to enhance stamina, mental focus, and muscle endurance.",
        flavors: ["Green Apple", "Watermelon"],
        weights: [
            { label: "250 g (30 Servings)", price: 1199, oldPrice: 1699, isDefault: true }
        ]
    }
};

window.productDatabase = productDatabase;
