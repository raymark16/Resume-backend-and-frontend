const ResumeModel = require('../models/ResumeModel')
const asyncHandler = require('express-async-handler')
const path = require('path')

const postResumeInfo = asyncHandler(async (req, res) => {

    await ResumeModel.create(req.body)

    res.status(200).json(req.body);
})

const getResumeInfo = asyncHandler(async (req, res) => {
    const result = await ResumeModel.findOne({}).lean()
    if (!result) {
        res.status(400)
        throw new Error('unable to find user')
    }
    return res.status(200).json({ result });
})

module.exports = {
    getResumeInfo,
    postResumeInfo
}