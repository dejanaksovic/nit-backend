const bcrypt = require('bcrypt')
let globalId = 0
const users = []

const emailExists = (email) => {
    const isThereEmail = users.find( (user) => {
        return user.email === email
    } )

    return Boolean(isThereEmail)
}

class User {
    constructor(name, email, password) {

        if(!name | !email | !password) {
            throw Error("Korisnik mora imati sva polja")
        }
        if(emailExists(email))
            throw Error("Korisnik sa tim mejlom vec postoji")

        this.id = (++globalId).toString()
        this.name = name
        this.email = email
        this.password = password
    }

    save() {
        users.push(this)
    }

    static getById(id) {
        return users.find( user => user.id === id)
    }

    static getByEmail(email) {
       return users.find( user => user.email === email )
    }
}

new User("admin", "admin.admin@gmail.com", "admin").save()

module.exports = {
    users,
    User
}