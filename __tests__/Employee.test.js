const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should get name from Employee object", () => {
            const employee = new Employee({name:"Chad"});

            expect(employee.name).toEqual("Chad");
        })
    })
    describe("getId", () => {
        it("should get id from Employee object", () => {
            const employee = new Employee({id:7, name:"Sam", email:"sammn721@gmail.com"});
            
            expect(employee.id).toEqual(7);
        })
    })
    describe("getEmail", () => {
        it("should get email from Employee object", () => {
            const employee = new Employee({email:"chad@mail.com"});

            expect(employee.email).toEqual("chad@mail.com");
        })
    })
    describe("getRole", () => {
        it("should get role assigned to employee", () => {
            const employee = new Employee();
            
            expect(employee.role).toEqual("Employee");
        })
    })
});