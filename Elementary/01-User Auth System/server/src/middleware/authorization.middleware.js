import jwt from 'jsonwebtoken'


const checkTokenMiddleware = async(req,res,next) =>{
   const token = await req.cookies.token;
   if(!token){
    console.log("token unavailable");
    return res.status(401).send("token unavailable")
   }

   try {
    const decode = jwt.verify(token,process.env.SECRETKEY_JWT);
    console.log(decode);
    req.email = decode.email;
    next();
   } catch (error) {
    console.log("cannot verify token");
    res.status(401).send("invalid token")
   }

}

export default checkTokenMiddleware;