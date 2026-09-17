const listingData = {
  id: "listing-1",
  title: "Serene Luxury Villa with Private Pool & Ocean Views",
  subtitle: "Entire villa in Candolim, India",
  rating: {
    overall: 4.95,
    reviews: 128,
    categories: {
      cleanliness: 4.9,
      accuracy: 5.0,
      communication: 4.9,
      location: 4.8,
      checkIn: 5.0,
      value: 4.7
    }
  },
  host: {
    name: "Rohan",
    isSuperhost: true,
    joinedDate: "2019-04",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
    responseRate: 100,
    responseTime: "within an hour"
  },
  details: {
    guests: 8,
    bedrooms: 4,
    beds: 5,
    baths: 4.5
  },
  highlights: [
    { icon: "workspace", title: "Dedicated workspace", subtitle: "A common area with wifi that's well-suited for working." },
    { icon: "pool", title: "Dive right in", subtitle: "This is one of the few places in the area with a pool." },
    { icon: "superhost", title: "Rohan is a Superhost", subtitle: "Superhosts are experienced, highly rated hosts." }
  ],
  description: "Escape to this breathtaking luxury villa located in the heart of Candolim. With panoramic ocean views, a private infinity pool, and modern amenities, this property offers the perfect getaway for families and groups. \n\nThe space\nDesigned with elegance and comfort in mind, the villa features spacious living areas, a fully equipped gourmet kitchen, and beautifully appointed bedrooms with en-suite bathrooms. \n\nGuest access\nGuests will have exclusive access to the entire villa, including the private pool, gardens, and secure parking.",
  photos: [
    { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop", caption: "Living Room", room: "Living room 1" },
    { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop", caption: "Living Area", room: "Living room 2" },
    { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop", caption: "Bedroom", room: "Bedroom" },
    { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop", caption: "Bathroom", room: "Full bathroom" },
    { url: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=800&h=600&fit=crop", caption: "Jacuzzi", room: "Full bathroom" },
    { url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop", caption: "Exterior", room: "Exterior" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop", caption: "Pool Area", room: "Pool" },
    { url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop", caption: "Kitchen", room: "Full kitchen" },
    { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop", caption: "Dining", room: "Full kitchen" },
    { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop", caption: "Balcony", room: "Exterior" },
    { url: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop", caption: "Night View", room: "Exterior" },
    { url: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop", caption: "Bedroom Detail", room: "Bedroom" },
    { url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop", caption: "Living Detail", room: "Living room 1" },
    { url: "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=600&fit=crop", caption: "Bathroom Detail", room: "Full bathroom" },
    { url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop", caption: "Front View", room: "Exterior" }
  ],
  amenities: [
    { category: "Scenic views", items: ["Ocean view", "Pool view"] },
    { category: "Bathroom", items: ["Bathtub", "Hair dryer", "Cleaning products", "Hot water"] },
    { category: "Bedroom and laundry", items: ["Washer", "Essentials", "Hangers", "Bed linens", "Extra pillows and blankets", "Iron"] },
    { category: "Entertainment", items: ["TV with standard cable", "Sound system"] },
    { category: "Heating and cooling", items: ["Air conditioning", "Ceiling fan"] },
    { category: "Internet and office", items: ["Wifi", "Dedicated workspace"] },
    { category: "Kitchen and dining", items: ["Kitchen", "Refrigerator", "Microwave", "Cooking basics", "Dishes and silverware", "Dishwasher"] },
    { category: "Location features", items: ["Private entrance"] },
    { category: "Outdoor", items: ["Private patio or balcony", "Private backyard", "Outdoor furniture", "BBQ grill"] },
    { category: "Parking and facilities", items: ["Free parking on premises", "Private pool"] }
  ],
  reviews: [
    { id: 1, author: "Sarah", date: "October 2023", text: "Absolutely stunning place! The views were incredible and the pool was perfect for our family.", rating: 5, authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
    { id: 2, author: "Michael", date: "September 2023", text: "Great location and beautiful property. Rohan was very responsive and helpful throughout our stay.", rating: 5, authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
    { id: 3, author: "Priya", date: "August 2023", text: "The villa is just as pictured. Very clean, spacious, and the kitchen is well-equipped.", rating: 4, authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
    { id: 4, author: "James", date: "July 2023", text: "A wonderful retreat. The outdoor space is fantastic for evening BBQs.", rating: 5, authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    { id: 5, author: "Anita", date: "June 2023", text: "We had a lovely time. The location is peaceful yet close enough to attractions.", rating: 5, authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    { id: 6, author: "David", date: "May 2023", text: "Exceptional service from the host. Highly recommend this place for a relaxing vacation.", rating: 5, authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" }
  ],
  pricing: {
    nightlyRate: 3850,
    currency: "₹",
    cleaningFee: 1500,
    serviceFee: 850
  },
  location: {
    city: "Candolim",
    state: "Goa",
    country: "India",
    lat: 15.518,
    lng: 73.766
  },
  houseRules: [
    "Check-in: 3:00 PM - 10:00 PM",
    "Checkout: 11:00 AM",
    "No smoking",
    "No pets",
    "No parties or events"
  ],
  cancellationPolicy: "Free cancellation for 48 hours. Cancel before check-in for a partial refund."
};

export default listingData;
