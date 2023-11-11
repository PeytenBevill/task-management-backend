const pool = require("../sql/connections")

const list = (req, res) => {
  const {user_id} = req.params
  pool.query('SELECT firstName, lastName, role FROM users WHERE user_id = ?',[user_id], (err, rows, fields) => {
    if(err){
      return res.status(500).json({message: err.message})
    } 
    res.json(rows)
  })
}

const createUser = (req, res) => {
  const { email, firstName, lastName, role } = req.body

  pool.query(`INSERT INTO ?? (??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?)`, ['users', 'email', 'firstName', 'lastName', 'role', email, firstName, lastName, role], (err, rows, fields) => {
    res.json({
      message: "User created!"
    })
  })
}

module.exports = {
  list,
  createUser
}