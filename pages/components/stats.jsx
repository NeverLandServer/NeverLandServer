import React from "react";
import Blocks from "./statistics/blocks";
import Deaths from "./statistics/deaths";
import Kills from "./statistics/kills";

const Stats = () => {

    return (
        <section className="row justify-content-center p-5 bg-dark text-light" id="stats">
            <h1 className="text-center">Statistiky</h1>
            <Kills />
            <Blocks />
            <Deaths />
        </section>
    )
}
export default Stats;