// Como podemos melhorar o esse código usando TS? 
// let pessoa1 = {};
// pessoa1.nome = "paulo";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "sergio";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "fernanda",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "nelson",
//     idade = 19,
//     profissao = "padeiro"
// }

enum occupationEnum {
    atriz,
    ator,
    padeiro,
    padeira,
    desenvolvedor,
    desenvolvedora
}

interface Person {
    name: string,
    age: number,
    occupation: occupationEnum
}

(() => {

    const people1: Person = {
        name: "paulo",
        age: 29,
        occupation: occupationEnum.atriz,
    }

    const people2: Person = {
        name: "sergio",
        age: 19,
        occupation: occupationEnum.padeiro
    }

    const people3: Person = {
        name: "fernanda",
        age: 32,
        occupation : occupationEnum.atriz
    }

    const people4: Person = {
        name: "nelson",
        age: 19,
        occupation: occupationEnum.padeiro
    }

    console.log(people1.name)
    console.log(people2.name)
    console.log(people3.name)
    console.log(people4.name)
    
})()