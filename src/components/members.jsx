import React from "react";
import Member from "../assets/data/members.json"

const Members = () => {
    return (
        <section id="memberlist" className="p-5 bg-primary">
        <div className="container">
          <h2 className="text-center text-white">ČLENOVÉ SERVERU</h2>
          <p className="lead text-center text-white mb-5">
            <span id="membersInList"></span>
          </p>
          <div className="row g-4">
            {
             Member && Member.map(record => {
                return (
                <div className="col-md-6 col-lg-3" key={record.username}>
                <div className="card">
                    <div className="card-body">
                        <div className="row g-4">
                            <div className="col col-md-3">
                                <h5 className="card-title">
                                    <img src={"https://minotar.net/avatar/"+record.uuid} className="rounded-circle mb-3" alt={"avt"+record.username} title={record.username} height="50" />
                                </h5>
                            </div>
                            <div className="col-md">
                                {record.username}
                                <p><span className="badge bg-secondary text-white">{record.description}</span></p>
                            </div>
                        </div>
                            {socialButtons(record.twitch, "Twitch", "btn-warning")}
                            {socialButtons(record.youtube, "Youtube", "btn-primary")}
                            {socialButtons(record.instagram, "Instagram", "btn-secondary")}
                            {socialButtons(record.donate, "cash-coin", "btn-success")}
                    </div>
                </div>
              </div>
             )})
            }
            </div>
          </div>
      </section>
    )

}

function socialButtons(link, btnName, clazzName) {
    if (link === undefined)
        return ``
    else if (link === "#")
        return ``
    else
        return (<a className={"btn btn-sm m-1 " + clazzName} target="_blank" href={link} title={btnName} rel="noreferrer" role="button"><i className={"bi bi-" + btnName.toLowerCase()}></i></a>)
}
export default Members;