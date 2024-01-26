const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Base de datos simulada de laptops
let laptops = [
  { id: 1, marca: "HP", procesador: "Intel Core i3", memoria: "8 GB", disco: "256 GB" },
  { id: 2, marca: "Dell", procesador: "Intel Core i7", memoria: "16 GB", disco: "512 GB" },
  { id: 3, marca: "Lenovo", procesador: "AMD Ryzen 5", memoria: "12 GB", disco: "1 TB" },
  { id: 4, marca: "Apple", procesador: "Intel Core i5", memoria: "8 GB", disco: "256 GB" },
  { id: 5, marca: "Acer", procesador: "AMD Ryzen 3", memoria: "4 GB", disco: "128 GB" }
];

// Recuperar todas las laptops
app.get('/laptops', (req, res) => {
  res.json(laptops);
});

// Recuperar una laptop por su id
app.get('/laptops/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const laptop = laptops.find((laptop) => laptop.id === id);
  console.log("ID recuperado: ",id)
  res.json(laptop);
  });

// Insertar una laptop nueva
app.post('/laptops', (req, res) => {
  const laptop = req.body;
  laptop.id = laptops.length + 1;
  laptops.push(laptop);
  console.log(req.body);
  res.json(laptop);
});

// Actualizar una laptop por su id
app.put('/laptops/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedLaptop = req.body;
  updatedLaptop.id = id;
  laptops = laptops.map((laptop) => {
    if (laptop.id === id) {
      return updatedLaptop;
    } else {
      return laptop;
    }
  });
  console.log(req.body);
  res.json(updatedLaptop);
});

// Eliminar una laptop por su id
app.delete('/laptops/:id', (req, res) => {
  const id = parseInt(req.params.id);
  laptops = laptops.filter((laptop) => laptop.id !== id);
  console.log("Laptop eliminada con id:", id);
  res.sendStatus(200);
  res.send({id:id});
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});