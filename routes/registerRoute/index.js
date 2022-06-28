const router = require('express').Router();
const {register, registerView } = require('../../controllers/passportController');

router.route('/').post(register).get(registerView);


module.exports = router;