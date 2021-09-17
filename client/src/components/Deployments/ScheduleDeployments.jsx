import 'date-fns';
import React from 'react';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
	Container,
	makeStyles,
	TextField,
	
	Typography,
	Button,
	Tooltip,
	withStyles,
} from "@material-ui/core";

import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
	form: {
		width: "100%",
		marginTop: "2rem",
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		maxWidth: "200px",
	},
	inputBx: {
		position: "relative",
		display: "flex",
		alignItems: "center",
	},
	subtitle: {
		fontSize: "1.2rem",
		fontWeight: "400",
		color: "#333",
		margin: "1rem 0",
		width: "100%",
	},
	p: {
		color: "#333",
		opacity: "0.7",
	},
	innerSubtitle: {
		margin: "1rem 0 0.5rem 0.2rem",
		fontWeight: "400",
		color: "#333",
	},
}));

const LightTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: theme.palette.common.white,
		color: "rgba(0, 0, 0, 0.87)",
		boxShadow: theme.shadows[1],
		fontSize: 13,
		fontWeight: "400",
	},
}))(Tooltip);

export const ScheduleDeployments = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

	return (
		<div>
		  <Container component='main' style={{ marginTop: "2rem" }}>
				<Typography component='h2' variant='h5'>
					Schedule deployments
				</Typography>
				<hr />

				<form className={classes.form}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<TextField
								variant='outlined'
								fullWidth
								id='LabName'
								label='Lab Name'
								type='text'
								name='LabName'
								autoComplete='LabName'
								color='primary'
							/>
							<LightTooltip title='Name for these group of remote machines' placement='right' arrow>
								<div>
									<i class='uil uil-info-circle info__icon'></i>
								</div>
							</LightTooltip>
							
						</Grid>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<TextField
								variant='outlined'
								fullWidth
								id='ImageName'
								label='Image Name'
								type='textarea'
								name='ImageName'
								autoComplete='ImageName'
								color='primary'
							/>
							<LightTooltip title='primary key is used to ssh into the machines' placement='right' arrow>
								<div>
									<i class='uil uil-info-circle info__icon'></i>
								</div>
							</LightTooltip>
						</Grid>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<TextField
								variant='outlined'
								fullWidth
								id='TopicName'
								label='Topic Name'
								type='textarea'
								name='TopicName'
								autoComplete='TopicName'
								color='primary'
							/>
							<LightTooltip title='primary key is used to ssh into the machines' placement='right' arrow>
								<div>
									<i class='uil uil-info-circle info__icon'></i>
								</div>
							</LightTooltip>
						</Grid>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
						<label htmlFor="contained-button-file">
							<Button variant="contained" color="primary" component="span">
									  Upload Execl File
							</Button>
		  				</label>
							
						</Grid>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
     				 <Grid container justifyContent="space-around">
        
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Deployment date"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Deployment time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
	  <Grid container justifyContent="space-around">
	  <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Deployment end date"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Deployment end time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />

	  </Grid>

    </MuiPickersUtilsProvider>
	</Grid>
					
		  
		  <input
			type="file"
			accept="image/*"
			style={{ display: 'none' }}
			id="contained-button-file"
		  />
		  
		  
		  
		  
		  
		  <Button
						type='submit'
						fullWidth
						variant='contained'
						color='secondary'
						className={classes.submit}
					>
						Schedule
					</Button>
				</form>
			</Container>
		  
		  
		</div>
	  );
	}
  