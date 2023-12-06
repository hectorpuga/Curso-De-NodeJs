const empleados = [
    { id: 1, nombre: 'Hector' },
    { id: 2, nombre: 'Linda' },
    { id: 3, nombre: 'Karen' },
];


const salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 1500 },
];


const getEmpleados = (id) => {


    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id)?.nombre;

        empleado ?
            resolve(empleado) :
            reject(`No existe empleado con id ${id}`)



    });

}


const getSalario = (id) => {

    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id)?.salario;

        salario ? resolve(salario) : reject(`No existe salario con id ${id}`)
    });

}
const id = 3;
// getEmpleados(id).then(empleado => console.log(empleado)).catch(console.log);

// getSalario(id).then(console.log).catch(console.log);


let nombre;

getEmpleados(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    }

    )
    .then(salario => console.log(`El empleado: ${nombre}, tiene un salario de: ${salario}`)).catch(console.log)

    ;