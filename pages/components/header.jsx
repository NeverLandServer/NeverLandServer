import Member from "/json/members.json"
import {React, useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {

  const [image, setImage] = useState("")

  const getImage = () => {
    let index = Math.floor(Math.random() * Member.length);
    setImage(<Image className="avatar" priority src={"https://visage.surgeplay.com/bust/"+Member[index].uuid} width={250} height={250} alt={'rn-'+Member[index].username} title={Member[index].username}/>)
  }

  useEffect(() => {
      getImage()
  }, [])
    return (
    <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>NeverLand <span className="text-warning">CZ/SK</span></h1>
              <p className="lead my-4">
                Privátní whitelist server zaměřený na především survival/vanillu.
                Server původně vytvořen pro zábavu od práce a kamarády kteří rádi tvoří něco pěkného společně.
              </p>
            </div>
            <div>{image}</div>
          </div>
        </div>
      </section>
    )
}

export default Header;