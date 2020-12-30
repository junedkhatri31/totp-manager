import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import PopupService from "../../../../services/PopupService";
import { createEmptyFile } from "../../../../utils/storageUtils";

const { dialog } = window.require('electron').remote;

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#fff',
        padding: theme.spacing(2),
        borderRadius: '10px',
        textAlign: 'center'
    },
    topMargin: {
        marginTop: theme.spacing(2)
    },
    actionButton: {
        width: '100%'
    },
}))

function ChangeDbPopup() {
    const classes = useStyles();
    const onFileChoosen = (filepath) => {
        const popupService = PopupService.getInstance();
        popupService.close({filePath: filepath});
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
            <Typography>Change database</Typography>
            <Box className={classes.topMargin}>
                <Button className={classes.actionButton} variant="contained" color="primary" onClick={createNewFile}>Create new</Button>
            </Box>
            <Box className={classes.topMargin}>
                <Button className={classes.actionButton} variant="contained" color="primary" onClick={chooseExistingFile}>Choose existing</Button>
            </Box>
        </div>
    )
}

export default ChangeDbPopup;
