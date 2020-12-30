import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import PopupService from "../../../services/PopupService";
import ConfigManager from "../../../utils/ConfigManager";
import allStyles from "../styleclasses";
import ChangeDbPopup from "./ChangeDbPopup/ChangeDbPopup";

const useStyles = makeStyles((theme) => ({
    root: allStyles.root,
    categoryRoot: {
        background: '#fff',
        borderRadius: '10px',
        marginTop: '16px',
        overflow: 'scroll',
        padding: theme.spacing(2)
    },
    settingsTitle: {
        color: '#273b6f'
    },
    settingsValue: {
        color: '#909fc1',
        fontSize: '14px'
    },
}));



function Settings() {
    const classes = useStyles();
    const configManager = new ConfigManager();
    const [databaseLocation, setDatabaseLocation] = useState(configManager.getConfigFilePath());

    const onChangeFileResult = (result) => {
        if (result) {
            configManager.setConfigFilePath(result.filePath);
            setDatabaseLocation(result.filePath);
        }
    }

    const onChange = () => {
        const popupService = PopupService.getInstance();
        popupService.open(ChangeDbPopup, onChangeFileResult);
    }

    return (
        <div className={classes.root}>
            <Typography>General</Typography>
            <div className={classes.categoryRoot}>
                <Grid container direction="row" justify="space-between">
                    <Grid item>
                        <Typography className={classes.settingsTitle}>Database location</Typography>
                        <Typography className={classes.settingsValue}>{databaseLocation}</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={onChange}>Change</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Settings;
