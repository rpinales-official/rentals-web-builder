import * as React from 'react';
import { Box, Typography } from '@mui/material';
import FeaturedPropertiesCarousel from '../sections/FeaturedPropertiesCarousel';
import AmenitiesSection from '../sections/AmenitiesSection';
import GallerySection from '../sections/GallerySection';
import AboutSection from '../sections/AboutSection';
import { properties, type Property } from '../mock/mockData';

function shuffleArray<T>(arr: T[]): T[] {
	const copy = [...arr];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}

export default function Home() {
	const orderedItems = React.useMemo<Property[]>(
		() => shuffleArray(properties),
		[]
	);

	const [selectedId, setSelectedId] = React.useState<number>(orderedItems[0]?.id ?? 1);

	return (
		<>
			{/* <Section name="Logo" height={200} /> */}

			<FeaturedPropertiesCarousel
				title="Featured Properties"
				items={orderedItems}
				selectedId={selectedId}
				onSelect={(p) => setSelectedId(p.id)}
			/>

			<AmenitiesSection title="Property Amenities" propertyId={selectedId} />

			<AboutSection propertyId={selectedId} />

			<GallerySection propertyId={selectedId} />

			<Section name="Reviews" height={250} />
			<Section id="contact" name="Contact Form" height={200} />
		</>
	);
}

function Section({
	name,
	height,
	id,
	children,
}: {
	name: string;
	height: number;
	id?: string;
	children?: React.ReactNode;
}) {
	return (
		<Box
			id={id}
			sx={{
				bgcolor: '#ccc',
				mb: 4,
				p: 2,
				height,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 2,
			}}
		>
			{children ?? <Typography variant="h6">{name}</Typography>}
		</Box>
	);
}