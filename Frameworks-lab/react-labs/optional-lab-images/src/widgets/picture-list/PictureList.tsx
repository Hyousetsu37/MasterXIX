import type { PictureInfo } from '@entities/picture/model/type';
import { PictureCard } from '@entities/picture/ui/PictureCard';
import { Box } from '@mui/material';

interface PictureListProps {
	pictureList: PictureInfo[];
	onTogglePicture: (id: string) => void;
	selectedPictures: string[];
}

export const PictureList = ({
	pictureList,
	onTogglePicture,
	selectedPictures,
}: PictureListProps) => {
	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, 260px)',
				gap: 3,
				justifyContent: 'flex-start',
			}}
		>
			{pictureList.map((item) => (
				<PictureCard
					key={item.id}
					id={item.id}
					picUrl={item.picUrl}
					title={item.title}
					isSelected={selectedPictures.includes(item.id)}
					onToggle={onTogglePicture}
				/>
			))}
		</Box>
	);
};
