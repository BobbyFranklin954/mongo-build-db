// salaries.js
import mongoose from 'mongoose';

const salarySchema = new mongoose.Schema({
    salaryId: { type: String, unique: true, required: true },
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    amount: { type: Number, required: true },
    effectiveDate: { type: Date, required: true }
});

const Salary = mongoose.model('Salary', salarySchema);
export default Salary;