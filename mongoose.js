// const mongoose  = require("mongoose");

// .then(() => {
//     console.log("Connected to MongoDb");

// const User = mongoose.model('Users', { name: String, email: String, password: String});

// const user = new User({
//     name: "Ganesh",
//     email: "adsdasas@gmail.com",
//     password: "hello123@"
// })

// user.save()

//    .then(() => console.log("crud_performed"))
//    .catch(err => console.err("crud failed", err));
// })
// .catch(err => console.error("Db_connection unsuccessfull", err));


const mongoose = require("mongoose");

//mongoose.connect("your_url") :))))))

.then(()=> {
    console.log("db connection successfully");

const User = mongoose.model('doc2', {
    name: String,
    email: String,
    password: String
});

const user = new User({
    name: "Ravi",
    email: "najsdbncajsbnj@gmail.com",
    password: "hello123@"
})

user.save()
.then(() => {
    console.log("user2 added +1")
})
.catch(err => console.err("err_user_addition"));
})
.catch(err => console.err("err_db_connection"))



