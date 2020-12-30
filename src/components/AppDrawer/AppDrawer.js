import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { useState } from 'react';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        border: 'none'
    },
    drawerItemTextRoot: {
    },
    listItemRoot: {
        color: '#344578',
    },
    listItemActive: {
        color: theme.palette.primary.main
    }
}));


function AppDrawer(props) {
    const classes = useStyles();
    const [ activeTab, setActiveTab ] = useState('dashboard');

    const onDrawerItemClick = (item) => {
        props.onItemClick(item);
        setActiveTab(item);
    }

    const getActiveClass = (tabName) => {
        return activeTab === tabName ? classes.listItemActive : '';
    }

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <List>
                <ListItem onClick={onDrawerItemClick.bind(this, 'dashboard')} button>
                    <ListItemIcon><DashboardIcon className={getActiveClass('dashboard')} /></ListItemIcon>
                    <ListItemText primaryTypographyProps={{
                        classes: {
                            root: `${classes.drawerItemTextRoot} ` + getActiveClass('dashboard')
                        }
                    }} primary="Dashboard" />
                </ListItem>
                <ListItem onClick={onDrawerItemClick.bind(this, 'settings')} button>
                    <ListItemIcon><SettingsIcon  className={getActiveClass('settings')}/></ListItemIcon>
                    <ListItemText primaryTypographyProps={{
                        classes: {
                            root: `${classes.drawerItemTextRoot} ` + getActiveClass('settings')
                        }
                    }} primary="Settings" />
                </ListItem>
            </List>

        </Drawer>
    );
}

export default AppDrawer;
