import React from "react";

const About = () => {

    return (
        <section className="p-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="card bg-warning text-dark">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-tools"></i>
                  </div>
                  <h3 className="card-title mb-3">CUSTOM PLUGINY</h3>
                  <p className="card-text">
                    Na serveru máme vlastní pluginy a systém.
                    Který navzájem respektujeme.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-secondary text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <h3 className="card-title mb-3">HOSTING</h3>
                  <p className="card-text">
                    Hostujeme na stroji který nám vystačí na naše náročné projekty a potřeby.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-primary text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-people"></i>
                  </div>
                  <h3 className="card-title mb-3">WHITELIST</h3>
                  <p className="card-text">
                    Server je soukromý a proto se na něj dostane méně hráčů.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )

}

export default About;