var People = require('../People/index');

module.exports = {
    getPeople: (req, res) => {
        if (!People) {
            //500 is a failure status ("internal error")
            return res.status(500).send("Error getting peoples");
        } else {
            //200 is the success status ("OK")
            return res.status(200).send(People);
        }
    },
}
