import './App.css';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppDrawer from './components/AppDrawer/AppDrawer';
import Popup from './components/Popup/Popup';
import { appTheme } from './theme';
import React, { useState } from 'react';
import FragmentContainer from './components/FragmentContainer/FragmentContainer';
import ConfigManager from './utils/ConfigManager';
import Welcome from './components/Welcome/Welcome';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100vh',
    },
    otpApp: {
        background: '#f6f9fe',
        width: '100%',
        borderRadius: '10px',
        margin: '16px',
        padding: '16px',
    },
    otpListTitle: {
        fontSize: '16px',
        color: '#273b6f',
    },
    addButtonRoot: {
        textTransform: 'none',
        color: '#6a4cfd',
    },
}));

function App() {
    const classes = useStyles();
    const [activePage, setActivePage] = useState('dashboard');
    const configManager = new ConfigManager();
    const [configFilePath, setConfigFilePath] = useState(configManager.getConfigFilePath());

    const onItemClick = (item) => {
        setActivePage(item);
    }

    const onSuccessfulFileSelection = () => {
        setConfigFilePath(configManager.getConfigFilePath());
    }

    return (
        <ThemeProvider theme={appTheme}>
            <div className={classes.root}>
                {
                    configFilePath ?
                    (
                        <React.Fragment>
                            <AppDrawer onItemClick={onItemClick} />
                            <FragmentContainer activePage={activePage} />
                            <Popup />
                        </React.Fragment>
                    ) : 
                    (
                        <Welcome onSuccess={onSuccessfulFileSelection}></Welcome>
                    )
                }
            </div>
        </ThemeProvider>
    );
}

export default App;
