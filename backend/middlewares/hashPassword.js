const bcrypt = require('bcryptjs');


const hashPassword = async (req, res, next) => {
    
    // get the password from req
    const { password } = req.body;
    
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 8);

    // pass the hashed password to next middleware
    res.locals.hashedPassword = hashedPassword;
    next();
}

module.exports = {
    hashPassword: hashPassword
}