import React from 'react'
import { Typography, makeStyles, Grid, TextField, Button } from '@material-ui/core'
import '../../styles/images.css'
// import ubuntuIcon from '../../assets/images/ubuntu.svg';
import { LightTooltip } from '../images'
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  label: {
    fontSize: "1rem",
    fontWeight: "300",
    marginBottom: "0px"
  },
  inputBx: {
    position: "relative",
    display: "flex",
    alignItems: "center"
  },
  submit: {
    marginTop: "2rem",
    marginLeft: "1rem",
    width: "150px"
  },
}))



const Images = () => {
  const classes = useStyles()
  return (
    <div style={{ margin: "0 auto" }}>
      <Typography variant="p" className={classes.label}>
        Choose an image
      </Typography>
      {/* <ImageList /> */}
      <form action="">

        <section className="image_list">
          <div>
            <input type="radio" id="image_1" name="select" value="1" />
            <label className="image_label" for="image_1">
              {/* <img src={ubuntuIcon} alt="icon" /> */}
              <h2>Ubuntu</h2>
            </label>
          </div>
          <div>
            <input type="radio" id="image_2" name="select" value="2" />
            <label className="image_label" for="image_2">
              <h2>FreeBSD</h2>
            </label>
          </div>
          <div>
            <input type="radio" id="image_3" name="select" value="3" />
            <label className="image_label" for="image_3">
              <h2>Fedora</h2>
            </label>
          </div>
          <div>
            <input type="radio" id="image_4" name="select" value="4" disabled />
            <label className="image_label" for="image_4">
              <h2>Arch</h2>
            </label>
          </div>
          <div>
            <input type="radio" id="image_5" name="select" value="5" />
            <label className="image_label" for="image_5">
              <h2>Node</h2>
            </label>
          </div>
        </section>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} className={classes.inputBx}>
            <TextField
              variant='outlined'
              fullWidth
              id='imageName'
              label='Image Name'
              type='text'
              name='imageName'
              autoComplete='image'
              color='primary'
            />
            <LightTooltip title='Add' placement='right' arrow>
              <div>
                <i class='uil uil-info-circle info__icon'></i>
              </div>
            </LightTooltip>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.inputBx}>
            <TextField
              variant='outlined'
              fullWidth
              id='description'
              label='Container Name'
              type='textarea'
              name='description'
              autoComplete='description'
              color='primary'
            />
            <LightTooltip title='Add' placement='right' arrow>
              <div>
                <i class='uil uil-info-circle info__icon'></i>
              </div>
            </LightTooltip>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            <Link to="/imagemanager/view" style={{ textDecoration: "none", color: "inherit" }}>
              Create
            </Link>
          </Button>
        </Grid>
      </form>
    </div>
  )
}

export default Images
