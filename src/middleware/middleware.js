const isValidHttpUrl = require("../utils/validateUrl");

const middleware = (req, res, next) => {
    try {
        const { url } = req.body;
        const checkValidation = isValidHttpUrl(url);
        if (!checkValidation) {
            throw new Error();
        }
        next();
    } catch (err) {
        return res.status(400).json({
            error: true,
            message: "Invalid Url",
            data: null,
        });
    }
};

module.exports = middleware;
