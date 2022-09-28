const lista =['pan','harina','cerveza','snaks', 'galletas','manzanas', 'queso'];

lista.push('aceite de girasol');

lista.splice(7, 1);

const movies = [
    {nombre:'the batman', director: "reeves", year:2022},
    {nombre:'el padrino', director: "scorsese", year: 1972},
    {nombre:'el señor de los anillos', director: "jackson", year: 2001}
]

const newMovies = movies.filter(valor=> valor.year>2010);


const directors = movies.map(valor=> valor.director);
const moviesOnly = movies.map(valor=>valor.nombre);
const movieDirector = directors.concat(moviesOnly);
const movieDirectorProp = [...directors,...moviesOnly];




