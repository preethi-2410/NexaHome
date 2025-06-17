import React, { useState } from 'react';
import { Switch, Box, Typography } from '@mui/material';
import axios from 'axios';

const DeviceSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = async () => {
    try {
      const response = await axios.post('http://localhost:1880/api/toggle-device', {
        status: !isOn
      });
      
      if (response.status === 200) {
        setIsOn(!isOn);
      }
    } catch (error) {
      console.error('Error toggling device:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography variant="body1">Device Status</Typography>
      <Switch
        checked={isOn}
        onChange={handleToggle}
        color="primary"
      />
    </Box>
  );
};

export default DeviceSwitch; 