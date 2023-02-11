import React from "react";

const ErrorPage = () => {
    return (
        <section className="container my-5">
            <div className="text-center">
                <h1>Uživatel nebyl nalezen !</h1>
                <small className="lead">Tento uživatel nemá přiřazené statistiky !</small>
            </div>
        </section>
    )
}

export default ErrorPage();