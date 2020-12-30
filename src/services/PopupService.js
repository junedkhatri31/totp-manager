import React from 'react';

class PopupService {
    isOpen = false;
    static instance;
    popupElement = null;
    onPopupSubmit = null;

    static getInstance() {
        if (!PopupService.instance) {
            PopupService.instance = new PopupService();
        }
        return PopupService.instance;
    }

    getPopupElement() {
        if (this.popupElement) {
            return React.createElement(this.popupElement);
        }
        return null;
    }

    registerPopupListener(openPopupListener, closePopupListener) {
        this.openPopupListener = openPopupListener;
        this.closePopupListener = closePopupListener;
    }

    open(popupElement, onPopupSubmit = null) {
        this.popupElement = popupElement;
        this.onPopupSubmit = onPopupSubmit;
        this.openPopupListener();
        this.isOpen = true;
    }

    close(data = null) {
        this.closePopupListener();
        if (this.onPopupSubmit) {
            this.onPopupSubmit(data);
            this.onPopupSubmit = null;
        }
        this.popupElement = null;
        this.isOpen = false;
    }
}

export default PopupService;
