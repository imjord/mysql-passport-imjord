const router = require('express').Router();
const {login, loginView } = require('../../controllers/passportController');


router.get('/', loginView);
router.post('/', login);

module.exports = router;