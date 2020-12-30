const Store = window.require('electron-store');

class ConfigManager {
    store;
    constructor() {
        this.store = new Store();
    }

    getConfigFilePath() {
        return this.store.get('ConfigFilePath');
    }

    setConfigFilePath(value) {
        return this.store.set('ConfigFilePath', value);
    }
}

export default ConfigManager;
