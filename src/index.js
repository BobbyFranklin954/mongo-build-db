import connectDB from './db-connection.js';
import Employee from './employees.js';
import Department from './departments.js';
import Role from './roles.js';
import Salary from './salaries.js';
import Project from './projects.js';
import Attendance from './attendance.js';
import mongoose from 'mongoose';

// Connect to the database
connectDB().then(() => {
    seedDatabase();
});

// Seed the database with example data
async function seedDatabase() {
    // Clear existing data
    await Employee.deleteMany({});
    await Department.deleteMany({});
    await Role.deleteMany({});
    await Salary.deleteMany({});
    await Project.deleteMany({});
    await Attendance.deleteMany({});

    // Create example department
    const department = new Department({
        departmentId: 'D001',
        departmentName: 'Engineering',
        location: 'Building A'
    });
    await department.save();

    // Create example role
    const role = new Role({
        roleId: 'R001',
        roleName: 'Software Engineer',
        permissions: ['read', 'write', 'execute']
    });
    await role.save();

    // Create example employee
    const employee = new Employee({
        employeeId: 'E001',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        hireDate: new Date('2022-01-15'),
        jobTitle: 'Software Engineer',
        departmentId: department._id,
        salary: 70000,
        managerId: null // Assuming no manager for this example
    });
    await employee.save();

    // Create example salary
    const salary = new Salary({
        salaryId: 'S001',
        employeeId: employee._id,
        amount: 70000,
        effectiveDate: new Date('2022-01-15')
    });
    await salary.save();

    // Create example project
    const project = new Project({
        projectId: 'P001',
        projectName: 'Project Alpha',
        startDate: new Date('2022-02-01'),
        endDate: new Date('2022-12-31'),
        employees: [employee._id]
    });
    await project.save();

    // Create example attendance
    const attendance = new Attendance({
        attendanceId: 'A001',
        employeeId: employee._id,
        date: new Date('2023-01-01'),
        status: 'Present'
    });
    await attendance.save();

    console.log('Database seeded successfully');
    mongoose.connection.close();
}