const http = require('http');

// Crear el servidor
const server = http.createServer((req, res) => {
    res.write('PROGRAMACION COMPUTACIONAL IV ----ESTUDIANTE:ROSA DE LA PAZ CALIX SERRANO');
    res.end();
});

// Especificar en que puerto debe escuchar el servidor las peticiones
server.listen(8081, (err) => {
    if (err) throw err;

    console.log('El servidor se encuentra en el puerto: 8081');
});