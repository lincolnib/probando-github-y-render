//exportaciones

// const frutas = ['platano', 'manzana', 'platano', 'pera'];
// module.exports = frutas;

//pero que pasa si yo tengo mas cosas que quiero importar?

const frutas = ['platano', 'manzana', 'platano', 'pera'];
const dinero = 1000;
module.exports = {
    frutas,
    dinero
};
// esa es la forma que se recomienda para exportar, quizas tengas q exportar un solo elemento, pero si a futuro tienes que exportar mas entonces esta es la via correcta, se recomienda siempre usarla, tambien puedes hacer lo siguiente:

// const frutas = ['platano', 'manzana', 'platano', 'pera'];
// const dinero = 1000;
// module.exports = {
//     frutas: frutas,
//     dinero: dinero
// };// de esta forma obtienes el mismo resutado, pero si vas a ponerle el mismo nombre que es lo recomendado entonces puedes omitirlo y hacerlo como lo hice arriba.