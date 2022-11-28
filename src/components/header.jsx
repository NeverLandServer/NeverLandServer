import Member from "../assets/data/members.json"
import React from "react";

const Header = () => {
    let index = Math.floor(Math.random() * Member.length);
    return (
    <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>NeverLand <span class="text-warning">CZ/SK</span></h1>
              <p class="lead my-4">
                Privátní whitelist server zaměřený na především survival/vanillu.
                Server původně vytvořen pro zábavu od práce a kamarády kteří rádi tvoří něco pěkného společně.
              </p>
            </div>
            <div>{randomAvatar(Member[index].uuid, Member[index].username)}</div>
          </div>
        </div>
      </section>
    )
}

function randomAvatar(uuid, username) {
    return (<img class="avatar" src={"https://visage.surgeplay.com/bust/"+uuid} alt={"rn-"+username} title={username}></img>)
}

export default Header;