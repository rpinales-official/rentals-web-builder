import { Box, Grid, Typography } from '@mui/material';
import FeaturedPropertiesCarousel from '../sections/FeaturedPropertiesCarousel';
import AmenitiesSection from '../sections/AmenitiesSection';
import GalleryImageCard from '../components/GalleryImageCard';
import { properties } from '../mock/mockData';

export default function Home() {

	const p = properties[1 - 1];

	return (
		<>
			<Section name="Logo" height={200} />
			<FeaturedPropertiesCarousel title="Featured Properties" />
			{/* @TODO: pass propertyId dynamically for dynamic content on card press */}
			<AmenitiesSection propertyId={1} />

			<Box sx={{ mb: 4 }}>
				<Typography variant="h6" sx={{ mb: 1.5 }}>Photo Gallery</Typography>
				<Grid container spacing={2}>
					{p.gallery.map(cat => (
						<Grid key={cat.key} item xs={6} sm={3}>
							<GalleryImageCard image={cat.cover} label={cat.label} imagesInCategory={cat.images} />
						</Grid>
					))}
				</Grid>
			</Box>

			<Section name="Reviews" height={250} />
			<Section id={"contact"} name="Contact Form" height={200} />
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