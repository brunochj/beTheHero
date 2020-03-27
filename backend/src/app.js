const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const app = express();
const routes = require('./routes')

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/*
 * Métodos HTTP
 GET: Buscar uma informação do back-end
 POST: Criar uma informação do back-end
 PUT: Alterar uma informação do back-end
 DELETE: Deletar uma informação do back-end 


* Tipos de parâmetros
Query Params: Parâmetros nomeados enviados na rota após o símbolo '?' (filtros/paginação)
Route Params: Parâmetros utilziados para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

// app.get('/users', (request, response) => {
//     return response.send('Hello World');
//     const params = request.query;
//     console.log(params);
//     return response.json({
//         evento: 'Semana OmniStack',
//         aluno: 'Bruno Chang'
//     })
// })

// app.get('/users/:id', (request, response) => {
//     const params = request.params
//     console.log(params);
//     return response.json({
//         evento: 'Semana OmniStack',
//         aluno: 'Bruno Chang'
//     })
// });

/*
Driver: SELECT*FROM users
Query Builder: table('users').select('*').where()
*/

// app.post('/users', (request, response) => {
//     const body = request.body
//     console.log(body);
//     return response.json({
//         evento: 'Semana OmniStack',
//         aluno: 'Bruno Chang'
//     })
// });


module.exports = app;