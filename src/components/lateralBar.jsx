import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';

const LateralBar = ({ isAdmin }) => {
  const { businessId } = useParams();
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(getSelectedItem(location.pathname));

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  function getSelectedItem(pathname) {
    return pathname.split('/')[3]; // Obtener el último segmento de la URL
  }

  return (
      <Drawer variant="permanent" anchor="left">
        <div>
          <div className={'up-section-lateral-bar'}>
            <img className={'logo-lateral-bar'} src="/logo.png" alt="" />
          </div>
          <Box sx={{ marginLeft: 2, color: 'black' }}>
            <List>
              {['main', 'banners', 'areas', 'links'].map((item) => (
                  <ListItem
                      key={item}
                      button
                      component={Link}
                      to={`/app/admin/${item}`}
                      selected={selectedItem === item}
                      onClick={() => handleItemClick(item)}
                      sx={{
                        color: selectedItem === item ? 'white' : 'black',
                        bgcolor: selectedItem === item ? '#DE632C' : 'white',
                        borderTopRightRadius: '10px',
                        borderBottomRightRadius: '10px',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        padding: '5px 0px',
                      }}
                  >
                    <ListItemText primary={item.charAt(0).toUpperCase() + item.slice(1)} />
                  </ListItem>
              ))}
            </List>
          </Box>
        </div>
      </Drawer>
  );
};

export default LateralBar;
