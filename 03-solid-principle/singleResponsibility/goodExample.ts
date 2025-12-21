class EmployeeData {
    constructor(
        public name: string,
        public department: string,
    ){};
}

// class PayCalculator extends EmployeeData { // 継承はよくない
class PayCalculator {
    private getRegularHours() {
        console.log('経理部門のロジック');
    }

    // EmployeeDataクラスを引数に取ることで継承を避けることができる
    calculatePay(employeeData: EmployeeData) {
        this.getRegularHours();
        console.log(`${employeeData.name}の給与を計算しました`);
    }    
}


class HourReport {
    private getRegularHours() {
        console.log('人事部門のロジック');
    }

    reportHours(employeeData: EmployeeData) {
        console.log(`${employeeData.name}の労働時間をレポートしました`);
      }
}

class EmployeeRepository{
    save() {
    }
}

function run() {
    const employeeData = new EmployeeData("鈴木", "開発");
    const payCalculator = new PayCalculator();
    const hourReport = new HourReport();

    console.log("経理部門");
    payCalculator.calculatePay(employeeData);
    console.log("");
    console.log("人事部門");
    hourReport.reportHours(employeeData);

}

run();