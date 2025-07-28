function Login() {
    return (
        <>
            <div className="navbar navbar-dark bg-primary mb-4">
                <h1 className="navbar-brand p-2">Sistema de Gestion de Finanzas Personales</h1>
            </div>

            <div
                className="d-flex justify-content-center align-middle mt-4"
            >

                <form
                    action=""
                    className="card w-25"
                >
                    <div className="card-header d-flex justify-content-center">
                        <h4>Iniciar sesión</h4>
                    </div>

                    <div className="card-body">
                        <br />
                        <label
                            htmlFor=""
                            className="mb-2"
                        >
                            Usuario:
                        </label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text fs-4">
                                    <i className="fa-solid fa-user"></i>
                                </div>
                            </div>
                            <input
                                type="text"
                                placeholder="Ingrese su usuario"
                                className="form-control"
                            />

                        </div>
                        <br />
                        <label
                            htmlFor=""
                            className="mb-2"
                        >
                            Contraseña:
                        </label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">

                                <div className="input-group-text fs-4">
                                    <i className="fa-solid fa-key"></i>
                                </div>
                            </div>
                            <input
                                type="text"
                                placeholder="Ingrese su contraseña"
                                className="form-control"
                            />

                        </div>
                    </div>

                    <br />
                    <div className="card-footer">
                        <div className="row">

                            <div className="col-lg-8"></div>
                            <div className="col-lg-4">
                                <button className="btn btn-primary">Ingresar</button>
                            </div>

                        </div>
                    </div>

                </form>

            </div>

        </>
    )
}

export default Login