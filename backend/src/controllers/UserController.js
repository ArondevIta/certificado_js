const connection = require('../database/connection')

module.exports = {
  async create(req, res){
    const {email, password, is_admin} = req.body
    const user = await connection('users').insert({
      email,
      password,
      is_admin
    })

    return res.json({user})
  }
}