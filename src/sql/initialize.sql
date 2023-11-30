DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Tasks;
DROP TABLE IF EXISTS Teams;
DROP TABLE IF EXISTS UserTeams;
DROP TABLE IF EXISTS Connections;

-- In MySQL, "role" is not a reserved keyword in the strictest sense, but it does have special significance in certain contexts, particularly related to MySQL's role-based access control introduced in MySQL 8.0. Roles in MySQL are a way to group privileges, which can then be assigned to user accounts.
-- advocating for user_role instead of role in the users table

CREATE TABLE Users (
    user_id INT PRIMARY KEY auto_increment,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    user_role VARCHAR(50),
    email VARCHAR(50) UNIQUE,
);

CREATE TABLE Tasks (
    task_id INT PRIMARY KEY auto_increment,
    task_title VARCHAR(50) NOT NULL,
    task_body VARCHAR(5000),
    user_id INT,
    FOREIGN KEY (user_id) 
    REFERENCES users(user_id) ON DELETE SET NULL
);

CREATE TABLE Teams (
    team_id INT PRIMARY KEY auto_increment,
    team_name VARCHAR(50) NOT NULL
);

-- UserTeams is an associative table between Users and Teams
CREATE TABLE UserTeams (
    UserTeam_id INT PRIMARY KEY auto_increment,
    user_id INT,
    team_id INT,
    FOREIGN KEY (user_id) 
    REFERENCES Users(user_id) ON DELETE SET NULL,
    FOREIGN KEY (team_id) 
    REFERENCES Teams(team_id) ON DELETE SET NULL,
);
