function fetchJSON(param) {
    return fetch(param).then(response => {
        if (response.status >= 400)
            return null

        return response.text
    })   
}

document.addEventListener("DOMContentLoaded", function() { 

    const json = fetchJSON("data/members.json")

    json.members.forEach(function (item) {
        document.getElementById("members").innerHTML += `
        <div class="col-lg-4">
            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>${item.username}</h2>
            <p>${item.description}</p>
            <p>
                <a class="btn btn-secondary" href="${item.twitch}">Twitch</a>
                <a class="btn btn-primary" href="${item.youtube}">Youtube</a>
            </p>
        </div>
        ` 
    })
})