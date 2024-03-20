import jwt from 'jwt-simple';

const authValidator = (req, res, next)=>{

    const token = req.headers['authorization']
    if(!token){
        return res.status(403).json({ msg: 'Authorization missing'})
    }

    try {
        const payload = jwt.decode(token, process.env.SECRET);
        next()
    } catch (error) {
        return res.status(500).json({msg: 'token malo'});
    }
};

export {authValidator}