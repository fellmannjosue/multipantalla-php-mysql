const db = require('../models/database');

// Controlador para obtener todas las computadoras
exports.getComputadoras = (req, res) => {
    db.query('SELECT * FROM registro_computadora', (err, result) => {
        if (err) {
            console.error('Error al obtener las computadoras: ' + err);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.json(result);
        }
    });
};

// Controlador para obtener todos los televisores
exports.getTelevisores = (req, res) => {
    db.query('SELECT * FROM registro_tv', (err, result) => {
        if (err) {
            console.error('Error al obtener los televisores: ' + err);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.json(result);
        }
    });
};

// Controlador para obtener todos los accesorios
exports.getAccesorios = (req, res) => {
    db.query('SELECT * FROM registro_accesorios', (err, result) => {
        if (err) {
            console.error('Error al obtener los accesorios: ' + err);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.json(result);
        }
    });
};

// Controlador para registrar una nueva computadora
exports.registrarComputadora = (req, res) => {
    const { marca, modelo, ip, aula, maestro } = req.body;
    db.query('INSERT INTO registro_computadora (marca, modelo, ip, aula, maestro) VALUES (?, ?, ?, ?, ?)', [marca, modelo, ip, aula, maestro], (err, result) => {
        if (err) {
            console.error('Error al registrar la computadora: ' + err);
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.status(201).json({ message: 'Computadora registrada exitosamente' });
        }
    });
};

// Agrega controladores para registrar televisores, accesorios y usuarios si es necesario
