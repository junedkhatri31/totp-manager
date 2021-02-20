import Snackbar from '@material-ui/core/Snackbar';
import { useState } from 'react';
import Slide from '@material-ui/core/Slide';
import SnackbarService from '../../services/SnakebarService';

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}


function AppSnakebar () {
    const [ open, setOpen ] = useState(false);
    const [ message, setMessage ] = useState(null);
    const handleClose = () => {}

    const snackbarService = SnackbarService.getInstance();

    const showSnackBar = (config) => {
        setOpen(true);
        setMessage(config.message);
        setTimeout(() => {
            setOpen(false);
        }, 2000);
    }

    snackbarService.registerSnackbarListener(showSnackBar);

    return (
        <Snackbar
            open={open}
            onClose={handleClose}
            TransitionComponent={SlideTransition}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{message}</span>}
        />
    )
}

export default AppSnakebar;
