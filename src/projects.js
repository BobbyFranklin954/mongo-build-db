// projects.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    projectId: { type: String, unique: true, required: true },
    projectName: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]
});

const Project = mongoose.model('Project', projectSchema);
export default Project;