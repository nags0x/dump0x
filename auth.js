//need to fix unexpected-errors

// const express = require("express");
// const jwt = require("jsonwebtoken");
// const signature = "ganesh's password";

// const app = express();
// app.use(express.json());

// const data = [
//     {
//         username: "u1",
//         password: "hello",
//         name: "Ganesh",
//     },
//     {
//         username: "u2",
//         password: "hi",
//         name: "Sanju",
//     },
//     {
//         username: "u3",
//         password: "ok",
//         name: "Kapil",
//     }
// ]


// function userExists(username, password){
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].username === username && data[i].password === password) {
//             return true;
//         }
//     }
//     return false;
// }

// app.post("/signin", (req, res) => {
//     const get_username = req.body.username;
//     const get_password = req.body.password;

//     if(!userExists(get_username, get_password)){
//         return res.status(403).json({
//             msg: "User doesnt exist"
//         });
//     }

//     var token = jwt.sign({username: get_username}, signature);
//     return res.json({
//         token,
//     });
// });


// app.get("/users", (req, res) => {
//     const token =  req.headers.authorization;
//     try{
//         const decoded = jwt.verify(token, signature);
//         const username = decoded.username; 
//         const otherUsers = data.filter((user) => user.username != username);
//         return res.json(
//             otherUsers.map((user) => ({
//                 name1: user.name,
//                 username: user.username,
//             }))
//         );
//     } catch(err){
//         return res.status(403).json({
//             msg: "Invalid token"
//         })
//     }
// });

// app.listen(3009, () => {
//     console.log("Server running on http://localhost:3009");
// });


const express = require("express");
const jwt = require("jsonwebtoken");
const signature = "ganesh's password";

const app = express();
app.use(express.json());

const data = [
    { username: "u1", password: "hello", name: "Ganesh" },
    { username: "u2", password: "hi", name: "Sanju" },
    { username: "u3", password: "ok", name: "Kapil" }
];

function userExists(username, password) {
    // for (let i = 0; i < data.length; i++) {
    //     if (data[i].username === username && data[i].password === password) {
    //         return true;
    //     }
    // }
    // return false;

    return (data.find(user => user.username === username && user.password === password));
}

app.post("/signin", (req, res) => {
    const get_username = req.body.username;
    const get_password = req.body.password;

    if (!userExists(get_username, get_password)) {
        return res.status(403).json({ msg: "User doesnt exist" });
    }

    const token = jwt.sign({ username: get_username }, signature);
    return res.json({ token });
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, signature);
        const username = decoded.username;
        const otherUsers = data.filter((user) => user.username != username);
        return res.json(
            otherUsers.map((user) => ({
                name: user.name,
                username: user.username,
            }))
        );
    } catch(err) {
        return res.status(403).json({ msg: "Invalid token" });
    }
});


app.listen(3009, () => {
    console.log("Server running on http://localhost:3009");
});
