const { Pool } = require('pg');
const pool = new Pool({
user: "hhpqzhpe",
host: "trumpet.db.elephantsql.com",
database: "hhpqzhpe",
password: 'sdsvUnCMPcXqPy8PDYZNFEDBcl_Ck7Un',
port: 5432,
});
function obtenerListaProductos() {
async function leerDatos() {
const client = await pool.connect();
try {
const query = 'SELECT id, titulo, descripcion, precio FROM productos';
const result = await client.query(query);
return result.rows;
} catch (error) {
console.error('Error al leer datos:', error);
} finally {
client.release();
}
}

return leerDatos()
}

module.exports = {
obtenerListaProductos
}
