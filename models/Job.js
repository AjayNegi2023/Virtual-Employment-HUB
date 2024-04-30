import mongoose from 'mongoose';
const JobSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
    },
    company: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    job_url: {
        type: String,
        required: true
    },
    company_logo_url: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    job_category: {
        type: String,
        required: true,
    },
    job_type: {
        type: String,
        required: true,
        trim: true,
    },
    job_experience: {
        type: String,
        required: true,
    },
    job_vacancy: {
        type: Number,
    },
    job_deadline: {
        type: Date,
    }

}, { timestamps: true });

const Job = mongoose.models.Job || mongoose.model('Job', JobSchema);

export default Job;