import { CircularProgress, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import StorageManager from '../../../utils/StorageManager';
import React from 'react';
import { withStyles } from '@material-ui/styles';
import PopupService from '../../../services/PopupService';
import OtpList from './OtpList/OtpList';
import NewItemPopup from './NewItemPopup/NewItemPopup';

const styles = (theme) => ({
    root: {
        background: '#f6f9fe',
        width: '100%',
        borderRadius: '10px',
        margin: '16px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column'
    },
    otpListTitle: {
        fontSize: '16px',
        color: '#273b6f',
    },
    addButtonRoot: {
        color: theme.palette.primary.main,
    },
});

class OtpApp extends React.Component {
    constructor() {
        super()
        this.otpManager = new StorageManager();
        this.popupService = PopupService.getInstance();

        this.state = {
            otpList: this.otpManager.getOTPList()
        }
    }

    onPopupSubmit(data) {
        if (data) {
            this.otpManager.insertIntoOTP(data);
            this.setState({ otpList: this.otpManager.getOTPList() });
        }
    }

    addItemClickListener() {
        this.popupService.open(NewItemPopup, this.onPopupSubmit.bind(this));
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let otpChangeIn = 30 -Math.floor(Date.now() / 1000) % 30;
            if (otpChangeIn === 0) otpChangeIn = 30
            this.setState({ otpChangeIn: otpChangeIn })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Typography className={classes.otpListTitle}>OTP List</Typography>
                        <CircularProgress size={30} variant="determinate" value={(100 * this.state.otpChangeIn) / 30} />
                        <Button
                            classes={{
                                root: classes.addButtonRoot,
                            }}
                            startIcon={<AddIcon />}
                            onClick={this.addItemClickListener.bind(this)}
                        >Add New</Button>
                    </Grid>
                </div>
                <OtpList data={this.state.otpList} />
            </div>
        )
    }
}
export default withStyles(styles)(OtpApp);
