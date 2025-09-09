import { Box, Typography } from '@mui/material';
import FeaturedPropertyCard from '../components/FeaturedPropertyCard';
import { properties } from '../mock/mockData';

export default function Home() {
	const featured = properties[0];

	return (
		<>
			<Section name="Logo" height={200} />
			<Box sx={{ mb: 4 }}>
				<Typography variant="h5" sx={{ mb: 2 }}>
					Featured Property
				</Typography>
				<FeaturedPropertyCard property={featured} />
			</Box>

			<Section name="Highlights" height={200} />
			<Section name="Gallery" height={250} />
			<Section name="Reviews" height={250} />
			<Section id={"contact"} name="Contact Form" height={200} />
		</>
	);
}

function Section({ name, height, id }: { name: string; height: number; id?: string; }) {
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
			<Typography variant="h6">{name}</Typography>
		</Box>
	);
}