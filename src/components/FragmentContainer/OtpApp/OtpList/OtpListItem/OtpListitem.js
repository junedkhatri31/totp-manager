import { makeStyles } from '@material-ui/core/styles';
import { generateTOTP } from '../../../../../utils/totp';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton';
import { copyTextToClipboard } from '../../../../../utils/clipboard';
import SnackbarService from '../../../../../services/SnakebarService';

const useStyles = makeStyles((theme) => ({
    totpTitle: {
        color: '#293b70',
    },
    totpNumber: {
        color: '#909fc1',
        display: 'inline-block'
    },
    rightContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    clipboardButtonIcon: {
        padding: '6px',
        marginLeft: theme.spacing(1)
    }
}));

function OtpListItem(props) {
    const classes = useStyles();
    const otpText = generateTOTP(props.otpItem.secret);

    // const otpTextSpaceAdded = otpText.
    const otpTextSpaceAdded = otpText.slice(0, 3) + ' ' + otpText.slice(3);


    const snakebarService = SnackbarService.getInstance();

    const onCopyClick = () => {
        copyTextToClipboard(otpText).then((success => {
            snakebarService.showSnackbar('Copied to clipboard');
        }), error => {
            console.error(error);
            snakebarService.showSnackbar('Couldn\'t copy clipboard');
        });
    }

    return (
        <Container>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Typography className={classes.totpTitle}>{props.otpItem.title}</Typography>
                <Box className={classes.rightContainer}>
                    <Typography className={classes.totpNumber}>{otpTextSpaceAdded}</Typography>
                    <IconButton onClick={onCopyClick} className={classes.clipboardButtonIcon} color="primary" aria-label="copy to clipboard" component="span">
                        <FileCopyIcon />
                    </IconButton>
                </Box>
            </Grid>
        </Container>
    )
}

export default OtpListItem;
