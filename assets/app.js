    fetch("assets/data/members.json")
    .then(response => {
        json = response.json()
        data = JSON.parse(json)
        data.forEach(element => {
            document.getElementById("members").innerHTML = `
            <div class="col-lg-4">
                <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
    
            <h2>${element.username}</h2>
                <p>${element.description}</p>
                <p>
                    <a class="btn btn-secondary" href="${element.twitch}">Twitch</a>
                    <a class="btn btn-primary" href="${element.youtube}">Youtube</a>
                </p>
            </div>
            `
        });
    })