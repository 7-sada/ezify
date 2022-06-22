'use strict'
const knex = require("../../config/db.config")

// constructor
const Patient = (patient) => {
    console.log("test");
    this.pid = patient.pid
    this.fname = patient.fname
    this.lname = patient.lname
}


// search patient with visitno 
Patient.findByVisitno = (visitno, result) => {
    knex.select('person.pcucodeperson', 'person.pid', 'visit.visitno', 'person.idcard', 'ctitle.titlename', 'person.fname', 'person.lname', 'person.birth', 'person.bloodgroup', 'person.allergic')
        .select(knex.raw('CASE WHEN person.sex = 1 THEN "Male" ELSE "Female" END AS sex'))
        .from('person')
        .leftJoin('visit', function () {
            this.on('person.pcucodeperson', '=', 'visit.pcucode').andOn('person.pid', '=', 'visit.pid')
        })
        .leftJoin('ctitle', 'person.prename', 'person.prename')
        .where('visitno', visitno)
        .then((patient) => {
            if (patient.length) {
                result(null, patient[0])
            } else {
                result({ message: "not_found" }, null)
            }
        }).catch((err) => {
            result(err, null)
            return
        })
}

// search patient with HN
Patient.findByHN = (hn, result) => {
    knex.select('person.pcucodeperson', 'person.pid', 'person.idcard', 'ctitle.titlename', 'person.fname',
        'person.lname', 'person.birth', 'person.bloodgroup', 'person.allergic')
        .select(knex.raw('CASE WHEN person.sex = 1 THEN "Male" ELSE "Female" END AS sex'))
        .from('person')
        .leftJoin('ctitle', 'person.prename', 'person.prename')
        .where('person.pid', hn)
        .then((patient) => {
            if (patient.length) {
                result(null, patient[0])
            } else {
                result({ message: "not_found" }, null)
            }
        }).catch((err) => {
            result(err, null)
            return
        })
}


module.exports = Patient;