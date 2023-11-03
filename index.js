const express = require('express')
const bodyParser = require('body-parser')
const productosController = require('./productos/productos.controller')
const app = express()
app.use(bodyParser.json())
app.route('/productos')
.get(async (req, res) => {
try {
const listaProductos = await productosController.obtenerListaProductos();
res.json(listaProductos);
} catch (err) {
console.error(err.message);
res.status(500).send('Error al obtener la lista de productos');
}
})
.post((req, res) => {
})

app.get('/', (req, res) => {
res.send('Backend productos')
})
app.listen(3000, () => {
console.log('Activado localhost:3000.')
})