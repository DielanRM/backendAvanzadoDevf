import User from '../models/user.js';
import bcrypt from 'bcrypt';

const register = async (req, res)=>{
    try {
        if(!req.body.email || !req.body.passwor){
            return res.status(400).json({
                msg: 'correo o contrasena faltantes',
            });
        }

        const newPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = newPassword;

        const newUser = await User.create(req.body)

        return res.json({msg: 'usuario creado', user: newUser,});

    } catch (error) {
        res.status(500).json({
            msg: 'Error al registrar el usuario',
        })
    }
};


export { register }
