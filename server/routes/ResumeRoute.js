const express = require('express')
const router = express.Router()
const { postResumeInfo, getResumeInfo } = require('../controller/ResumeController')

router.post('/post/user/resume-info', postResumeInfo)
router.get('/get/user/resume-info', getResumeInfo)

module.exports = router