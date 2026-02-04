import express from "express";
const app = express();

app.use(express.static('public'));
app.use(express.json());



app.post('/longitud', (req, res) => {
    const { amount, unitFrom, unitTo } = req.body;

    const conversionRates = {
        meter: 1,
        centimeter: 0.01,
        millimeter: 0.001,
        kilometer: 1000,
        inch: 0.0254,
        yards: 0.9144,
        miles: 1609.34,
    };

    const meters = amount * conversionRates[unitFrom];

    const result = meters / conversionRates[unitTo];

    return res.json(result);

});

app.post('/peso', (req, res) => {

});

app.post('/temperatura', (req, res) => {

});

app.listen(3000, () => {
    console.log('Servidor desplegado en http://localhost:3000');
});