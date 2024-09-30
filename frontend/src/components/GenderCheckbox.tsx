import { FormControlLabel, Checkbox, Box, Typography } from '@mui/material';

const GenderCheckbox = () => {
	return (
		<Box sx={{ display: 'flex', gap: 2 }}>
			<FormControlLabel
				control={
					<Checkbox
						sx={{ '&.Mui-checked': { color: '#2196F3' } }} // Customize the checkbox color
					/>
				}
				label={<Typography variant="body1">Male</Typography>}
			/>
			<FormControlLabel
				control={
					<Checkbox
						sx={{ '&.Mui-checked': { color: '#2196F3' } }} // Customize the checkbox color
					/>
				}
				label={<Typography variant="body1">Female</Typography>}
			/>
		</Box>
	);
};

export default GenderCheckbox;
