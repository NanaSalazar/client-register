const express = require('express')
const router = express.Router()

const controller = require('./../controllers/controller')

router.get("/data", controller.get)

router.post("/data", controller.post)

router.route("/:id")

.get(controller.getById)
.put(controller.put)
.patch(controller.patch)
.delete(controller.delete)

module.exports = router
