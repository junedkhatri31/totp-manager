class SnackbarService {
    static instance;
    static getInstance() {
        if (!SnackbarService.instance) {
            SnackbarService.instance = new SnackbarService();
        }
        return SnackbarService.instance;
    }

    registerSnackbarListener(snackbarListener) {
        this.snackbarListener = snackbarListener;
    }

    _showSnackbar(config) {
        if (this.snackbarListener) {
            this.snackbarListener(config);
        }
    }

    showSnackbar(message) {
        this._showSnackbar({
            message: message
        });
    }
}

export default SnackbarService;
