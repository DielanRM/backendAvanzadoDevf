import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';

const register = async (req, res)=>{
    try {
        if(!req.body.email || !req.body.password){
            return res.status(400).json({
                msg: 'correo o contrasena faltantes',
            });
        }

        const newPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = newPassword;

        const newUser = await User.create(req.body);

        newUser.password = undefined;
        return res.json({msg: 'usuario creado', User: newUser,});

    } catch (error) {
        res.status(500).json({
            msg: 'Error al registrar el usuario',
        })
    }
};

const login = async (req, res)=>{
//Pedimos password y correo
    if(!req.body.password || !req.body.email){
        return res.status(400).json({
            msg: 'Bad login'
        })
    }

    try {
        //biscamos user con ese correo
        const user = await User.findOne({
            email: req.body.email //donde email sea igual al del body
        });

        if (!user) {
            return res.status(404).json({ msg: 'usuario no encontrado' })
        }

        //comparar contrasenas
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password);

        if (isPasswordCorrect) {
            //crear un token
            const payload = {
                email: user.email,
                role: user.role,
            };
            const token = jwt.encode(payload, process.env.SECRET);
            //regresar el token
            return res.json({
                msg: 'login correcto', token,
            });
        } else {
            return res.status(401).json({ msg: 'Datos incorrectos' })
        }

    } catch (error) {
        res.status(500).json({ msg: 'error al realizar login', error })
    }
};


export { register, login }
