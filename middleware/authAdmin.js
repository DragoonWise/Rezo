module.exports = function(req, res, next) {
    // console.log(req.user)
    if (req.user.IsAdmin)
    next()
    else
    res.status(401).json({ msg: 'User is not a Admin' });
};