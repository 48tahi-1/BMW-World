
const bmwModels = [

    {
        id: "1-series",
        name: "BMW 1 Series",
        category: "Hatchback",
        family: "1 Series",
        body: "Hatchback",
        powertrain: "Petrol / Diesel (market dependent)",
        description: "A compact BMW designed for urban driving and everyday comfort."
    },

    {
        id: "2-series-gran-coupe",
        name: "BMW 2 Series Gran Coupe",
        category: "Coupe",
        family: "2 Series",
        body: "Gran Coupe",
        powertrain: "Petrol / Diesel (market dependent)",
        description: "A sporty four-door coupe-inspired BMW."
    },

    {
        id: "2-series-coupe",
        name: "BMW 2 Series Coupe",
        category: "Coupe",
        family: "2 Series",
        body: "Coupe",
        powertrain: "Petrol (market dependent)",
        description: "A compact two-door BMW focused on driving dynamics."
    },

    {
        id: "3-series",
        name: "BMW 3 Series",
        category: "Sedan",
        family: "3 Series",
        body: "Sedan",
        powertrain: "Petrol / Diesel / Plug-in Hybrid (market dependent)",
        description: "An iconic executive sports sedan."
    },

    {
        id: "4-series-coupe",
        name: "BMW 4 Series Coupe",
        category: "Coupe",
        family: "4 Series",
        body: "Coupe",
        powertrain: "Petrol / Diesel (market dependent)",
        description: "A stylish two-door coupe with a sporty character."
    },

    {
        id: "4-series-convertible",
        name: "BMW 4 Series Convertible",
        category: "Convertible",
        family: "4 Series",
        body: "Convertible",
        powertrain: "Petrol (market dependent)",
        description: "Open-top luxury with a dynamic driving experience."
    },

    {
        id: "5-series",
        name: "BMW 5 Series",
        category: "Sedan",
        family: "5 Series",
        body: "Sedan",
        powertrain: "Petrol / Diesel / Plug-in Hybrid (market dependent)",
        description: "A premium business sedan combining comfort and technology."
    },

    {
        id: "7-series",
        name: "BMW 7 Series",
        category: "Sedan",
        family: "7 Series",
        body: "Luxury Sedan",
        powertrain: "Petrol / Diesel / Plug-in Hybrid (market dependent)",
        description: "A flagship luxury sedan with advanced comfort features."
    },

    {
        id: "8-series-coupe",
        name: "BMW 8 Series Coupe",
        category: "Coupe",
        family: "8 Series",
        body: "Luxury Coupe",
        powertrain: "Petrol (market dependent)",
        description: "A grand touring coupe with a luxury-focused character."
    },

    {
        id: "8-series-convertible",
        name: "BMW 8 Series Convertible",
        category: "Convertible",
        family: "8 Series",
        body: "Convertible",
        powertrain: "Petrol (market dependent)",
        description: "A luxury open-top grand touring model."
    },

    {
        id: "x1",
        name: "BMW X1",
        category: "SUV",
        family: "X Series",
        body: "Compact SAV",
        powertrain: "Petrol / Diesel / Electric (market dependent)",
        description: "A compact Sports Activity Vehicle for everyday journeys."
    },

    {
        id: "x2",
        name: "BMW X2",
        category: "SUV",
        family: "X Series",
        body: "Sports Activity Coupe",
        powertrain: "Petrol / Diesel / Electric (market dependent)",
        description: "A compact SUV with a coupe-inspired design."
    },

    {
        id: "x3",
        name: "BMW X3",
        category: "SUV",
        family: "X Series",
        body: "Mid-size SAV",
        powertrain: "Petrol / Diesel / Plug-in Hybrid (market dependent)",
        description: "A versatile premium SUV for daily use and travel."
    },

    {
        id: "x4",
        name: "BMW X4",
        category: "SUV",
        family: "X Series",
        body: "Sports Activity Coupe",
        powertrain: "Petrol / Diesel (market dependent)",
        description: "A sporty SUV with a sloping coupe roofline."
    },

    {
        id: "x5",
        name: "BMW X5",
        category: "SUV",
        family: "X Series",
        body: "Luxury SAV",
        powertrain: "Petrol / Diesel / Plug-in Hybrid (market dependent)",
        description: "A luxury SUV combining space, performance and comfort."
    },

    {
        id: "x6",
        name: "BMW X6",
        category: "SUV",
        family: "X Series",
        body: "Sports Activity Coupe",
        powertrain: "Petrol / Diesel (market dependent)",
        description: "A bold luxury SUV with a distinctive coupe profile."
    },

    {
        id: "x7",
        name: "BMW X7",
        category: "SUV",
        family: "X Series",
        body: "Full-size Luxury SAV",
        powertrain: "Petrol / Diesel (market dependent)",
        description: "A spacious flagship SUV with three-row seating."
    },

    {
        id: "ix",
        name: "BMW iX",
        category: "Electric",
        family: "BMW i",
        body: "Electric SAV",
        powertrain: "Fully Electric",
        description: "A fully electric luxury Sports Activity Vehicle."
    },

    {
        id: "ix1",
        name: "BMW iX1",
        category: "Electric",
        family: "BMW i",
        body: "Electric Compact SAV",
        powertrain: "Fully Electric",
        description: "A compact electric BMW for modern urban mobility."
    },

    {
        id: "ix2",
        name: "BMW iX2",
        category: "Electric",
        family: "BMW i",
        body: "Electric Sports Activity Coupe",
        powertrain: "Fully Electric",
        description: "An electric SUV with a sporty coupe-inspired shape."
    },

    {
        id: "i4",
        name: "BMW i4",
        category: "Electric",
        family: "BMW i",
        body: "Electric Gran Coupe",
        powertrain: "Fully Electric",
        description: "An all-electric Gran Coupe combining performance and everyday usability."
    },

    {
        id: "i5",
        name: "BMW i5",
        category: "Electric",
        family: "BMW i",
        body: "Electric Sedan",
        powertrain: "Fully Electric",
        description: "An electric executive sedan with modern technology."
    },

    {
        id: "i7",
        name: "BMW i7",
        category: "Electric",
        family: "BMW i",
        body: "Electric Luxury Sedan",
        powertrain: "Fully Electric",
        description: "A flagship electric luxury sedan."
    },

    {
        id: "z4",
        name: "BMW Z4",
        category: "Convertible",
        family: "Z Series",
        body: "Roadster",
        powertrain: "Petrol (market dependent)",
        description: "A two-seat roadster created for open-top driving."
    },

    {
        id: "m2",
        name: "BMW M2",
        category: "M Series",
        family: "BMW M",
        body: "Performance Coupe",
        powertrain: "Petrol",
        description: "A compact high-performance BMW M coupe."
    },

    {
        id: "m3",
        name: "BMW M3",
        category: "M Series",
        family: "BMW M",
        body: "Performance Sedan",
        powertrain: "Petrol",
        description: "A high-performance sports sedan with motorsport heritage."
    },

    {
        id: "m4",
        name: "BMW M4",
        category: "M Series",
        family: "BMW M",
        body: "Performance Coupe",
        powertrain: "Petrol",
        description: "A high-performance coupe from BMW M."
    },

    {
        id: "m5",
        name: "BMW M5",
        category: "M Series",
        family: "BMW M",
        body: "Performance Sedan",
        powertrain: "Plug-in Hybrid (current generation)",
        description: "A high-performance executive sedan combining power and luxury."
    },

    {
        id: "m8",
        name: "BMW M8",
        category: "M Series",
        family: "BMW M",
        body: "Performance Coupe",
        powertrain: "Petrol",
        description: "A high-performance luxury grand touring model."
    },

    {
        id: "xm",
        name: "BMW XM",
        category: "M Series",
        family: "BMW M",
        body: "Performance SUV",
        powertrain: "Plug-in Hybrid",
        description: "A high-performance luxury SUV from BMW M."
    },

    {
        id: "x3-m",
        name: "BMW X3 M",
        category: "M Series",
        family: "BMW M",
        body: "Performance SUV",
        powertrain: "Petrol (model and market dependent)",
        description: "A performance-focused version of the BMW X3."
    },

    {
        id: "x5-m",
        name: "BMW X5 M",
        category: "M Series",
        family: "BMW M",
        body: "Performance SUV",
        powertrain: "Petrol",
        description: "A high-performance luxury SUV."
    },

    {
        id: "x6-m",
        name: "BMW X6 M",
        category: "M Series",
        family: "BMW M",
        body: "Performance SUV Coupe",
        powertrain: "Petrol",
        description: "A performance SUV with a distinctive coupe design."
    }

];
