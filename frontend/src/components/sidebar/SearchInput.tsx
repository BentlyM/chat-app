import React from 'react';
import { Search } from 'lucide-react';
import { Box, TextField, IconButton } from '@mui/material';

const SearchInput = () => {
	return (
		<form style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
			<TextField
				size="small"
				placeholder="Search…"
				variant="outlined"
				fullWidth
				sx={{
					borderRadius: '50px',
					'& .MuiOutlinedInput-root': {
						borderRadius: '50px',
					},
				}}
			/>
			<IconButton type="submit" sx={{ backgroundColor: '#0EA5E9', color: 'white', borderRadius: '50%' }}>
				<Search style={{ width: '20px', height: '20px' }} />
			</IconButton>
		</form>
	);
};

export default SearchInput;
