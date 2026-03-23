import { useCartModel } from '@entities/cart/model/cartContext';
import type { PictureInfo } from '@entities/picture/model/type';
import { PictureCard } from '@entities/picture/ui/PictureCard';
import { ToggleCartButton } from '@features/toggle-cart-item/ui/ToggleCartButton';
import { Box } from '@mui/material';

interface PictureListProps {
	pictureList: PictureInfo[];
}

export const PictureList = ({ pictureList }: PictureListProps) => {
	const { selectedIds } = useCartModel();
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
					isSelected={selectedIds.includes(item.id)}
					actionSlot={<ToggleCartButton pictureId={item.id} />}
				/>
			))}
		</Box>
	);
};
