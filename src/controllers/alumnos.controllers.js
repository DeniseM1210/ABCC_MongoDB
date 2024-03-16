import Alumno from "../models/alumnos";

export const renderAlumnos = async (req, res) => {
    try{
        const alumnos = await Alumno.find().lean();
        res.render("index", {
            alumnos,
        });
    } catch (error) {
        console.log({error});
    }
};

export const crearAlumno = async (req, res, next) => {
    try {
      const alumno = new Alumno(req.body);
      await alumno.save();
      res.redirect("/");
    } catch (error) {
      
    }
  };
  
  export const alumnoToggleDone = async (req, res, next) => {
    let { id } = req.params;
    const alumno = await Alumno.findById(id);
    alumno.done = !alumno.done;
    await alumno.save();
    res.redirect("/");
  };
  
  export const renderAlumnoEdit = async (req, res, next) => {
    const alumno = await Alumno.findById(req.params.id).lean();
    res.render("edit", { alumno });
  };
  
  export const editarAlumno = async (req, res, next) => {
    const { id } = req.params;
    await Alumno.updateOne({ _id: id }, req.body);
    res.redirect("/");
  };
  
  export const eliminarAlumno = async (req, res, next) => {
    let { id } = req.params;
    await Alumno.remove({ _id: id });
    res.redirect("/");
  };