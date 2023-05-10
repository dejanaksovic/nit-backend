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
    constructor(name, email, password, residency, desc, imgUrl, ghUrl, isAdmin = false) {

        if(!name | !email | !password) {
            throw Error("Korisnik mora imati nepohodna polja: 'ime', 'email' i 'sifru'")
        }
        if(emailExists(email))
            throw Error("Korisnik sa tim mejlom vec postoji")

        this.createdAt = new Date().getDate()
        this.id = (++globalId).toString()
        this.name = name
        this.email = email
        this.password = password
        this.residency = residency
        this.desc = desc
        this.imgUrl = imgUrl
        this.ghUrl = ghUrl
        this.isAdmin = isAdmin
    }

    save() {
        users.push(this)
    }

    static getById(id) {
        return users.find( user => user.id === id)
    }

    static getByEmail(email) {
        console.log(users);
       return users.find( user => user.email === email )
    }

    static getByIdAndDelete(id) {
        const resUser = users.find( e => e.id === id )
        if(!resUser)
            throw Error("Korisnik sa tim id-em ne postoji")
        users = users.filter( e => e.id !== id )

        return {user:resUser}
    }
}

new User("admin", "admin.admin@gmail.com", "admin", undefined, undefined, undefined, undefined, true).save()
new User("Chris Pennington", "chris@gmail.com","1234" , "California US", "Software developer primary focused on web, first to make lessons on new cutting edge js tech. Follow him on youtube not to miss anything", "https://codinginpublic.dev/images/ciphead.png", "https://github.com/coding-in-public").save()
new User("David J", "david@gmail.com", "1234", "Manchester, UK", "I'm a programmer. I'm keen on getting the word out that programming is fun, silly and educational. I don't do much web stuff, I like clock cycles.", "https://pbs.twimg.com/profile_images/906909732446896129/2vLEoyxn_400x400.jpg", "https://github.com/OneLoneCoder?tab=repositories").save()
new User("Kevin Powell", "kevin@gmail.com", "1234", "Halifax, Nova Scotia", "Hi there! My name is Kevin and I'm a CSS Evangelist. I absolutely love CSS, and I want to help new front-end devs enjoy learning it, and help seasoned vets see how great it really is.", "https://avatars.githubusercontent.com/u/25749407?v=4", "https://github.com/kevin-powell").save()
new User("Evan You", "evan@gmail.com", "1234", "Singapore", "I am an independent software developer currently based in Singapore. I am the creator of the JavaScript framework Vue.js and the frontend build tool Vite", "https://avatars.githubusercontent.com/u/499550?v=4", "https://github.com/yyx990803").save()


module.exports = {
    users,
    User
}