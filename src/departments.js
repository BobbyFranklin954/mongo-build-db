// departments.js
import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema({
    departmentId: { type: String, unique: true, required: true },
    departmentName: { type: String, required: true },
    location: { type: String }
});

const Department = mongoose.model('Department', departmentSchema);
export default Department;