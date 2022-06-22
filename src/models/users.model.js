// Users hardcoded for simplicity, store in a db for production applications
const users = [{
    id: 1,
    username: "jhcis",
    password: "77511",
    firstName: "jhcis",
    lastName: "moph"
}]

module.exports = {
    authenticate,
    getAll
}

async function authenticate({ username, password }) {
    const user = users.find(u =>
        u.username === username && u.password === password
    )

    if (user) {
        const { password, ...userwithoutPassword } = user
        return userwithoutPassword
    }
}

async function getAll() {
    return users.map(u => {
        const { password, ...userwithoutPassword } = u
        return userwithoutPassword
    })
}