
import "dotenv/config"
import jwt from 'jsonwebtoken'
import BadRequestError from "../errors/BadRequestError.js";

export const login = (req, res) => {
  console.log(req.body);

  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("Kindly enter the username and password");

  }
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  console.log(token);

  res.status(200).json({
    msg: "user created ",
    token,
  });
};

export const dashboard = (req, res) => {
  //console.log(req.headers);

  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `${req.user.username} is logged in`,
    secret: `HERE IS YOUR AUTHORIZED DATA, YOUR LUCKY NUMBER IS ${luckyNumber}`,
  });
};

//line generates a JSON Web Token (JWT) using the jwt.sign() method.
//A JWT is a compact, URL-safe token format used for securely transmitting information between parties. It’s often used for authentication, authorization, and data exchange.
//jwt.sign(object payload data, secretkey, options: time)

//secret key used for signing the token
//JWT 3 parts >alog >data >signature
//When data (like a JSON Web Token) is sent over the internet, it’s signed with a unique code. 