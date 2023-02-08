import React, {useState} from "react";
import {Typography, InputLabel, MenuItem, FormControl, Select} from '@mui/material';
// import { makeStyles } from '@mui/styles';
import PikePlace from './images/pike-place.jpg';
import SpaceNoodle from './images/SpaceNoodle.jpg';
import { createTheme} from '@mui/material/styles';


const theme = createTheme();
// const useStyles = makeStyles({
//   formControl: {
//     margin: theme.spacing(1) , minWidth: 120, marginBottom: '30px', marginTop: '-20px',
//   },
//   container: {
//     padding: '20px',
//   },
//   searchfields: {
//     display: 'flex', justifyContent: 'center', marginBottom: '2.88rem', marginTop: '5px'
//   },
//   searchfieldsInput: {
//     width: '21rem', padding: '.66rem 1rem', marginLeft: '1rem', border: '1px solid #fff',borderRadius: '4px',
//     borderColor: 'inherit', marginTop:'10px', fontSize: '.77rem', fontWeight: '500',
//   },
//   });
const useStyles = {
  formControl: {
        margin: theme.spacing(1) , minWidth: 120, marginBottom: '30px', marginTop: '-20px',
      },
      container: {
        padding: '20px',
      },
      searchfields: {
        display: 'flex', justifyContent: 'center', marginBottom: '2.88rem', marginTop: '5px'
      },
      searchfieldsInput: {
        width: '21rem', padding: '.66rem 1rem', marginLeft: '1rem', border: '1px solid #fff',borderRadius: '4px',
        borderColor: 'inherit', marginTop:'10px', fontSize: '.77rem', fontWeight: '500',
      },
}


const List = ()  => {
    const classes = useStyles();
    const [rating, setRating] = useState('');

    return (
        <div className={classes.container}>

            <Typography variant="h4">Attraction Things To Do</Typography>
            <div className={classes.searchfields}>
                <input className={classes.searchfieldsInput} placeholder="Search City...." />
            </div>
            <FormControl className={classes.formControl}>
                <InputLabel id="rating">Rating</InputLabel>
                <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="3">Above 3.0</MenuItem>
                    <MenuItem value="4">Above 4.0</MenuItem>
                    <MenuItem value="4.5">Above 4.5</MenuItem>
                </Select>
            </FormControl>

            <img src={PikePlace} alt="map" style={{width: '90%', heigh: '40%', marginRight:'-50px', marginBottom:'10px', borderColor:'blue', borderWidth:'2px'}}/>
            <img src={SpaceNoodle} alt="map" style={{width: '90%', heigh: '40%', marginRight:'-50px', marginBottom:'10px', borderColor:'blue', borderWidth:'2px'}}/>
      </div>

    );
}

export default List;
