let date = new Date()


let currentDate = date.toLocaleDateString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short'
})
let getDateId = document.getElementById('date')
getDateId.innerHTML = currentDate