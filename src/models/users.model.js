// Users hardcoded for simplicity, store in a db for production applications
const users = [{
    id: 1,
    username: "test",
    password: "test",
    firstName: "Test",
    lastName: "Test"
},
{
    id: 2,
    username: "test1",
    password: "test1",
    firstName: "Test1",
    lastName: "Test1"
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