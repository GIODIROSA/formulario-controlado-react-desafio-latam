import React, { useState } from "react";
import PintarError from "./PintarError";
import Swal from "sweetalert2";
import "../assets/css/styleFormulario.css";

const Formulario = () => {
  //objeto para inicializar
  const initialState = {
    formEmail: "",
    formPassword: "",
  };

  //estado almacena los valores de los input. establece una inicializacion
  const [form, setForm] = useState(initialState);

  const [error, setError] = useState(false);

  const { formEmail, formPassword } = form;

  // limpiar los campos del formulario
  const reset = (initialState) => {
    setForm(initialState);
  };

  //texto que envia al momento de validar y es incorrecto
  const textoValidacion = {
    error: "Los datos son incorrectos",
    alert: "alert-danger",
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //submit - envio de formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion

    if (!formEmail.trim() || !formPassword.trim()) {
      setError(true);
      return;
    }

    Swal.fire({
      title: "Éxito",
      text: "¡Formulario enviado!",
      icon: "success",
    });

    reset(initialState);
  };

  return (
    <>
      <div className="contenedor-formulario">
        <div className="row contenedor-card__formulario">
          <div className="col-12 col-ms-12 col-md-4">
            <div className="card mt-5">
              <div className={`card-body ${error ? "claseError" : null}`}>
                <h5 className="card-title text-center">Login</h5>
                <hr />

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Ingresa el correo electrónico"
                      name="formEmail"
                      value={formEmail}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="ingresa la contraseña"
                      name="formPassword"
                      value={formPassword}
                      onChange={handleChange}
                    />
                  </div>

                  {error ? (
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      disabled
                    >
                      Iniciar Sesión
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-dark">
                      Iniciar Sesión
                    </button>
                  )}

                  {error && <PintarError textoValidacion={textoValidacion} />}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulario;
