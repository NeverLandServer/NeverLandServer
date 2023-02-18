import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import axios from "axios"

const PlayerPage = ({ player }) => {
    return (
        <div className="container col-md-9 col-lg-10 px-md-4 my-3">
            <section className="p-1 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h5 className="display-5 fw-bold">{player?.username} #{player?.id}</h5>
                    <p className="col-md-8 fs-4"><Link href="/" className="text-link">ZPĚT</Link></p>
                </div>
            </section>

            <section className="row">

                <div className="col-xl-4">
                    <div className="card mb-3 text-center">
                        <div className="card-header text-bg-dark">AKTUÁLNÍ SKIN</div>
                        <div className="card-body">
                            <img src={"https://visage.surgeplay.com/full/200/" + player?.uuid} className="rounded" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="card mb-3 text-center">
                        <div className="card-header text-bg-dark">ZÁKLADNÍ STATISTIKY</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <div className="font-size-h3 font-w500">
                                        <span>{player?.blocks}</span>
                                    </div>
                                    <p className="text-muted mt-2 mb-0">Položené bloky</p>
                                </div>
                                <div className="col-4">
                                    <div className="font-size-h3 font-w500">
                                        <span>{player?.kills}</span>
                                    </div>
                                    <p className="text-muted mt-2 mb-0">Zabití</p>
                                </div>
                                <div className="col-4">
                                    <div className="font-size-h3 font-w500">
                                        <span>{player?.deaths}</span>
                                    </div>
                                    <p className="text-muted mt-2 mb-0">Úmrtí</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PlayerPage;

export async function getStaticPaths() {
    const response = await axios.get('https://encryptsl.cekuj.net/api/minecraft/stats/players')
    const data = await response.data

    console.log(data)

    return {
        paths : data.map(p => (
            {
                params: { uuid : p.full_uuid.toString() }
            }
        )),
        fallback: true
    }
}

export async function getStaticProps({params}) {
    const response = await axios.get(`https://encryptsl.cekuj.net/api/minecraft/player/${params.uuid}`)
    const player = await response.data
    return {
        props: {
            player
        },
        revalidate: 1,
    }
}
