import User from "../model/User.model.js"
import jwt from "jsonwebtoken"
// VerifyToken.js will veryfy the token after user login and if that token matches the token stored in the server/env file then only it will allow the user to access the protected routes. example : create post, delete post, update post etc.

export const authorize = (req, res, next)=>{
 const authToken = req.headers.authorization; // we will get the token from the headers of the request.

 //if we don't have token in the headers then we will return 401 unauthorized error.
 if(!authToken || !authToken.startsWith("Bearer")){
    return res.status(400).json({success: false, message: "Unauthorized access, token missing"})
 }
 try {
    const token = authToken.split(" ")[1]; // here we will split "bearer" key word by the space and after space what we have is the actual token. so we will get the token by using index 1.

    //token verification
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY) // it will decode the token and verify it with the secret key. if the token is valid then it will return the decoded payload else it will throw an error.
    // token is what we will get from the frontend and process.env.JWT_TOKEN_KEY is the secret key that we have stored in the env file.
    //  console.log("Decoded Token:", decoded);
     req.userId = decoded.id ; // we will store the user id in the req object so that we can use it in the next middleware or controller. req will passed using next() function to the next createBlog controller or other controller. this is similar to props in react.
     req.role = decoded.role; // we will store the user role in the req object so that we can use it in the next middleware or controller.
     req.name = decoded.name;
     next()
 } catch (error) {
    if(error.name === "TokenExpiredError"){
        return res.status(401).json({success: false, message: "Token expired, please login again"})
    } else {
        return res.status(401).json({success: false, message: "Invalid token, authorization failed"})
    }
 }
}