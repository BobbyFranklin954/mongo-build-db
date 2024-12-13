// roles.js
import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    roleId: { type: String, unique: true, required: true },
    roleName: { type: String, required: true },
    permissions: { type: [String] }
});

const Role = mongoose.model('Role', roleSchema);
export default Role;