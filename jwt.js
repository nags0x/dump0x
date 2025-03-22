const jwt = require("jsonwebtoken");
const signature = "123456";

const token = jwt.sign({
    name: "Ganesh"
}, signature);

console.log( token
)

const verif = jwt.verify(token, signature);
if(!verif){
    console.log("error: invalid jwt token");
}
console.log(verif);