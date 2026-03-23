import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Checkbox,
	FormControlLabel,
	Typography,
} from '@mui/material';
import type { PictureInfo } from '../model/type';

interface PictureCardProps extends PictureInfo {
	isSelected: boolean;
	onToggle: (id: string) => void;
}

export const PictureCard = ({ id, title, picUrl, isSelected, onToggle }: PictureCardProps) => {
	return (
		<Card
			sx={{
				transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
				'&:hover': {
					transform: 'translateY(-4px)',
					boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
				},
				border: '2px solid',
				borderColor: isSelected ? 'primary.main' : 'transparent',
			}}
		>
			<CardMedia
				component="img"
				height="200"
				image={picUrl}
				alt={title}
				sx={{ objectFit: 'cover' }}
			/>
			<CardContent>
				<Typography variant="h6" component="div" gutterBottom>
					{title}
				</Typography>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<FormControlLabel
						control={
							<Checkbox checked={isSelected} onChange={() => onToggle(id)} color="primary" />
						}
						label="Buy"
					/>
				</Box>
			</CardContent>
		</Card>
	);
};
