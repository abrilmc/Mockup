import dbClient from "../config/dbClient.js";

class alumnosModelo {
    async create(alumno) {
        const colAlumnos = dbClient.db.collection('alumnos');
        return await colAlumnos.insertOne(alumno)
    }
}

export default new alumnosModelo;