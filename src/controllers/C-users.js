const pool = require("../sql/connections")

const list = (req, res) => {
  const {UserID} = req.params
  pool.query('SELECT firstName, lastName, user_role FROM users WHERE UserID = ?',[UserID], (err, rows, fields) => {
    if(err){
      return res.status(500).json({message: err.message})
    } 
    res.json(rows)
  })
}

const createUser = (req, res) => {
  const { firstName, lastName, user_role, email } = req.body;

  pool.query(
    'INSERT INTO Users (firstName, lastName, user_role, email) VALUES (?, ?, ?, ?)',
    [firstName, lastName, user_role, email],
    (err, rows, fields) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json({
        message: 'User created!',
      });
    }
  );
};



module.exports = {
  list,
  createUser
}