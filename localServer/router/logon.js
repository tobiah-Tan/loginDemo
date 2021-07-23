const express = require('express');
const router = express.Router();

const logonHandle = require('../routersHandle/logon');

router.post('/',logonHandle);

module.exports = router;