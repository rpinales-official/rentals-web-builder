import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FeaturedPropertiesCarousel from '../sections/FeaturedPropertiesCarousel';
import AmenitiesSection from '../sections/AmenitiesSection';
import GalleryImageCard from '../components/GalleryImageCard';
import { properties, type Property } from '../mock/mockData';

// local helper
function shuffleArray<T>(arr: T[]): T[] {
	const copy = [...arr];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}

export default function Home() {
	const randomize = true; // toggle if you want
	// compute once on mount
	const orderedItems = React.useMemo<Property[]>(
		() => (randomize ? shuffleArray(properties) : properties),
		[] // empty deps => only once
	);

	const [selectedId, setSelectedId] = React.useState<number>(
		orderedItems[0]?.id ?? 1
	);
	const selected = React.useMemo(
		() => orderedItems.find((p) => p.id === selectedId),
		[orderedItems, selectedId]
	);

	return (
		<>
			{/* <Section name="Logo" height={200} /> */}

			<FeaturedPropertiesCarousel
				title="Featured Properties"
				items={orderedItems}                 // <-- pass the order we're using
				selectedId={selectedId}
				onSelect={(p) => setSelectedId(p.id)}
			/>

			<AmenitiesSection title="Property Amenities" propertyId={selectedId} />

			{selected && (
				<Box sx={{ mb: 4 }}>
					<Typography variant="h6" sx={{ mb: 1.5 }}>
						Photo Gallery
					</Typography>
					<Grid container spacing={2}>
						{selected.gallery.map((cat) => (
							<Grid key={cat.key} item xs={6} sm={3}>
								<GalleryImageCard
									image={cat.cover}
									label={cat.label}
									imagesInCategory={cat.images}
								/>
							</Grid>
						))}
					</Grid>
				</Box>
			)}

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