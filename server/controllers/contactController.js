const {Contact} = require('../models/models')

class ContactController{
    async create(req, res, next){
        const {name, number, email} = req.body;
        const contact = Contact.create({name: name, number: number, email: email})
        res.json(contact)
    }
}

module.exports = new ContactController