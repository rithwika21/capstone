import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import {IconButton} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(Imagename,Description,Date_of_Creation) {
  return {
    Imagename,
    Description,
    Date_of_Creation,
    Arguments: [
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.Imagename}
        </TableCell>
        <TableCell>{row.Description}</TableCell>
        <TableCell>{row.Date_of_Creation}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Arguments
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>From</TableCell>
                    <TableCell>WorkDir</TableCell>
                    <TableCell>Copy</TableCell>
                    <TableCell>Run</TableCell>
					<TableCell>Cmd</TableCell>
					
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.Arguments.map((ArgumentsRow) => (
                    <TableRow key={ArgumentsRow.From}>
                      <TableCell component="th" scope="row">
                        {ArgumentsRow.From}
                      </TableCell>
                      <TableCell>{ArgumentsRow.WorkDir}</TableCell>
                      <TableCell>{ArgumentsRow.Copy}</TableCell>
					  <TableCell>{ArgumentsRow.Run}</TableCell>
					  <TableCell>{ArgumentsRow.Cmd}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    Description: PropTypes.string.isRequired,
    Date_of_Creation: PropTypes.number.isRequired,
    Arguments: PropTypes.arrayOf(
      PropTypes.shape({
        Copy: PropTypes.string.isRequired,
        WorkDir: PropTypes.string.isRequired,
        From: PropTypes.string.isRequired,
		Run:PropTypes.string.isRequired,
		Cmd:PropTypes.string.isRequired,
      }),
    ).isRequired,
    Imagename: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('Image1','This is Image1','26/01/2021'),
];

export const CreationInfo = () => {
  return (
	<TableContainer component={Paper}>
		<br/>
		<Typography component='h2' variant='h5'>
	List of Images Created
	</Typography>
	<hr />
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Imagename</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Date_of_Creation&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

