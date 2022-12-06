import React from "react";
import Member from "/json/members.json"
import Image from "next/image";

const Members = () => {
    return (
        <section id="memberlist" className="p-5 member-background">
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
                        <h5 className="card-title text-center">
                            <Image src={"https://minotar.net/avatar/"+record.uuid} className="rounded-circle" alt={'avt'+record.username} title={record.username} height="100" width="100" /> 
                        </h5>
                        <div className="text-center">
                            <p>{record.username}</p>
                            <span className="badge bg-secondary text-white">{record.description}</span>
                        </div>
                        <div className="text-center">
                            {socialButtons(record.twitch, "Twitch", "btn-warning")}
                            {socialButtons(record.youtube, "Youtube", "btn-primary")}
                            {socialButtons(record.instagram, "Instagram", "btn-secondary")}
                            {socialButtons(record.donate, "cash-coin", "btn-success")}
                        </div>
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