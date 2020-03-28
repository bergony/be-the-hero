/**
 *  Rota / recurso
 */

 /**
  * Métodos HTTP
  *
  * GET: buscar/listar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informaçõa no Back-end
  * DELETE: deletar uma informação no back-end
  */

  /**
   * Tipos de parametros
   *
   * Query params: Parâmentros nomeados enviado na rota após "?" ( filtro, paginação )
   * Route params: Parãmentros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoBD, CouchDB, etc
    */

    /**
     * Driver SELECT * FROM users
     * query builder: table('users').select('*').where()
     */

const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;