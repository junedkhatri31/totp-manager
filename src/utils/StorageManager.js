import ConfigManager from "./ConfigManager";
import IManager from "./IManager";

class StorageManager extends IManager {
    configManager = new ConfigManager();
    path = this.configManager.getConfigFilePath();
    data = [];
    fs = window.require('fs');
    constructor() {
        super();
        this.data = JSON.parse(this.fs.readFileSync(this.path, {encoding:'utf8', flag:'r'}));
    }

    getOTPList() {
        return this.data;
    }

    insertIntoOTP(data) {
        this.data.push(data);
        let stringyList = JSON.stringify(this.data);
        this.fs.writeFileSync(this.path, stringyList, {encoding: 'utf8', flag: 'w'});
    }
}

export default StorageManager;
