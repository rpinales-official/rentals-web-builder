import { Box, Typography } from '@mui/material';

export default function Home() {
	return (
		<>
			<Section name="Logo" height={200} />
			<Section name="Hero Section" height={300} />
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