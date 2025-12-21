// クラス図 演習1

class Employee {

    private id: number;
    private name: string;
    private salary: number;

    public work(): void {
        console.log('働きます');
    }

    protected getSalary(): number {
        return this.salary;
    }

    protected setSalary(salary: number): void {
        this.salary = salary;
    }

}