const { User } = require('../models')

exports.store = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
        return res.status(401).json({ message: 'User not found' })
    }

    if (!(await user.checkPassword(password))) {
        return res.status(401).json({ message: 'Wrong username or password' })
    }

    return res.json({ user })
}
