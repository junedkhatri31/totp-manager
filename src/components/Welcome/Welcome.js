import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import ConfigManager from "../../utils/ConfigManager";
import { createEmptyFile } from "../../utils/storageUtils";

const { dialog } = window.require('electron').remote;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        flexDirection: 'column',
    },
    welcomeText: {
        textAlign: 'center',
        width: '100%'
    },
    topMargin: {
        marginTop: theme.spacing(2)
    },
}))

function Welcome(props) {
    const classes = useStyles();
    const configManager = new ConfigManager();

    // FIXME: Avoid code duplication
    const onFileChoosen = (filepath) => {
        if (filepath) {
            configManager.setConfigFilePath(filepath);
            props.onSuccess();
        }
    }

    const createNewFile = () => {
        dialog.showSaveDialog().then(response => {
            if (!response.canceled) {
                const filePath = response.filePath + '.json';
                createEmptyFile(filePath);
                onFileChoosen(filePath);
            }
        }, error => {
            console.error(error);
        });
    }

    const chooseExistingFile = () => {
        dialog.showOpenDialog({
            properties: ['openFile']
        }).then((response) => {
            if (!response.canceled) {
                onFileChoosen(response.filePaths[0]);
            }
        }, error=> {
            console.error(error);
        });
    }

    return (
        <div className={classes.root}>
            <Typography className={classes.welcomeText}>
                Welcome to TOTP manager
            </Typography>
            <Box className={classes.topMargin}>
                <Button variant="contained" color="primary" onClick={createNewFile}>Create new</Button>
            </Box>
            <Box className={classes.topMargin}>
                <Button variant="contained" color="primary" onClick={chooseExistingFile}>Choose existing</Button>
            </Box>
        </div>
    )
}

export default Welcome;
