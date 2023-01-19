import React from "react";

const Faq = () => {
    return (
        <section id="faq" className="p-5">
        <div className="container">
          <h2 className="text-center mb-4">Časté dotazy</h2>
          <div className="accordion accordion-flush" id="questions">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#question-one">
                  Pluginy
                </button>
              </h2>
              <div id="question-one" className="accordion-collapse collapse" data-bs-parent="#questions">
                <div className="accordion-body">
                  EchelonCore, JMusicBot Chunky, ChunkyBorder..
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#question-two">
                  Datapacky
                </button>
              </h2>
              <div id="question-two" className="accordion-collapse collapse" data-bs-parent="#questions">
                <div className="accordion-body">
                  <li>armor statues - Tento datapack dovoluje manipulovat s objekty</li>
                  <li>double shulker shells - Tento datapack zdvojnásobuje šanci na drop shulkeru</li>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#question-three">
                  Hosting
                </button>
              </h2>
              <div id="question-three" className="accordion-collapse collapse" data-bs-parent="#questions">
                <div className="accordion-body">
                  Hostujeme na českém kvalitním hostingu víc nic nepotřebuješ vědět.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#question-four">
                  Jak se dostat na server
                </button>
              </h2>
              <div id="question-four" className="accordion-collapse collapse" data-bs-parent="#questions">
                <div className="accordion-body">
                  Bohužel server je soukromý a vybíráme si z řad veřejnosti případně kamarádů.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#question-five">
                  Seed mapy
                </button>
              </h2>
              <div id="question-five" className="accordion-collapse collapse" data-bs-parent="#questions">
                <div className="accordion-body">
                  Seed mapy nedáváme.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Faq;