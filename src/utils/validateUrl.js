function isValidHttpUrl(string) {
    try {
        const url = new URL(string);
        if (url.protocol !== "https:" && url.protocol !== "http:") {
            throw new Error();
        }
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = isValidHttpUrl;
