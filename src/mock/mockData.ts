// ---------- Types ----------
export type Img = { src: string; alt: string };

export type GalleryCategory = {
    key: string;
    label: string;
    cover: Img;
    images: Img[];
};

export type Property = {
    id: number;
    name: string;
    tagline: string;
    description: string;
    amenities: { icon: string; label: string }[];
    mainImage: Img;
    gallery: GalleryCategory[];
    reviews: { id: number; name: string; date: string; rating: number; comment: string }[];
    bookingUrl: string;
};

// ---------- Helpers ----------
const u = (id: string, w = 1400) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// Optional: handy fallback placeholder (1600×900 gray/room)
export const fallbackImg = u("photo-1524758631624-e2822e304c36", 1400);

// ---------- Data ----------
export const properties: Property[] = [
    // 1) Sunny Seaside Retreat
    {
        id: 1,
        name: "Sunny Seaside Retreat",
        tagline: "Luxury beach house with stunning ocean views",
        description:
            "Nestled along the pristine coastline, this beach house offers a luxurious retreat with direct beach access, spacious living areas, and endless ocean views.",
        amenities: [
            { icon: "Ocean", label: "Ocean View" },
            { icon: "Wifi", label: "Free WiFi" },
            { icon: "People", label: "Sleeps 6" },
            { icon: "Pets", label: "Pet-Friendly" },
        ],
        mainImage: {
            src: u("photo-1505691938895-1758d7feb511"),
            alt: "Beachfront villa exterior",
        },
        gallery: [
            {
                key: "living",
                label: "Living Room",
                cover: { src: u("photo-1600566752355-35792bedcfea", 800), alt: "Living room cover" },
                images: [
                    { src: u("photo-1600566752355-35792bedcfea"), alt: "Living room 1" },
                    { src: u("photo-1616596876484-9f2f7b7a4dc1"), alt: "Living room 2" },
                ],
            },
            {
                key: "kitchen",
                label: "Kitchen",
                cover: { src: u("photo-1600585154340-be6161a56a0c", 800), alt: "Kitchen cover" },
                images: [
                    { src: u("photo-1600585154340-be6161a56a0c"), alt: "Kitchen 1" },
                    { src: u("photo-1507089947368-19c1da9775ae"), alt: "Kitchen 2" },
                ],
            },
            {
                key: "bedroom",
                label: "Bedroom",
                // swapped to a rock-solid bedroom cover ID
                cover: { src: u("photo-1524758631624-e2822e304c36", 800), alt: "Bedroom cover" },
                images: [
                    { src: u("photo-1601979031896-3ccba1f93d61"), alt: "Bedroom 1" },
                    { src: u("photo-1524758631624-e2822e304c36"), alt: "Bedroom 2" },
                ],
            },
            {
                key: "patio",
                label: "Patio",
                // swapped patio cover & images to reliable IDs
                cover: { src: u("photo-1505691723518-36a5ac3b2a59", 800), alt: "Patio cover" },
                images: [
                    { src: u("photo-1505691723518-36a5ac3b2a59"), alt: "Patio 1" },
                    { src: u("photo-1505691938895-1758d7feb511"), alt: "Patio 2 (terrace)" },
                ],
            },
        ],
        reviews: [
            {
                id: 1,
                name: "Clara Bennett",
                date: "2023-07-15",
                rating: 5,
                comment:
                    "Absolutely stunning property! Beautifully decorated and well-equipped. We can’t wait to return.",
            },
            {
                id: 2,
                name: "Ethan Carter",
                date: "2023-06-22",
                rating: 4,
                comment:
                    "Perfect location and very comfortable. A few minor updates would make it flawless.",
            },
            {
                id: 3,
                name: "Sophia Hayes",
                date: "2023-05-10",
                rating: 5,
                comment:
                    "Exceeded expectations. Host was responsive and helpful. Highly recommended!",
            },
        ],
        bookingUrl: "https://airbnb.com/rooms/123456",
    },

    // 2) Cozy Forest Cabin
    {
        id: 2,
        name: "Cozy Forest Cabin",
        tagline: "Modern escape in the woods",
        description:
            "Surrounded by pines, this cabin blends rustic charm with modern design—ideal for couples or small groups seeking tranquility.",
        amenities: [
            { icon: "Fireplace", label: "Fireplace" },
            { icon: "Wifi", label: "Free WiFi" },
            { icon: "People", label: "Sleeps 4" },
        ],
        mainImage: {
            src: u("photo-1501785888041-af3ef285b470"),
            alt: "Cabin exterior in pine forest",
        },
        gallery: [
            {
                key: "exterior",
                label: "Exterior",
                cover: { src: u("photo-1501785888041-af3ef285b470", 800), alt: "Cabin exterior cover" },
                images: [{ src: u("photo-1501785888041-af3ef285b470"), alt: "Cabin exterior 1" }],
            },
            {
                key: "living",
                label: "Living Area",
                cover: { src: u("photo-1600607687939-ce8a6c25118c", 800), alt: "Cozy living cover" },
                images: [{ src: u("photo-1600607687939-ce8a6c25118c"), alt: "Cozy living 1" }],
            },
            {
                key: "bedroom",
                label: "Bedroom",
                cover: { src: u("photo-1554995207-c18c203602cb", 800), alt: "Cabin bedroom cover" },
                images: [
                    { src: u("photo-1595526114035-0d45ed16cfbf"), alt: "Bedroom 1" },
                    { src: u("photo-1554995207-c18c203602cb"), alt: "Bedroom 2" },
                ],
            },
        ],
        reviews: [
            { id: 4, name: "Daniel Kim", date: "2023-04-02", rating: 5, comment: "The perfect hideaway!" },
        ],
        bookingUrl: "https://airbnb.com/rooms/987654",
    },

    // 3) Urban Loft
    {
        id: 3,
        name: "Urban Loft",
        tagline: "Stylish loft in the heart of the city",
        description:
            "Open-concept living with high ceilings and quick access to downtown attractions—ideal for city explorers.",
        amenities: [
            { icon: "City", label: "City View" },
            { icon: "Wifi", label: "High-Speed WiFi" },
            { icon: "Work", label: "Workspace" },
        ],
        mainImage: {
            src: u("photo-1502672260266-1c1ef2d93688"),
            alt: "Modern loft living area",
        },
        gallery: [
            {
                key: "living",
                label: "Living Space",
                cover: { src: u("photo-1502672260266-1c1ef2d93688", 800), alt: "Loft living cover" },
                images: [
                    { src: u("photo-1502672260266-1c1ef2d93688"), alt: "Loft living 1" },
                    { src: u("photo-1519710164239-da123dc03ef4"), alt: "Loft living 2" },
                ],
            },
            {
                key: "bedroom",
                label: "Bedroom",
                cover: { src: u("photo-1522708323590-d24dbb6b0267", 800), alt: "Loft bedroom cover" },
                images: [
                    { src: u("photo-1522708323590-d24dbb6b0267"), alt: "Bedroom 1" },
                    { src: u("photo-1519710884001-0b7ba4fd5ef2"), alt: "Bedroom 2" },
                ],
            },
            {
                key: "kitchen",
                label: "Kitchen",
                cover: { src: u("photo-1493809842364-78817add7ffb", 800), alt: "Loft kitchen cover" },
                images: [
                    { src: u("photo-1493809842364-78817add7ffb"), alt: "Kitchen 1" },
                    { src: u("photo-1519710164239-da123dc03ef4"), alt: "Kitchen 2" },
                ],
            },
        ],
        reviews: [
            {
                id: 5,
                name: "Maria Lopez",
                date: "2023-03-18",
                rating: 4,
                comment: "Amazing location and style! A bit noisy at night, but overall great.",
            },
        ],
        bookingUrl: "https://airbnb.com/rooms/192837",
    },

    // 4) Mountain Chalet (all images replaced with battle-tested IDs)
    {
        id: 4,
        name: "Mountain Chalet",
        tagline: "Rustic luxury with mountain views",
        description:
            "Perched on a hillside, this chalet pairs cozy interiors with breathtaking alpine vistas—perfect for skiers and hikers.",
        amenities: [
            { icon: "Snow", label: "Ski Access" },
            { icon: "Fireplace", label: "Fireplace" },
            { icon: "HotTub", label: "Hot Tub" },
        ],
        // NEW: main image uses a very reliable mountain/chalet scene
        mainImage: {
            src: u("photo-1441974231531-c6227db76b6e"),
            alt: "Mountain landscape with chalet nearby",
        },
        gallery: [
            {
                key: "exterior",
                label: "Exterior",
                cover: { src: u("photo-1441974231531-c6227db76b6e", 800), alt: "Chalet exterior cover" },
                images: [
                    { src: u("photo-1441974231531-c6227db76b6e"), alt: "Mountain view 1" },
                    { src: u("photo-1482192596544-9eb780fc7f66"), alt: "Chalet in snow 2" },
                ],
            },
            {
                key: "living",
                label: "Living Room",
                cover: { src: u("photo-1601918774946-25832a4e7f4b", 800), alt: "Chalet living cover" },
                images: [
                    { src: u("photo-1601918774946-25832a4e7f4b"), alt: "Living room 1" },
                    { src: u("photo-1505691938895-1758d7feb511"), alt: "Living room 2" },
                ],
            },
            {
                key: "hot-tub",
                label: "Hot Tub",
                cover: { src: u("photo-1560185008-b033106af5e4", 800), alt: "Hot tub cover" },
                images: [
                    { src: u("photo-1560185008-b033106af5e4"), alt: "Hot tub 1" },
                    { src: u("photo-1560185127-6a8c1e3a4d3b"), alt: "Hot tub 2" },
                ],
            },
        ],
        reviews: [
            {
                id: 6,
                name: "James Wu",
                date: "2023-02-07",
                rating: 5,
                comment:
                    "Fantastic chalet! The hot tub after skiing was perfect. Beautiful views and very comfy.",
            },
        ],
        bookingUrl: "https://airbnb.com/rooms/564738",
    },
];

// helper
export const getPropertyById = (id: number) => properties.find((p) => p.id === id);