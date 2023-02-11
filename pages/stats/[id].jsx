import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import ErrorPage from "./ErrorPage"
import Link from "next/link"

const PlayerPage = () => {
    const router = useRouter();
    const {id} = router.query
    const [player, setData] = useState([]);
    const [error, setError] = useState([]);
    const [playerImg, setImg] = useState("")
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {

        if (!id) {
            return;
        }

        const statsRequest = async () => {
            await axios.get(`//encryptsl.cekuj.net/api/minecraft/player/${id}`).then(res => res.data ).then((stats) => {
                setImg(<img src={"https://visage.surgeplay.com/full/200/" + stats.uuid} className="rounded" />)
                setError(stats)
                setData(stats)
                setLoading(false)
            }).catch(e => {
                setError(e.response.data.error)
            })
        }
        statsRequest()
    }, [id]);

    if (isLoading) return <p>Loading...</p>
    if (error == 'Database not have data.') {
        return (ErrorPage)
    } else {
        return (
            <div className="container col-md-9 col-lg-10 px-md-4 my-3">
                <section className="p-1 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h5 className="display-5 fw-bold">{player.username} #{player.id}</h5>
                        <p className="col-md-8 fs-4"><Link href="/" className="text-link">ZPĚT</Link></p>
                    </div>
                </section>
    
                <section className="row">
    
                    <div className="col-xl-4">
                        <div className="card mb-3 text-center">
                            <div className="card-header text-bg-dark">AKTUÁLNÍ SKIN</div>
                            <div className="card-body">
                                {playerImg}
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
                                            <span>{player.blocks}</span>
                                        </div>
                                        <p className="text-muted mt-2 mb-0">Položené bloky</p>
                                    </div>
                                    <div className="col-4">
                                        <div className="font-size-h3 font-w500">
                                            <span>{player.kills}</span>
                                        </div>
                                        <p className="text-muted mt-2 mb-0">Zabití</p>
                                    </div>
                                    <div className="col-4">
                                        <div className="font-size-h3 font-w500">
                                            <span>{player.deaths}</span>
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
}

export default PlayerPage;