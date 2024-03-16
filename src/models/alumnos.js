import { Schema, model } from "mongoose";

const esquemaAlumno = Schema({
    num_control : {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    nombre : {
        type: String,
        required: true
    }
});

export default model('Alumno', esquemaAlumno);