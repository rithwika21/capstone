import React, { useState } from 'react'
import { Typography, makeStyles, Grid, TextField, Button } from '@material-ui/core'
import '../../styles/images.css'
// import ubuntuIcon from '../../assets/images/ubuntu.svg';
import { LightTooltip } from '../images'
import ImageList from './imageList'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

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
  const history = useHistory()
  const classes = useStyles()

  const [baseImage, setBaseImage] = useState("");
  const [imageTag, setImageTag] = useState("");
  const [containeName, setContaineName] = useState("")
  const [username, setUsername] = useState("guest")
  const [password, setPassword] = useState("")


  const onSubmit = (e) => {
    e.preventDefault();
    var randomId = Math.floor(1000 + Math.random() * 90000);

    const containerValues = {
      baseImage,
      imageTag,
      containerName: `shellinabox-${randomId}`,
      username,
      password
    }

    console.log(containerValues);
    axios.post('/api/container/allocate', containerValues).then((res) => {
      console.log(res.data)
      window.open(`http://${res.data.ip}:${res.data.port}`, '_blank');
      // history.push("/contianer/view")
    })
  }

  return (
    <div style={{ margin: "0 auto" }}>
      <Typography variant="p" className={classes.label}>
        Choose an image
      </Typography>
      <form onSubmit={onSubmit}>
        <ImageList setBaseImage={setBaseImage} baseImage={baseImage} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} className={classes.inputBx}>
            <TextField
              variant='outlined'
              fullWidth
              id='imageName'
              label='Image Name(optional)'
              type='text'
              name='imageName'
              autoComplete='image'
              color='primary'
              value={imageTag}
              onChange={(e) => setImageTag(e.target.value)}
            />
            <LightTooltip title='Add' placement='right' arrow>
              <div>
                <i className='uil uil-info-circle info__icon'></i>
              </div>
            </LightTooltip>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.inputBx}>
            <TextField
              variant='outlined'
              fullWidth
              id='description'
              label='Container Name (optional)'
              type='textarea'
              name='description'
              autoComplete='description'
              color='primary'
              value={containeName}
              onChange={(e) => setContaineName(e.target.value)}
            />
            <LightTooltip title='Add' placement='right' arrow>
              <div>
                <i className='uil uil-info-circle info__icon'></i>
              </div>
            </LightTooltip>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.inputBx}>
            <TextField
              variant='outlined'
              fullWidth
              id='username'
              label='username'
              // type='textarea'
              name='username'
              autoComplete='username'
              color='primary'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <LightTooltip title='Add' placement='right' arrow>
              <div>
                <i className='uil uil-info-circle info__icon'></i>
              </div>
            </LightTooltip>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.inputBx}>
            <TextField
              required
              variant='outlined'
              fullWidth
              id='password'
              label='password'
              type='text'
              name='password'
              autoComplete='password'
              color='primary'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <LightTooltip title='Add' placement='right' arrow>
              <div>
                <i className='uil uil-info-circle info__icon'></i>
              </div>
            </LightTooltip>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            className={classes.submit}
          >
            Create
            {/* <Link to="/imagemanager/view" style={{ textDecoration: "none", color: "inherit" }}>
              Create
            </Link> */}
          </Button>
        </Grid>
      </form>
    </div>
  )
}

export default Images
