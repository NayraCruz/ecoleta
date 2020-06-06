// Importar a dependência do sqlite3
/* O verbose() inclui mensagens no terminal sempre que acontecer algo */
const sqlite3 = require("sqlite3").verbose();

// Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

// Utilizar o objeto do banco de dados para nossas operações
/* serialize() roda uma sequência de código */
// db.serialize( () => {
//     // Com comandos SQL eu vou:
//     /* 1. Criar uma tabela */
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `);

//     /* 2. Inserir dados na tabela */
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `

//     const values =
//         [
//             "https://images.unsplash.com/photo-1539692267500-f384fb119654?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//             "Papersider",
//             "Guilherme Gemballa, Jardim América",
//             "Nº 260",
//             "Rio do Sul",
//             "Santa Catarina",
//             "Papéis e papelão"
//         ];

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err);
//         }

//         console.log("Cadastrado com sucesso");
//         console.log(this)
//     }

//     // db.run(query, values, afterInsertData);

//     /* 3. Consultar dados da tabela */
//     /* db.all(`SELECT * FROM places`, function (err, rows) {
//         if (err) {
//             return console.log(err);
//         }

//         console.log("Aqui estão seus registros:");
//         console.log(rows);
//     }); */


//     /* 4. Deletar um dado da tabela */
//     /* db.run(`DELETE FROM PLACES WHERE id = ?`, [1], function (err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("Registro deletado com sucesso!");
        
//     }); */
// });
