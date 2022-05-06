module.exports = app => {
    const Visit = require("../controllers/visit.controller")
    const Patient = require("../controllers/patient.controller")
    const auth = require("../controllers/users.controller")
    var router = require("express").Router()

    // Retrieve a single Visit with visitno
    router.get('/visit/:visitno', Visit.findOne)
    router.get('/patient/visitno/:visitno', Patient.findByVisitno)
    router.get('/patient/hn/:hn', Patient.findByHN)

    // Update Vital sign with visiton
    router.post('/visit/:visitno', Visit.update)
    router.put('/visit/:visitno', Visit.update)

    // Router Authenticate with Bisic Auth
    router.post('/authenticate', auth.authenticate)
    router.get('/users', auth.getAll)

    app.use('/api/v1', router);
}

