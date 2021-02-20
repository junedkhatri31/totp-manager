import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import OtpListItem from './OtpListItem/OtpListitem';

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
                                <OtpListItem otpItem={otpItem} />
                            </ListItem>
                            {divider}
                        </div>
                    )
                })}
            </List>
        </div>
    );
}

export default OtpList;
