# CRUD_Notes_Application

This is a simple yet powerful CRUD (Create, Read, Update, Delete) Notes Application built with Node.js, Express.js, and JavaScript. The application allows users to manage their personal notes with an intuitive interface and basic functionality.

### Restful Route Table

| #   | Action | URL  | HTTP Verb. | JSX view filename | mongoose method       |
| --- | ------ | ---- | ---------- | ----------------- | --------------------- |
| 1   | Index  | /    | get        | Index.jsx         | Note.find()           |
| 2   | Show   | /:id | get        | Show.jsx          | Note.findById()       |
| 3   | Create | /    | post       | none              | Note.create(req.body) |
| 4   | Edit   | /:id | patch      | Edit.jsx          | Note.findById()       |
| 5   | Delete | /:id | delete     | none              | Note.deleteOne()      |
