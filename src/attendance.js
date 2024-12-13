// attendance.js
import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
    attendanceId: { type: String, unique: true, required: true },
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    date: { type: Date, required: true },
    status: { type: String, enum: ['Present', 'Absent', 'Leave'], required: true }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;