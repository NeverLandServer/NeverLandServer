
    fetch("assets/data/members.json")
    .then(response => {
        response.json()
    })
    .then(json => {

        json.forEach(element => {
            document.getElementById("members").innerHTML = `
                ${element.username}
            `            
        });

    })
