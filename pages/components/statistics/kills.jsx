import axios from "axios";
import React from "react";
import { useState, useEffect } from 'react'

const Kills = () => {

    const [stats, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      axios.get('//encryptsl.cekuj.net/api/minecraft/stats/kills').then((res) => res.data)
        .then((stats) => {
          setData(stats)
          setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!stats) return <p>No profile data</p>

    return (
            <div className="col-md-3">
                <h2>Největší lovci</h2>
                <table className="table table-sm table-borderless text-light">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Jméno</th>
                        <th scope="col">Zabil</th>
                      </tr>
                    </thead>
                    <tbody>
                    {stats && stats.map(stats => (
                          <tr key={ stats.username }>
                            <th scope="row">{ stats.id }</th>
                            <td><img src={"https://visage.surgeplay.com/bust/36/"+stats.uuid}></img> { stats.username }</td>
                            <td>{ stats.kills }</td>
                          </tr>
                    ))}
                    </tbody>
                </table>
            </div>
    )
}
export default Kills;