import { Router } from 'express';
import Alumno from '../models/alumnos';
import {
    crearAlumno,
    eliminarAlumno,
    renderAlumnos,
    alumnoToggleDone,
    renderAlumnoEdit,
    editarAlumno,
} from "../controllers/alumnos.controllers";


const router = Router();

router.get("/", renderAlumnos);

router.post("/alumnos/add", crearAlumno);

router.get("/alumnos/:id/troggleDone", alumnoToggleDone);

router.get("/alumnos/:id/edit", renderAlumnoEdit);

router.post("/alumnos/:id/edit", editarAlumno);

router.get("/alumnos/:id/delete", eliminarAlumno);

export default router;