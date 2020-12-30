import { createMuiTheme } from '@material-ui/core/styles';

const themeOptions = {
    palette: {
        primary: {
            main: '#7254ff',
            // main: '#ff0000',
        },
    },
    typography: {
        body1: {
            fontWeight: 600,
            color: '#273b6f'
        }
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none',
            },
            contained: {
                borderRadius: '100px',
                boxShadow: 'none'
            },
            label: {
                fontWeight: 600
            }
        },
        MuiOutlinedInput: {
            root: {
                borderRadius: '100px',
            }
        },
        MuiSvgIcon: {
            root: {
                color: '#344578'
            }
        }
    },
};

const appTheme = createMuiTheme(themeOptions);

export { appTheme };