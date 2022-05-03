function socialButtons(link, btnName, clazzName) {
    if (link === undefined) 
        return ``
    else if (link === "#")
        return ``
    else
        return `<a class="btn btn-sm ${clazzName}" target="_blank" href="${link}" title="${btnName}"><i class="bi bi-${btnName.toLowerCase()}"></i> ${btnName}</a>`
}

document.addEventListener("DOMContentLoaded", function() {
    fetch('assets/data/members.json').then((response) => {
        return response.json();
    }).then((data) => {
        document.getElementById("membersInList").innerText = `Na serveru je ${data.members.length} členů`
        data.members.forEach(function (item) {
            document.getElementById("members").innerHTML += `
            <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img
                src="https://mc-heads.net/avatar/${item.username}"
                  class="rounded-circle mb-3"
                  alt="avt_${item.username}"
                  title="${item.username}"
                />
                <h3 class="card-title mb-3">${item.username}</h3>
                <p class="card-text">
                    <span class="badge bg-secondary text-white">${item.description}</span>
                </p>
                ${socialButtons(item.twitch, "Twitch", "btn-warning")}
                ${socialButtons(item.youtube, "Youtube", "btn-primary")}
                ${socialButtons(item.instagram, "Instagram", "btn-secondary")}
              </div>
            </div>
          </div>
            `
        })
    })
    fetch('assets/data/members.json').then((response) => {
        return response.json();
    }).then((data) => {
        var rand = Math.floor(Math.random()*data.members.length);
        document.getElementById("randomAv").innerHTML = `<img class="avatar" src="https://visage.surgeplay.com/bust/${data.members[rand].uuid}">`
    })
})