import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';
import TitleIcon from '@material-ui/icons/Title';
import InputAdornment from '@material-ui/core/InputAdornment';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import React from 'react';
import PopupService from '../../../../services/PopupService';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#fff',
        color: '#273b6f',
        padding: '16px',
        borderRadius: '10px',
        minWidth: '300px'
    },
    topMargin: {
        marginTop: theme.spacing(3)
    },
    leftMargin: {
        marginLeft: theme.spacing(2)
    },
    actionButtons: {
        width: '48%',
        margin: '1%',
        padding: theme.spacing(1.5)
    }
}));


function NewItemPopup() {
    const classes = useStyles();
    const popupService = PopupService.getInstance();

    const onCancelClick = () => {
        popupService.close();
    }
    const onAddClick = (event) => {
        event.preventDefault();
        popupService.close({
            title: event.target.title.value,
            secret: event.target.secret.value,
        });
    }

    return (
        <Box className={classes.root}>
            <Typography variant="h6">Add New Item</Typography>
            <form onSubmit={onAddClick} autoComplete="off">
                <Box className={classes.topMargin}>
                    <TextField name="title" label="Title" variant="outlined" fullWidth required InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <TitleIcon />
                            </InputAdornment>
                        ),
                    }}
                    />
                </Box>
                <Box className={classes.topMargin}>
                    <TextField type="password" name="secret" label="Secret" variant="outlined" fullWidth required InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <VpnKeyIcon />
                            </InputAdornment>
                        ),
                    }} />
                </Box>
                <Grid classes={{
                    root: `${classes.topMargin}`
                }}>
                <Button className={classes.actionButtons} onClick={onCancelClick} variant="contained">
                    Cancel
                </Button>
                <Button type="submit" className={classes.actionButtons} variant="contained" color="primary">
                    Add
                </Button>
                </Grid>
            </form>
        </Box>
    )
}

export default NewItemPopup;
