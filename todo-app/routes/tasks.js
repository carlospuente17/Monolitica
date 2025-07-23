const express = require('express');
const router = express.Router();
const controller = require ('../controllers/taskController');

router.get('/', controller.index);
router.post('/add', controller.addTask);
router.get('/delete/:id', controller.deletetask);

module.exports = router;