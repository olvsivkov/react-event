import { Box, Typography, ToggleButtonGroup, Pagination, ToggleButton } from '@mui/material';
import { FC, useState } from 'react';
import CardList from '../CardList/CardList';
import GridOnIcon from '@mui/icons-material/GridOn';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { HelpRequest } from '../../types/HelpRequest';

type RequestsProps = {
  helpRequests: HelpRequest[];
};

const HelpRequestsComponent: FC<RequestsProps> = (requests) => {
  const { helpRequests } = requests;
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid');
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = helpRequests.slice(indexOfFirstItem, indexOfLastItem);

  const children = [
    <ToggleButton value="grid" key="grid">
      <GridOnIcon />
    </ToggleButton>,
    <ToggleButton value="list" key="list">
      <ListAltRoundedIcon />
    </ToggleButton>,
    <ToggleButton value="map" key="map">
      <LocationOnIcon />
    </ToggleButton>,
  ];

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleViewChange = (event: React.MouseEvent<HTMLElement>, newViewMode: string) => {
    setViewMode(newViewMode);
  };

  const control = {
    value: viewMode,
    onChange: handleViewChange,
    exclusive: true,
  };
  
   return (
      <>
        <Box sx={{
            display: 'flex',       
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
          <Typography variant="h6">Найдено: {helpRequests.length}</Typography>
          <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
            {children}
          </ToggleButtonGroup>
        </Box>
        <CardList helpRequests={ currentItems } viewMode={viewMode}/>
        <Box sx={{
            display: 'flex',       
            justifyContent: 'center',
            marginTop: '20px'
          }}>
          <Pagination
          count={Math.ceil(helpRequests.length / itemsPerPage)}
          page={currentPage}
          size='large'
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
      </>
   )
};

export default HelpRequestsComponent;

