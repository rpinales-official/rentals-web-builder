export type Property = {
    id: number;
    name: string;
    tagline: string;
    description: string;
    highlights: { icon: string; label: string }[];
    images: { src: string; alt: string; label?: string }[];
    reviews: { id: number; name: string; date: string; rating: number; comment: string }[];
    bookingUrl: string;
};

export const properties: Property[] = [
    {
        id: 1,
        name: "Sunny Seaside Retreat",
        tagline: "Luxury beach house with stunning ocean views",
        description:
            "Nestled along the pristine coastline, this exquisite beach house offers a luxurious retreat for families and friends. With breathtaking ocean views, spacious living areas, and direct beach access, it's the perfect setting for a memorable vacation.",
        highlights: [
            { icon: "Ocean", label: "Ocean View" },
            { icon: "Wifi", label: "Free WiFi" },
            { icon: "People", label: "Sleeps 6" },
            { icon: "Pets", label: "Pet-Friendly" },
        ],
        images: [
            { src: "/images/villa1.jpg", alt: "Beachfront Villa", label: "Living Room" },
            { src: "/images/villa2.jpg", alt: "Kitchen", label: "Kitchen" },
            { src: "/images/villa3.jpg", alt: "Bedroom", label: "Bedroom" },
            { src: "/images/villa4.jpg", alt: "Patio", label: "Patio" },
        ],
        reviews: [
            {
                id: 1,
                name: "Clara Bennett",
                date: "2023-07-15",
                rating: 5,
                comment:
                    "Absolutely stunning property! The views were incredible, and the house was beautifully decorated and well-equipped. We had a fantastic time and can’t wait to return.",
            },
            {
                id: 2,
                name: "Ethan Carter",
                date: "2023-06-22",
                rating: 4,
                comment:
                    "The location was perfect, right on the beach. The house was spacious and comfortable, although a few minor things could use updating. Overall, a great experience.",
            },
            {
                id: 3,
                name: "Sophia Hayes",
                date: "2023-05-10",
                rating: 5,
                comment:
                    "Our stay was exceptional. The house exceeded our expectations, and the host was very responsive and helpful. We highly recommend this property for a relaxing beach getaway.",
            },
        ],
        bookingUrl: "https://airbnb.com/rooms/123456",
    },
    {
        id: 2,
        name: "Cozy Forest Cabin",
        tagline: "Modern escape in the woods",
        description:
            "Surrounded by pine trees, this cabin blends rustic charm with modern design. Perfect for couples or small groups seeking peace and nature.",
        highlights: [
            { icon: "Fireplace", label: "Fireplace" },
            { icon: "Wifi", label: "Free WiFi" },
            { icon: "People", label: "Sleeps 4" },
        ],
        images: [
            { src: "/images/cabin1.jpg", alt: "Cabin exterior", label: "Exterior" },
            { src: "/images/cabin2.jpg", alt: "Cozy interior", label: "Living Area" },
        ],
        reviews: [
            {
                id: 4,
                name: "Daniel Kim",
                date: "2023-04-02",
                rating: 5,
                comment: "The perfect hideaway! Clean, stylish, and peaceful. We’ll be back soon.",
            },
        ],
        bookingUrl: "https://airbnb.com/rooms/987654",
    },
];