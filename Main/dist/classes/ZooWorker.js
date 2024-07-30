import Employee from './Employee.js';
// Note that the above is explicitly importing in .js files as the current tsconfig cannot correctly path to the necessary file. The classes will be referred correctly after the dist folder is generated.
// ZooWorker class inherits Employee properties
class ZooWorker extends Employee {
    constructor(name, id, title, salary, cleanUniform) {
        super(name, id, title, salary);
        this.cleanUniform = cleanUniform;
        this.cleanUniform = cleanUniform;
    }
    getCleanUniform() {
        return this.cleanUniform;
    }
}
export default ZooWorker;
