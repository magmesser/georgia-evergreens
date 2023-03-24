const jwtoken = require("jsonwebtoken");

// const User = require('../models/user');

// Set token secret and expiration date
// const secret = config.secret;
const secret = "mysecretssshhhhhhh";
const expiration = "2h";

module.exports = {
    // function for our authenticated routes

    // function to create token
    signToken: function ({ email, username, _id }) {
        // Create a token
        const payload = { email, username, _id };
        // Sign token
        return jwtoken.sign({ data: payload }, secret, {
            expiresIn: expiration,
        });
    },
};

// authMiddleware: function ({ req, res }) {

//   // allows token to be sent via  req.query or header}
//   let token = req.body.token || req.query.token || req.headers.authorization;
//   // We split the token string into an array and return actual token
//   // We check if the token was sent in a valid format
//   if (req.headers.authorization) {
//     token = token.split(' ').pop().trim();
//   };
//   // If no token, return request object as is
//   if (!token) {
//     // return res.status(400).json({ message: 'You have no token!' });
//     return req;
//   }
//   // If token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
//   try {
//     const { data } = jwtoken.verify(token, secret, { maxAge: expiration });
//     req.user = data;
//   } catch {
//     // If token is invalid, return an error
//     console.log('Invalid token');
//     return res.status(400).json({ message: 'Invalid token!' });
//   }
//   // If token is invalid, return an error
//   // Send to next endpoint

// return req;

// },
