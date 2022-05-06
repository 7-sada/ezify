const Patient = require("../models/patient.model")

// Find a single Patient with a visitNo
exports.findByVisitno = (req, res) => {
    Patient.findByVisitno(req.params.visitno, (err, data) => {
        if (err) {
            if (err.message === "not_found") {
                res.status(400).send({
                    message: `Not found Patient with visitno ${req.params.visitno}.`
                })
            } else {
                res.status(500).send({
                    message: `Error retrieving Patient with visitno ${req.params.visitno}.`
                })
            }
        } else {
            res.send(data)
        }
    })
}

// Find a single Patient with a visitNo
exports.findByHN = (req, res) => {
    Patient.findByHN(req.params.hn, (err, data) => {
        if (err) {
            if (err.message === "not_found") {
                res.status(400).send({
                    message: `Not found Patient with HN ${req.params.hn}.`
                })
            } else {
                res.status(500).send({
                    message: `Error retrieving Patient with HN ${req.params.hn}.`
                })
            }
        } else {
            res.send(data)
        }
    })
}
