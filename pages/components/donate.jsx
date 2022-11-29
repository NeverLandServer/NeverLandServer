import React from "react";

const Donate = () => {

    return (
        <section className="bg-primary text-light p-5">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <h3 className="mb-3 mb-md-0">DOBROVOLNÝ PŘÍSPĚVEK SERVERU</h3>
            <div className="donate">
              <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="LWS7RACNMSNH6" />
                <button type="submit" className="btn btn-warning btn-lg" name="submit"
                  title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button"><i
                    className="bi bi-cash-coin"></i> DONATE</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )

}

export default Donate;