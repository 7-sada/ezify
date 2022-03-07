const userSerivce = require('./../models/users.model')

exports.authenticate = (req, res, next) => {
    userSerivce.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or Password is incorrects' }))
        .catch(err => next(err))
}

exports.getAll = (req, res, next) => {
    userSerivce.getAll()
        .then(users => res.json(users))
        .catch(err => next(err))
}