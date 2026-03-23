import type { PictureInfo } from '@entities/picture/model/type';
import {
	Avatar,
	IconButton,
	ListItem,
	ListItemAvatar,
	ListItemText,
	SvgIcon,
	type SvgIconProps,
} from '@mui/material';

interface CartRowProps {
	item: PictureInfo;
	onDelete: (id: string) => void;
}

export const DeleteOutlineIcon = (props: SvgIconProps) => {
	return (
		<SvgIcon {...props} viewBox="0 0 24 24">
			<path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
		</SvgIcon>
	);
};

export const CartRow = ({ item, onDelete }: CartRowProps) => {
	return (
		<ListItem
			disableGutters
			sx={{
				mb: 2,
				'&:hover .MuiIconButton-root': {
					color: 'error.main',
				},
			}}
		>
			<ListItemAvatar>
				<Avatar
					src={item.picUrl}
					alt={item.title}
					variant="rounded"
					sx={{ width: 48, height: 48, mr: 2 }}
				/>
			</ListItemAvatar>
			<ListItemText
				primary={item.title}
				slotProps={{
					primary: {
						variant: 'subtitle1',
						fontWeight: 500,
					},
				}}
			/>
			<IconButton
				aria-label="delete"
				onClick={() => onDelete(item.id)}
				sx={{ color: 'text.secondary', transition: 'color 0.2s' }}
			>
				<DeleteOutlineIcon />
			</IconButton>
		</ListItem>
	);
};
