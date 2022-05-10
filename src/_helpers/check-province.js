const Province = require('../models/provincve.model')

module.exports = getProvcode

async function getProvcode(req, res, next) {

    await Province.getProvince((data) => {
        if (data.provcode !== "20") {
            if (data.provcode !== "21") {
                return res.status(400).json({ message: 'Please!, Contact JHCIS Teams' });
            }
        }
        next();
    })
}