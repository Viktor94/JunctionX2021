import { Box, Drawer, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const CARE_TAKER_ASIDE_WIDTH = 240

export const CareTakerAside: React.FC = () => {
  return (
    <Drawer
      sx={{
        width: CARE_TAKER_ASIDE_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: CARE_TAKER_ASIDE_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box p={3}>
        <Typography variant="h6" textAlign="center">
          <strong>{'Test Caretaker'}</strong>
        </Typography>
      </Box>
      <List>
        <ListItemButton component={Link} to="/admin">
          <ListItemText>Patients</ListItemText>
        </ListItemButton>
      </List>
    </Drawer>
  )
}
