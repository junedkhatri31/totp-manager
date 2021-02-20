function copyTextToClipboard(text) {
    return navigator.clipboard.writeText(text);
}

export { copyTextToClipboard }
