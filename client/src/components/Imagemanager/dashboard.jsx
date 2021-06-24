import React from 'react'
import { Container, Typography, makeStyles } from '@material-ui/core'
import Images from './images'

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2rem",
    fontWeight: "300",
    marginBottom: "2rem",
    marginTop: "2rem"
  }
}))

const CreateContainer = () => {

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" className={classes.title}>
        Create Container
      </Typography>
      <Images />
    </Container>
  )
}

export default CreateContainer
