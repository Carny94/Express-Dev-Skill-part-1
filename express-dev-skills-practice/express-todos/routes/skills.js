var express = require('express');
var router = express.Router();
//All actual paths start with "/skills"
var skillsCtrl = require('../controllers/skills');

//GET /skills
router.get('/', skillsCtrl.index);
// GET /todos/new
router.get('/new', skillsCtrl.new);
// GET /todos/:id
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create); 
// new route below
router.delete('/:id', skillsCtrl.delete);

module.exports = router;