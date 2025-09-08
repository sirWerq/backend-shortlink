const supabase = require("../config/supabase");
require("dotenv").config();

const postShortlinkController = async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({
                error: true,
                message: "Cannot be empty",
                data: null,
            });
        }
        const { data: checkData, error: checkErrorData } = await supabase
            .from("link_table")
            .select()
            .eq("link", url);
        if (checkErrorData) {
            throw new Error("Internal Server Error");
        }
        if (checkData.length === 0) {
            const characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let result = "";
            const length = 6;
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(
                    Math.random() * characters.length
                );
                result += characters.charAt(randomIndex);
            }
            const shortlink = `https://${process.env.BASE_URL_SHORTLINK}/${result}`;
            const { error: errorInsert } = await supabase
                .from("link_table")
                .insert({ link: url, shortlink });
            if (errorInsert) {
                throw new Error("Internal Server Error");
            }
            return res.status(200).json({
                error: false,
                message: "Successful Data Retrieval",
                data: shortlink,
            });
        } else {
            return res.status(200).json({
                error: false,
                message: "Successful Data Retrieval",
                data: checkData[0].shortlink,
            });
        }
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Internal Server Error",
            data: null,
        });
    }
};

module.exports = { postShortlinkController };
