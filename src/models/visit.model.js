'use strict'
const knex = require("../../config/db.config")

// constructor
const Visit = (visit) => {
    this.visitno = visit.visitno
    this.weight = visit.weight
    this.height = visit.height
}

Visit.findByVisitno = (visitno, result) => {
    knex('visit')
        .where('visitno', visitno)
        .select('visitno', 'visitdate', 'symptoms', 'weight', 'height', 'pressure', 'temperature', 'pulse', 'o2satuation', 'respri', 'dateupdate')
        .then((visit) => {
            if (visit.length) {
                result(null, visit[0])
            } else {
                result({ message: "not_found" }, null)
            }
        }).catch((err) => {
            result(err, null)
            return
        })
}

Visit.updateByVisitno = (visitno, vitalsign, result) => {
    knex('visit')
        .where('visitno', visitno)
        .update({
            symptoms: vitalsign.symptoms,
            weight: vitalsign.weight,
            height: vitalsign.height,
            pressure: vitalsign.pressure,
            temperature: vitalsign.temperature,
            pulse: vitalsign.pulse,
            o2satuation: vitalsign.o2satuation,
            respri: vitalsign.respri,
            dateupdate: new Date()
        })
        .then((row) => {
            if (!row) {
                result({ message: "not_found" }, null)
                return
            }
            result(null, { success: true })
        })
        .catch((err) => {
            result(err, null)
            return
        })
}

module.exports = Visit;