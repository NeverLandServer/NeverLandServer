import Image from 'next/image'
import React from "react";

const History = () => {

    return (
        <section id="history" className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <Image src="/assets/emerald.webp" className="img-fluid" width={500} height={500} alt='emerald' />
            </div>
            <div className="col-md p-5">
              <h2>Historie Serveru</h2>
              <p className="lead">
                Soupiska historie co se na serveru stala.
              </p>
              <div className="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
              <div className="vertical-timeline-item vertical-timeline-element">
                  <div>
                    <span className="vertical-timeline-element-icon bounce-in">
                      <i className="badge badge-dot badge-dot-xl bg-success"> </i>
                    </span>
                    <div className="vertical-timeline-element-content bounce-in">
                      <p>Zabití draka.</p>
                      <span className="vertical-timeline-element-date">2.12.2022</span>
                    </div>
                  </div>
                </div>
                <div className="vertical-timeline-item vertical-timeline-element">
                  <div>
                    <span className="vertical-timeline-element-icon bounce-in">
                      <i className="badge badge-dot badge-dot-xl bg-success"> </i>
                    </span>
                    <div className="vertical-timeline-element-content bounce-in">
                      <p>Začátek sezóny 2.</p>
                      <span className="vertical-timeline-element-date">14.6.2022</span>
                    </div>
                  </div>
                </div>
                <div className="vertical-timeline-item vertical-timeline-element">
                  <div>
                    <span className="vertical-timeline-element-icon bounce-in">
                      <i className="badge badge-dot badge-dot-xl bg-success"> </i>
                    </span>
                    <div className="vertical-timeline-element-content bounce-in">
                      <p>Konec sezóny 1.</p>
                      <span className="vertical-timeline-element-date">11.6.2022</span>
                    </div>
                  </div>
                </div>
                <div className="vertical-timeline-item vertical-timeline-element">
                  <div>
                    <span className="vertical-timeline-element-icon bounce-in">
                      <i className="badge badge-dot badge-dot-xl bg-success"> </i>
                    </span>
                    <div className="vertical-timeline-element-content bounce-in">
                      <p>Dokončen Projekt metro a nether spawn.</p>
                      <span className="vertical-timeline-element-date">31.1.2022</span>
                    </div>
                  </div>
                </div>
                <div className="vertical-timeline-item vertical-timeline-element">
                  <div>
                    <span className="vertical-timeline-element-icon bounce-in">
                      <i className="badge badge-dot badge-dot-xl bg-success"> </i>
                    </span>
                    <div className="vertical-timeline-element-content bounce-in">
                      <p>Zabit druhý drak po resetu endu.</p>
                      <span className="vertical-timeline-element-date">3.1.2022</span>
                    </div>
                  </div>
                </div>
                <div className="vertical-timeline-item vertical-timeline-element">
                  <div>
                    <span className="vertical-timeline-element-icon bounce-in">
                      <i className="badge badge-dot badge-dot-xl bg-success"> </i>
                    </span>
                    <div className="vertical-timeline-element-content bounce-in">
                      <p>Spuštěna verze <b>1.18.1</b> a resetován end.</p>
                      <span className="vertical-timeline-element-date">28.12.2021</span>
                    </div>
                  </div>
                </div>
                <div className="vertical-timeline-item vertical-timeline-element">
                  <div>
                    <span className="vertical-timeline-element-icon bounce-in">
                      <i className="badge badge-dot badge-dot-xl bg-success"> </i>
                    </span>
                    <div className="vertical-timeline-element-content bounce-in">
                      <p>Spuštěn projekt stavba metra a design. <b>Author Metra Korspeed a další..</b></p>
                      <span className="vertical-timeline-element-date">11.12.2021</span>
                    </div>
                  </div>
                </div>
                <div className="vertical-timeline-item vertical-timeline-element">
                  <div>
                    <span className="vertical-timeline-element-icon bounce-in">
                      <i className="badge badge-dot badge-dot-xl bg-success"> </i>
                    </span>
                    <div className="vertical-timeline-element-content bounce-in">
                      <p>Zabit první drak na serveru.</p>
                      <span className="vertical-timeline-element-date">8.7.2021</span>
                    </div>
                  </div>
                </div>
                <div className="vertical-timeline-item vertical-timeline-element">
                  <div>
                    <span className="vertical-timeline-element-icon bounce-in">
                      <i className="badge badge-dot badge-dot-xl bg-warning"> </i>
                    </span>
                    <div className="vertical-timeline-element-content bounce-in">
                      <p>Dne 30.6.2021 - První spuštění serveru.</p>
                      <span className="vertical-timeline-element-date">30.6.2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )

}

export default History;