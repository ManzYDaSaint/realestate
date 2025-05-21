import React from 'react'
import { Box, TextField } from '@mui/material';

const IconTextField = ({ icon: Icon, label, type = 'text', ...props }) => (
  <Box sx={{ display: 'flex', alignItems: 'flex-end', fontFamily: 'Poppins, cursive' }}>
    {Icon && <Icon size={20} color="#2563EB" style={{ marginRight: 8 }} />}
    <TextField
      fullWidth
      label={label}
      type={type}
      variant="standard"
      id="outlined-size-small"
      size="small"
      InputLabelProps={{ style: {fontSize: '0.9rem' } }}
      InputProps={{
        style: { color: '#2563EB', fontSize: '0.9rem', fontFamily: 'Poppins, cursive' },
        disableUnderline: false,
      }}
    />
  </Box>
);

export default IconTextField