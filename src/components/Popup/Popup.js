import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import PopupService from '../../services/PopupService';


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));


function Popup() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const popupService = PopupService.getInstance();

    const openPopup = () => {
        setOpen(true);
    }

    const closePopup = () => {
        setOpen(false);
    }

    popupService.registerPopupListener(openPopup, closePopup);

    const onBackdropClick = (event) => {
        if (event.target.className.includes('MuiBackdrop-root')) {
            popupService.close();
        }
    }

    return (
        <Backdrop className={classes.backdrop} open={open} onClick={onBackdropClick}>
            {popupService.getPopupElement()}
        </Backdrop>
    );
}

export default Popup;
