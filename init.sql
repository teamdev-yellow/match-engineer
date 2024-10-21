CREATE DATABASE IF NOT EXISTS `match-engineer`;

CREATE TABLE users (
    user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_name VARCHAR(255),
    icon VARCHAR(255),
    created_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_skills VARCHAR(255) NOT NULL
);

CREATE TABLE user_preferences (
    preferences_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    role_type VARCHAR(50) NOT NULL,
    level VARCHAR(50) NOT NULL,
    selected_option VARCHAR(50) NOT NULL,
    created_datetime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY user_fk(user_id) REFERENCES users(user_id)
);

CREATE TABLE `groups` (
    group_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    group_name VARCHAR(255) NOT NULL,
    created_datetime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status BOOLEAN 
);

CREATE TABLE group_members (
    group_member_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    group_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY group_fk(group_id) REFERENCES `groups`(group_id),
    FOREIGN KEY user_fk(user_id) REFERENCES users(user_id)
);

CREATE TABLE posts (
    post_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    post_name VARCHAR(255) NOT NULL,
    post_skills VARCHAR(255),
    created_datetime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    post_summary VARCHAR(255) NOT NULL,
    post_description VARCHAR(255),
    site_url VARCHAR(255),
    github_url VARCHAR(255),
    liked BOOLEAN,
    liked_count INT NOT NULL,
    group_id INT NOT NULL,
    FOREIGN KEY group_fk(group_id) REFERENCES `groups`(group_id)
);

CREATE TABLE user_post_likes (
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    created_datetime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY user_fk(user_id) REFERENCES users(user_id),
    FOREIGN KEY post_fk(post_id) REFERENCES posts(post_id)
);

CREATE TABLE projects (
    project_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    project_name VARCHAR(255) NOT NULL,
    project_skills VARCHAR(255),
    created_datetime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    project_summary VARCHAR(255) NOT NULL,
    project_description VARCHAR(255),
    group_id INT NOT NULL,
    FOREIGN KEY group_fk(group_id) REFERENCES `groups`(group_id)
);




