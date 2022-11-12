module.exports = (req,res,next) => {
    if (req.session.usuarioLogin) {
        if(req.session.usuarioLogin.roles_id === 1){
          return next()
        }
    }
    res.redirect('/')
}