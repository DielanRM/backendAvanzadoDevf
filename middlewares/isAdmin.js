const isAdmin = (req, res, next) => {
    if(req.role == 'ADMIN'){
        next();
    }else{
        res.status(403).json({msg: 'no es Admin'})
    }
}

export {isAdmin}