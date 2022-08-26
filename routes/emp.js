const express = require('express')
const router = express()
const create = require('../controller/emp')
const view = require('../controller/emp')
const bodyparser = require('body-parser');
const update = require('../controller/emp')
const remove = require('../controller/emp')



router.delete('/delete/:id',remove.remove)
router.use(bodyparser.json())
router.post('/create', create.create)
router.get('/', view.view)
router.put('/:id',update.update)
module.exports = router;