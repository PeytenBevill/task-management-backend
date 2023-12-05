const pool = require("../sql/connections")

const list = (req, res) => {
  const { UserID } = req.params;
  pool.query(
    'SELECT TaskID, task_title, task_body FROM Tasks WHERE UserID = ?',
    [UserID],
    (err, rows, fields) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json(rows);
    }
  );
};


const create = (req, res) => {
  const { UserID } = req.params;
  const { task_title, task_body } = req.body;
  pool.query(
    'INSERT INTO Tasks (task_title, task_body, UserID) VALUES (?, ?, ?);',
    [task_title, task_body, UserID],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json({ message: 'Task created successfully' });
    }
  );
};

// const updateTask = (req, res) => {
//   const id = req.params.id;
//   const updatedData = req.body;

//   pool.query(
//     'UPDATE tasks SET ? WHERE id = ?',
//     [updatedData, id],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json({ message: err.message });
//       }
      
//       if (result.affectedRows === 0) {
//         return res.status(404).json({ message: 'Task not found' });
//       }

//       res.json({ message: 'Task updated successfully' });
//     }
//   );
// }
//tasks will need to be uncompleted by default and then the update will mark them as completed. I believe that means we'll need another function that updates it back to uncompleted if the user clicks the check by mistake.

const deleteTask = (req, res) => {
  const id = req.params.id;
  
  pool.query('DELETE FROM tasks WHERE id = ?', [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
  });
};

module.exports = {
  list,
  create,
  deleteTask
}