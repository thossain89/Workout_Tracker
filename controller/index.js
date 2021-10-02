const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const pagesRoutes = require('./pagesRoutes');

router.use('/api', apiRoutes);
router.use('/', pagesRoutes);


module.exports = router;