const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    userPicture: {
        type: String,
        required: true
    },
    profileDescription: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    skills: [{
        type: String,
        required: true,
    }],
    strengths: [{
        type: String,
        required: true,
    }],
    education: [{
        school: {
            type: String,
            required: true,
        },
        yearRange: {
            type: String,
            required: true,
        }
    }],
    workExperience: [{
        company: {
            type: String,
            required: true,
        },
        jobTitle: {
            type: String,
            required: true,
        },
        jobDate: {
            type: String,
            required: true,
        },
        jobResponsibilities: [{
            type: String,
            required: true,
        }],
    }],
    certifications: [{
        certificationTitle: {
            type: String,
            required: true,
        },
        certificationRange: {
            type: String,
        }
    }],
    characterReferences: [{
        characterName: {
            type: String,
        },
        characterTitle: {
            type: String,
        },
        characterCompany: {
            type: String,
        },
        characterPhone: {
            type: String,
        },
        characterEmail: {
            type: String,
        }
    }]
})

module.exports = mongoose.model('ResumeInfo', resumeSchema)