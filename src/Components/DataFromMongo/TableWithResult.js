import Location_C from "../Location-Center"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Card } from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function UserData(props) {

    const { persons } = props

    if (!persons || persons.length === 0) return <p>Нет данных.</p>

    return (
       <Location_C>
            <Card variant = "outlined" sx={{width : 700
    }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Count of members</StyledTableCell>
            <StyledTableCell align="right">Group name</StyledTableCell>
            <StyledTableCell align="right"> DataTame Request</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {persons.map((person) => (
            <StyledTableRow
              key={person.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {person.id}
              </StyledTableCell>
              <StyledTableCell align="right">{person.countofMembers}</StyledTableCell>
              <StyledTableCell align="right">{person.groupName}</StyledTableCell>
              <StyledTableCell align="right">{person.dateTime}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
    </Location_C>
  );
}   
export default UserData