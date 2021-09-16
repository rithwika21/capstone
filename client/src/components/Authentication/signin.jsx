import React, { useState} from 'react';
//import {useHistory} from "react-router-dom";
//import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const SignIn = () => {
  const classes = useStyles();
  const [UserLogin, setUserLogin] = useState({
    ID: "",
    Password: ""
  });
  //const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //console.log(name,value);

    setUserLogin({ ...UserLogin, [name]: value });
  }
  /*const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...UserLogin, id: new Date().getTime().toString() }
    //console.log(newRecord);
    axios.post('http://localhost:4000/app/signin', newRecord)
      .then(res => console.log(res))
    //setRecords([...records])
}*/
 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>

        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="ID"
            label="ID"
            name="ID"
            autoComplete="ID"
            autoFocus
            value={UserLogin.ID}
            onChange={handleInput}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Password"
            label="Password"
            type="Password"
            id="Password"
            autoComplete="current-password"
            value={UserLogin.Password}
            onChange={handleInput}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='/signup'>Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}

