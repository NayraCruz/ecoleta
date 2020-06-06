// Importar a dependência do sqlite3
/* O verbose() inclui mensagens no terminal sempre que acontecer algo */
const sqlite3 = require("sqlite3").verbose();

// Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db");

/* db.run(`DELETE FROM PLACES WHERE id = ?`, [20], function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Registro deletado com sucesso!");

    }); */