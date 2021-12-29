function fetchJSON(param) {
    return fetch(param).then(response => {
        if (response.status >= 400)
            return null

        return response.text
    })   
}

document.addEventListener("DOMContentLoaded", function() { 

    const json = {
        "members": [
            {
                "username": "Wzarek755",
                "description": "Majitel",
                "twitch": "#",
                "youtube": "#"
            },
            {
                "username": "EncryptSL",
                "description": "Technik/Developer",
                "twitch": "https://www.twitch.tv/encryptsl",
                "youtube": "https://www.youtube.com/channel/UCobzi5OuO_iQMXfDpljogAg"
            },
            {
                "username": "korspeed_cz",
                "description": "Kordinátor a Milovník Anime",
                "twitch": "https://www.twitch.tv/korspeeddash",
                "youtube": "#"
            },
            {
                "username": "TheGalasde",
                "description": "Ministr pro alkohol",
                "twitch": "https://www.twitch.tv/thegalasde",
                "youtube": "#"
            },
            {
                "username": "a_patress_o",
                "description": "Ochránce zvířat",
                "twitch": "#",
                "youtube": "#"
            },
            {
                "username": "venh0",
                "description": "Člen",
                "twitch": "#",
                "youtube": "#"
            },
            {
                "username": "Bronze_Player_OP",
                "description": "Člen",
                "twitch": "#",
                "youtube": "#"
            },
            {
                "username": "Mifuyu",
                "description": "Milovnice Anime",
                "twitch": "#",
                "youtube": "#"
            },
            {
                "username": "SirWalterLoxxley",
                "description": "Člen",
                "twitch": "#",
                "youtube": "#"
            },
            {
                "username": "Pikomil",
                "description": "Člen",
                "twitch": "#",
                "youtube": "#"
            },
            {
                "username": "godTomex",
                "description": "Člen",
                "twitch": "#",
                "youtube": "#"
            },
            {
                "username": "FireWaterGame",
                "description": "Streamer asi ?!",
                "twitch": "https://www.twitch.tv/firewater1975",
                "youtube": "#"
            },
            {
                "username": "Snajpy17cz",
                "description": "Člen",
                "twitch": "#",
                "youtube": "#"
            },
            {
                "username": "Lilik_Cze",
                "description": "Člen",
                "twitch": "#",
                "youtube": "#"
            }
        ]
    }

    document.getElementById("membersInList").innerText = `Na serveru je ${json.members.length} členů`

    json.members.forEach(function (item) {
        document.getElementById("members").innerHTML += `
        <div class="col-lg-4">
            <img class="rounded-circle" width="128" height="128" title="avatar" src="https://mc-heads.net/avatar/${item.username}">

        <h2>${item.username}</h2>
            <p>${item.description}</p>
            <p>
                <a class="btn btn-sm btn-secondary" target="_blank" href="${item.twitch}">Twitch</a>
                <a class="btn btn-sm btn-primary" target="_blank" href="${item.youtube}">Youtube</a>
            </p>
        </div>
        `
    })
})