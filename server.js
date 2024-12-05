const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/register-click", (req, res) => {
    const clickData = `Clic registrado a las: ${new Date().toLocaleString()}\n`;

    // Guarda los clics en un archivo
    fs.appendFile("clicks.log", clickData, (err) => {
        if (err) {
            console.error("Error al guardar el clic:", err);
            return res.status(500).send("Error al registrar el clic.");
        }
        console.log("Clic registrado:", clickData.trim());
        res.status(200).send("Clic registrado correctamente.");
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
