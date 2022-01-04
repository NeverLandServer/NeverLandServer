function socialButtons(link, btnName, clazzName) {
    if (link === undefined) 
        return ``
    else if (link === "#")
        return ``
    else
        return `<a class="btn btn-sm ${clazzName}" target="_blank" href="${link}">${btnName}</a>`
}

document.addEventListener("DOMContentLoaded", function() {
    fetch('assets/data/members.json').then((response) => {
        return response.json();
    }).then((data) => {
        document.getElementById("membersInList").innerText = `Na serveru je ${data.members.length} členů`
        data.members.forEach(function (item) {
            document.getElementById("members").innerHTML += `
            <div class="col-lg-4 mb-2">
                <img class="rounded-circle" width="60" height="60" title="${item.username}" src="https://mc-heads.net/avatar/${item.username}">
    
            <h2>${item.username}</h2>
                <p><span class="badge bg-secondary text-white">${item.description}</span></p>
                <p>
                    ${socialButtons(item.twitch, "Twitch", "btn-warning")}
                    ${socialButtons(item.youtube, "Youtube", "btn-primary")}
                </p>
            </div>
            `
        })
    })
})