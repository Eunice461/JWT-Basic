const login = async (req, res) => {
    res.send('fake Login/REgister/signup route')
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, Eunice`, secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}