const express = require('express')
const router = express.Router()
const users = [
{
	id: 1,
	name: "yun"
}, {
	id: 2,
	name: "sammy"
}
]

router.get("/", (req, res) => {
	res.status(300).send(users)
})

router.post("/", (req, res) => {
	console.log(req.body)
        res.status(200).send(users)
})

router.put("/:id", (req, res) => {
	console.log(req.params.id)
	console.log(req.body)
        res.status(200).send(users)
})

router.delete("/:id", (req, res) => {
	console.log(req.params.id)
        res.status(200).send(users)
})

module.exports = router
