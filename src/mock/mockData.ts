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

export const cld = (url: string, transform = 'f_auto,q_auto,w_1400') =>
    url.replace('/upload/', `/upload/${transform}/`);

// Optional: handy fallback placeholder (1600×900 gray/room)
export const fallbackImg = u("photo-1524758631624-e2822e304c36", 1400);

// ---------- Data ----------
export const properties: Property[] = [
    // 1) City Oasis
    {
        id: 1,
        name: "City Oasis",
        tagline: "Luminous House near Colonial Zone- TEMP",
        description: "Luminous House near Colonial Zone- TEMP",
        amenities: [
            { icon: "Pool", label: "Private Pool" },
            { icon: "Wifi", label: "WiFi" },
            { icon: "People", label: "Sleeps 6" },
            { icon: "Bathroom", label: "3 Bathrooms" },
            { icon: "Kitchen", label: "Full Kitchen" },
            { icon: "Parking", label: "Parking" },
            { icon: "AcUnit", label: "Air Conditioning" },
            { icon: "Tv", label: "Smart TV" },
            { icon: "Washer", label: "Washer & Dryer" },
            { icon: "SmokeFree", label: "Non-Smoking" },
            { icon: "Lock", label: "Self Check-in Optional" },
        ],
        mainImage: {
            src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1757961958/caona-homes/city-oasis/main/0cb20736-dfcc-400c-9215-3901eeda25ad.jpg.jpg"),
            alt: "City Oasis main image",
        },
        gallery: [
            {
                key: "kitchen",
                label: "kitchen",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046746/caona-homes/city-oasis/kitchen/6009a17b-543e-49f5-8397-1b3a488da881.jpg.jpg"), alt: "Kitchen cover" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046750/caona-homes/city-oasis/kitchen/18a20648-30a5-4ed9-9585-35d8d41c9917.jpg.jpg"), alt: "Kitchen" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046749/caona-homes/city-oasis/kitchen/abb346c2-e4a2-4daf-83a2-41a557847c20.jpg.jpg"), alt: "Kitchen" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046747/caona-homes/city-oasis/kitchen/8a084afe-69d1-4bd5-b420-b38e0d7c5814.jpg.jpg"), alt: "Kitchen" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046746/caona-homes/city-oasis/kitchen/6009a17b-543e-49f5-8397-1b3a488da881.jpg.jpg"), alt: "Kitchen" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046746/caona-homes/city-oasis/kitchen/3996779d-79fb-474c-a10c-cbdd7182fd4f.jpg.jpg"), alt: "Kitchen" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046742/caona-homes/city-oasis/kitchen/7107c3aa-829a-4e79-a050-e40534cffe81.jpg.jpg"), alt: "Kitchen" },
                ],
            },
            {
                key: "Bathrooms",
                label: "Bathrooms",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046285/caona-homes/city-oasis/bathrooms/3b8ec645-3cb1-4cef-b2c4-15ef2530b175.jpg.jpg"), alt: "Bathrooms cover" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046285/caona-homes/city-oasis/bathrooms/3b8ec645-3cb1-4cef-b2c4-15ef2530b175.jpg.jpg"), alt: "Bathroom 1" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046286/caona-homes/city-oasis/bathrooms/6532d84a-1137-497a-a57f-1d0ef4f1139e.jpg.jpg"), alt: "Bathroom 2" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046285/caona-homes/city-oasis/bathrooms/a3044691-433e-49a0-aefa-afa8cff1bc55.jpg.jpg"), alt: "Bathroom 3" },
                ],
            },
            {
                key: "bedroom",
                label: "Main Bedroom",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046349/caona-homes/city-oasis/bedroom-1/2546ba43-64da-4788-a90f-7d10a70d7f0c.jpg.jpg"), alt: "Bedroom cover" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046349/caona-homes/city-oasis/bedroom-1/2546ba43-64da-4788-a90f-7d10a70d7f0c.jpg.jpg"), alt: "Main bedroom" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046350/caona-homes/city-oasis/bedroom-1/fc34e4e2-d44f-4752-af87-f9082a58d718.jpg.jpg"), alt: "Main bedroom" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046350/caona-homes/city-oasis/bedroom-1/8b8cf6ae-84b8-48dc-a56f-8be839f953dd.jpg.jpg"), alt: "Main bedroom" },
                ],
            },
            {
                key: "bedroom-2",
                label: "Bedroom 2",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046368/caona-homes/city-oasis/bedroom-2/3f148ae4-8dc9-48dd-8914-4faefc9f8a7f.jpg.jpg"), alt: "Bedroom 2" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046368/caona-homes/city-oasis/bedroom-2/3f148ae4-8dc9-48dd-8914-4faefc9f8a7f.jpg.jpg"), alt: "Bedroom 2" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046367/caona-homes/city-oasis/bedroom-2/d6ead712-6321-4b32-a1d1-bc96138d4dd3.jpg.jpg"), alt: "Bedroom 2" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046367/caona-homes/city-oasis/bedroom-2/b4ddc155-7ead-497a-a745-331b2adb171c.jpg.jpg"), alt: "Bedroom 2" },

                ],
            },
            {
                key: "bedroom-3",
                label: "Bedroom 3",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046623/caona-homes/city-oasis/bedroom-3/51e1f170-5d9c-4b55-8e8b-3c1b6c00eb02.jpg.jpg"), alt: "Bedroom 3" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046623/caona-homes/city-oasis/bedroom-3/51e1f170-5d9c-4b55-8e8b-3c1b6c00eb02.jpg.jpg"), alt: "Bedroom 3" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046625/caona-homes/city-oasis/bedroom-3/039ad5e2-6616-4874-8af7-ef29721f9877.jpg.jpg"), alt: "Bedroom 3" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046624/caona-homes/city-oasis/bedroom-3/0fb0a319-1c60-40ae-8d28-ca077836daa2.jpg.jpg"), alt: "Bedroom 3" },
                ],
            },
            {
                key: "courtyard",
                label: "Courtyard",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046651/caona-homes/city-oasis/courtyard/3d856baf-4c4f-4935-bbff-2e9e3aef252c.jpg.jpg"), alt: "Courtyard" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046651/caona-homes/city-oasis/courtyard/3d856baf-4c4f-4935-bbff-2e9e3aef252c.jpg.jpg"), alt: "Courtyard" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046651/caona-homes/city-oasis/courtyard/b5c7d287-d4cf-4be4-bddf-d5f13f697d25.jpg.jpg"), alt: "Courtyard" },
                ],
            },
            {
                key: "dining",
                label: "Dining",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046687/caona-homes/city-oasis/dining/5f0d16e9-1c9b-4fb9-b185-3bc62045681a.jpg.jpg"), alt: "Dining" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046687/caona-homes/city-oasis/dining/5f0d16e9-1c9b-4fb9-b185-3bc62045681a.jpg.jpg"), alt: "Dining" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046688/caona-homes/city-oasis/dining/ae5d0786-93e3-4c37-89cb-d80816315fcb.jpg.jpg"), alt: "Dining" },
                ],
            },
            {
                key: "front yard",
                label: "Front Yard",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046715/caona-homes/city-oasis/front-yard/54c30db7-bda8-4907-991a-660985ab499c.jpg.jpg"), alt: "Front Yard" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046715/caona-homes/city-oasis/front-yard/54c30db7-bda8-4907-991a-660985ab499c.jpg.jpg"), alt: "Front Yard" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046717/caona-homes/city-oasis/front-yard/0ce36fe8-923d-4bfd-8a3b-2a011fea0184.jpg.jpg"), alt: "Front Yard" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046716/caona-homes/city-oasis/front-yard/c2a5991b-c847-46af-89dd-45bb66a05ca8.jpg.jpg"), alt: "Front Yard" },

                ],
            },
            {
                key: "kitchenette",
                label: "Kitchenette",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046776/caona-homes/city-oasis/kitchenette/fa468d14-096a-4a4a-96ef-b2918b06c704.jpg.jpg"), alt: "Kitchenette" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046776/caona-homes/city-oasis/kitchenette/fa468d14-096a-4a4a-96ef-b2918b06c704.jpg.jpg"), alt: "Kitchenette" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046777/caona-homes/city-oasis/kitchenette/dffd7918-ca14-4f0f-bba0-c792c13096f9.jpg.jpg"), alt: "Kitchenette" },
                ],
            },
            {
                key: "laundry",
                label: "Laundry",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046799/caona-homes/city-oasis/laundry/4e398fee-787b-4d81-9c43-ee82d0e49223.jpg.jpg"), alt: "Laundry" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046799/caona-homes/city-oasis/laundry/4e398fee-787b-4d81-9c43-ee82d0e49223.jpg.jpg"), alt: "Laundry" },
                ],
            },
            {
                key: "living room",
                label: "Living Room",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046822/caona-homes/city-oasis/living-room/5451fb9e-ae28-470b-bd6e-7a884f8c5acb.jpg.jpg"), alt: "Living Room" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046822/caona-homes/city-oasis/living-room/5451fb9e-ae28-470b-bd6e-7a884f8c5acb.jpg.jpg"), alt: "Living Room" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046823/caona-homes/city-oasis/living-room/6a150a71-c4e3-4c3f-98c4-0ecda7f10f88.jpg.jpg"), alt: "Living Room" },
                ],
            },
            {
                key: "pool",
                label: "Pool",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046839/caona-homes/city-oasis/pool/0cb20736-dfcc-400c-9215-3901eeda25ad.jpg.jpg"), alt: "Pool" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046839/caona-homes/city-oasis/pool/0cb20736-dfcc-400c-9215-3901eeda25ad.jpg.jpg"), alt: "Pool" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758046840/caona-homes/city-oasis/pool/746ab98c-13dc-4cbe-9846-57eef6024a17.jpg.jpg"), alt: "Pool" },
                ],
            },
        ],
        reviews: [
            {
                id: 1,
                name: "Andre",
                date: "2025-08-28",
                rating: 5,
                comment:
                    "Great value. The indoor outdoor feel of the place is what I loved most. The location is amazing with lots of things in walking distance and most importantly I felt safe there. I would definitely book again. The host was also super helpful and very responsive.",
            },
            {
                id: 2,
                name: "Annabell",
                date: "2025-01-22",
                rating: 5,
                comment:
                    "My husband and I stayed in the house with our 11 months old daughter. It was great, we had everything we needed. Communication with the host was good and the location is great. We could walk with our stroller through the old town. The accommodation had a babybed, but we ended up renting a babychair with babyquip.",
            },
            {
                id: 3,
                name: "Danielle",
                date: "2025-03-10",
                rating: 5,
                comment:
                    "Beautiful and huge house, fully equipped. Also fresh due to the high ceilings. Easy checkin and checkout. My family loved to hang out in the patio having coffee. The hosts were super responsive and attentive. Recommended!",
            },
            {
                id: 4,
                name: "Jonathan",
                date: "2024-09-10",
                rating: 5,
                comment:
                    "Place was great, lots of open space and clean. Great location about 10-15 min walk from Zona Colonial. Hosts were super nice and attentive, messaging me at multiple points of my stay asking if I needed anything or any recommendations. Would definitely recommend!",
            },
        ],
        bookingUrl: "https://airbnb.com/h/oasisuruguay",
    },

    // 2) Palmeraie 901
    {
        id: 2,
        name: "Beachfront Vacation Paradise",
        tagline: "Espectacular apartamento con vista al mar",
        description:
            "Espectacular apartamento con vista al mar",
        amenities: [
            { icon: "Wifi", label: "Free WiFi" },
            { icon: "People", label: "Sleeps 6" },
            { icon: "Bathroom", label: "2 Bathrooms" },
            { icon: "Kitchen", label: "Full Kitchen" },
            { icon: "Parking", label: "Parking" },
            { icon: "AcUnit", label: "Air Conditioning" },
            { icon: "Tv", label: "Smart TV" },
            { icon: "SmokeFree", label: "Non-Smoking" },
            { icon: "Lock", label: "Self Check-in Optional" },
        ],
        mainImage: {
            src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049135/caona-homes/palmeraie-901/main/8fe90873-ab09-4475-b2cb-6f78ac41ada0.jpeg.jpg"),
            alt: "Beachfront Vacation Paradise main image",
        },
        gallery: [
            {
                key: "Living Room",
                label: "Living Room",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049110/caona-homes/palmeraie-901/living-room/690d0cf9-81f6-4daa-997b-5a1df1c76fab.jpeg.jpg"), alt: "Living Room" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049110/caona-homes/palmeraie-901/living-room/690d0cf9-81f6-4daa-997b-5a1df1c76fab.jpeg.jpg"), alt: "Living Room" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049111/caona-homes/palmeraie-901/living-room/d17ef564-e5a4-4d50-ba11-b1bb040a5c74.jpeg.jpg"), alt: "Living Room" }

                ],
            },
            {
                key: "Bathrooms",
                label: "Bathrooms",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049009/caona-homes/palmeraie-901/bathroom-1/de16dd1b-cda2-4556-b392-9a338add1412.jpeg.jpg"), alt: "Bathrooms" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049009/caona-homes/palmeraie-901/bathroom-1/de16dd1b-cda2-4556-b392-9a338add1412.jpeg.jpg"), alt: "Bathroom" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049010/caona-homes/palmeraie-901/bathroom-1/7bc93612-6f8e-4e2c-841b-31db277465d3.jpeg.jpg"), alt: "Bathroom" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049007/caona-homes/palmeraie-901/bathroom-1/59c16b8d-d185-4d2a-9b81-58a07cb0047d.jpeg.jpg"), alt: "Bathroom" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049025/caona-homes/palmeraie-901/bathroom-2/252d953c-3ae0-493a-96e0-22d6dd42a010.jpeg.jpg"), alt: "Bathroom" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049024/caona-homes/palmeraie-901/bathroom-2/8a3b7f6f-39af-4698-96df-bcfbc7f16df5.jpeg.jpg"), alt: "Bathroom" },

                ],
            },
            {
                key: "bedroom",
                label: "Main Bedroom",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049047/caona-homes/palmeraie-901/bedroom-1/412fef77-c745-42c5-9a81-92f7ad62ab61.jpeg.jpg"), alt: "Main Bedroom" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049047/caona-homes/palmeraie-901/bedroom-1/412fef77-c745-42c5-9a81-92f7ad62ab61.jpeg.jpg"), alt: "Main Bedroom" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049051/caona-homes/palmeraie-901/bedroom-1/68b500ee-08bd-4950-822c-dc73e3360395.jpeg.jpg"), alt: "Main Bedroom" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049050/caona-homes/palmeraie-901/bedroom-1/898e9bff-7625-4ef1-a6f5-547377110c10.jpeg.jpg"), alt: "Main Bedroom" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049049/caona-homes/palmeraie-901/bedroom-1/ed1c5eff-906f-46bd-9ea1-4eda569e54ea.jpeg.jpg"), alt: "Main Bedroom" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049048/caona-homes/palmeraie-901/bedroom-1/e1cb6e29-6b60-458d-bf7f-87543881efd5.jpeg.jpg"), alt: "Main Bedroom" },
                ],
            },
            {
                key: "bedroom-2",
                label: "Bedroom 2",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049068/caona-homes/palmeraie-901/bedroom-2/e9b54ca3-af4e-431d-9690-81329d5569af.jpeg.jpg"), alt: "Bedroom 2" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049068/caona-homes/palmeraie-901/bedroom-2/e9b54ca3-af4e-431d-9690-81329d5569af.jpeg.jpg"), alt: "Bedroom 2" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049070/caona-homes/palmeraie-901/bedroom-2/bbb6ec61-a3f8-4ccb-9c56-509d174e0daf.jpeg.jpg"), alt: "Bedroom 2" }
                ],
            },
            {
                key: "kitchen",
                label: "Kitchen",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049089/caona-homes/palmeraie-901/kitchen/c8646243-ab0d-4184-af86-d8219d1e12b4.jpeg.jpg"), alt: "Kitchen" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049089/caona-homes/palmeraie-901/kitchen/c8646243-ab0d-4184-af86-d8219d1e12b4.jpeg.jpg"), alt: "Kitchen" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049090/caona-homes/palmeraie-901/kitchen/c82c41cc-b76a-4140-afaa-28823c3c98a0.jpeg.jpg"), alt: "Kitchen" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049090/caona-homes/palmeraie-901/kitchen/fa4e72a7-300b-44d5-8475-b8630e44b6e7.jpeg.jpg"), alt: "Kitchen" }
                ],
            },
            {
                key: "outdoors",
                label: "Outdoors",
                cover: { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049161/caona-homes/palmeraie-901/outdoors/65347250-976b-4b80-b9ee-9fc4412815e0.jpeg.jpg"), alt: "Outdoors" },
                images: [
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049161/caona-homes/palmeraie-901/outdoors/65347250-976b-4b80-b9ee-9fc4412815e0.jpeg.jpg"), alt: "Outdoors" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049161/caona-homes/palmeraie-901/outdoors/55508d42-5853-4444-b07f-b6ba229f484a.jpeg.jpg"), alt: "Outdoors" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049160/caona-homes/palmeraie-901/outdoors/c04117fb-3694-4206-84f1-464cfaffb64b.jpeg.jpg"), alt: "Outdoors" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049159/caona-homes/palmeraie-901/outdoors/a2eb10da-ff71-4b3c-b031-cac265236658.jpeg.jpg"), alt: "Outdoors" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049159/caona-homes/palmeraie-901/outdoors/8fe90873-ab09-4475-b2cb-6f78ac41ada0.jpeg.jpg"), alt: "Outdoors" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049158/caona-homes/palmeraie-901/outdoors/30093da1-29be-4b18-bba5-4063371bfb5f.jpeg.jpg"), alt: "Outdoors" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049157/caona-homes/palmeraie-901/outdoors/c5d3d1f9-eed2-485e-a61f-ee1bad8ebb70.jpeg.jpg"), alt: "Outdoors" },
                    { src: cld("https://res.cloudinary.com/drcecj2gx/image/upload/v1758049156/caona-homes/palmeraie-901/outdoors/d7262d26-82cd-4871-b8d3-e208ef27aeaf.jpeg.jpg"), alt: "Outdoors" }
                ],
            },
        ],
        reviews: [
            {
                id: 1,
                name: "Bettina",
                date: "2024-01-10",
                rating: 5,
                comment:
                    "We had a wonderful time at Christina's place. The location is great, beach and pool just outside, secure and private. We would love to come again. The place provides a lot of space, big living room and table to enjoy with family and friends. Thank you!",
            },
            {
                id: 2,
                name: "Hector",
                date: "2025-06-10",
                rating: 5,
                comment:
                    "Beautiful place, close to everything, with hosts that are very attentive.",
            },
            {
                id: 3,
                name: "Sylvain",
                date: "2025-03-10",
                rating: 5,
                comment:
                    "Beautiful location, would recommend to others.",
            },
            {
                id: 4,
                name: "Carlos",
                date: "2025-05-10",
                rating: 5,
                comment:
                    "A divine apartment located in front of the best beach. The hosts are a luxury. Thank you very much",
            },
        ],
        bookingUrl: "https://airbnb.com/h/palmeraie901",
    },
];

// helper
export const getPropertyById = (id: number) => properties.find((p) => p.id === id);