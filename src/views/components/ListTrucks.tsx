import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { Button } from '@mui/base';

function createData(
  make: string,
  id: string,
  isAvailable: string,
  purchaseDate: string,
) {
  return { make, id, isAvailable, purchaseDate };
}

const rows = [
  createData('Cartepillar', 'vlc123', 'yes', '24200101'),
  createData('Cartepillar', 'vlc123', 'yes', '24200101'),
  createData('Belaz', 'vlc123', 'yes', '24200101'),
  createData('Komatsu', 'vlc123', 'no', '24200102'),
];

export default function BasicTable() {
  return (
    <Box sx={{ width: '100%' }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ '&:first-child td, &:first-child th': { bgcolor: 'text.primary', color:'background.paper'} }}>
            <TableCell sx={{color:'white'}}>Make</TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Is Available</TableCell>
            <TableCell align="center">Purchase Date</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.make}
              sx={{ '&:last-child td, &:last-child th': { border: 0} }}
            >
              <TableCell component="th" scope="row">
                {row.make}
              </TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.isAvailable}</TableCell>
              <TableCell align="center">{row.purchaseDate}</TableCell>
              <TableCell align="center">
                <Button>Edit</Button>
                <Button>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}