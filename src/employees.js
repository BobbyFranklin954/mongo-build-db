// employees.js
import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    employeeId: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String },
    hireDate: { type: Date, required: true },
    jobTitle: { type: String, required: true },
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    salary: { type: Number, required: true },
    managerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;