'use strict'
const knex = require("../../config/db.config")

module.exports = {
    getProvince,
}

function getProvince(result) {
    knex.select('chospital.provcode')
        .from('office')
        .leftJoin('chospital', 'office.offid', 'chospital.hoscode')
        .where('office.offid', '<>', '0000x')
        .then((province) => {
            result(province[0])
        })
}
