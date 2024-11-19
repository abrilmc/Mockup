import dbClient from "../config/dbClient.js";

class alumnosModelo {
    async create(alumno) {
        const colAlumnos = dbClient.db.collection('alumnos');
        return await colAlumnos.insertOne(alumno)
    }

    async getAll() {
        const colAlumnos = dbClient.db.collection('alumnos');
        return await colAlumnos.find({}).toArray();
    }
}

export default new alumnosModelo;