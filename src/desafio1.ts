// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "Nelson";

interface employee {
    code: number,
    name: string
}

(() => {
    const employeeNelson : employee = {
        code: 10,
        name: "Nelson"
    }
    console.log(employeeNelson.name)
})();