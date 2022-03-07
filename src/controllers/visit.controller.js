const Visit = require("../models/visit.model")

// Find a single Visit with a visitno
exports.findOne = (req, res) => {
    Visit.findByVisitno(req.params.visitno, (err, data) => {
        if (err) {
            if (err.message === "not_found") {
                res.status(400).send({
                    message: `Not found Visit with visitno ${req.params.visitno}.`
                })
            } else {
                res.status(500).send({
                    message: `Error retrieving Visit with visitno ${req.params.visitno}.`
                })
            }
        } else {
            res.send(data)
        }
    })
}

// Update VitalSign with a visitno
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    Visit.updateByVisitno(req.params.visitno, req.body, (err, data) => {
        if (err) {
            if (err.message === "not_found") {
                res.status(400).send({
                    success: false,
                    message: `Not found Visit with visitno ${req.params.visitno}.`
                })
            } else {
                res.status(500).send({
                    success: false,
                    message: `Error Updating VitalSigns with visitno ${req.params.visitno}.`
                })
            }
        } else {
            res.send({
                success: true,
                message: "Updated Vital Signs successfully!!",
                visitno: req.params.visitno,
            })
        }
    })
}

