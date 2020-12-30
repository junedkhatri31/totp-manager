import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { generateTOTP } from '../../../../utils/totp';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#fff',
        borderRadius: '10px',
        marginTop: '16px',
        overflow: 'scroll'
    },
    listRootPadding: {
        padding: 0
    },
    listItemRoot: {
        paddingTop: '16px',
        paddingBottom: '16px',
    },
    totpTitle: {
        color: '#293b70',
    },
    totpNumber: {
        color: '#909fc1',
    }
}))


function OtpList(props) {
    const classes = useStyles();
    const dataLength = props.data.length;
    return (
        <div className={classes.root}>
            <List classes={{
                padding: classes.listRootPadding
            }}>
                {props.data.map((otpItem, i) => {
                    let divider = null;
                    if (i + 1 !== dataLength) {
                        divider = <Divider />
                    }
                    return (
                        <div key={i}>
                            <ListItem classes={{
                                root: classes.listItemRoot
                            }}>
                                <Container>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="center">
                                        <Typography className={classes.totpTitle}>{otpItem.title}</Typography>
                                        <Typography className={classes.totpNumber}>{generateTOTP(otpItem.secret)}</Typography>
                                    </Grid>
                                </Container>
                            </ListItem>
                            {divider}
                        </div>
                    )
                })}
                {/* <ListItem classes={{
                    root: classes.listItemRoot
                }}>
                    <Container>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <Typography className={classes.totpTitle}>Test 1</Typography>
                            <Typography className={classes.totpNumber}>123 456</Typography>
                        </Grid>
                    </Container>
                </ListItem>
                <Divider />
                <ListItem classes={{
                    root: classes.listItemRoot
                }}>
                    <Container>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <Typography className={classes.totpTitle}>Test 1</Typography>
                            <Typography className={classes.totpNumber}>123 456</Typography>
                        </Grid>
                    </Container>
                </ListItem>
                <Divider />
                <ListItem classes={{
                    root: classes.listItemRoot
                }}>
                    <Container>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <Typography className={classes.totpTitle}>Test 1</Typography>
                            <Typography className={classes.totpNumber}>123 456</Typography>
                        </Grid>
                    </Container>
                </ListItem> */}
            </List>
        </div>
    );
}

export default OtpList;
