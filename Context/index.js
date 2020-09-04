
var friendNames = ['abhishek', 'naidu', 'bunga', 'abhay', 'arnav']
var locations = ['Delhi', 'Mumbai', 'Los Angelos', 'Las Vegas', 'Hyderabad', 'Bilaspur', 'Vizag', 'Kurnool', 'Chennai', 'Raipur']
var weapons = ['bomb', 'gun', 'eraser', 'paper-bomb', 'AK-47', 'Rifles', 'Machine guns', 'Grenades', 'Flare guns', 'Sidearms', 
'Mortars', 'Support guns', 'Shotguns', 'Edged weapons', 'Anti-aircraft', 'Edged', 'pin', 'pen', 'pencil', 'marker']

for(var i=1; i<=100; i++) {
    var h3 = document.createElement('h3')
    h3.className = 'accusation' + i
    h3.innerHTML = 'Accusation' + ' ' + i
    // because of var, we need to use closure here, so that we can take the snapshot of each and every Iteration with it's index.
    h3.addEventListener('click', function (index) {
        return function() {
            console.log('Accusation' + ' ' + index + ':' + 'I accuse' + ' ' + friendNames[index%5] + ' ' + 'with the' + ' ' + weapons[index%20] + ' ' + 'in the' + ' ' + locations[index%10]) 
        }
    }(i))
    // (function(index) {
    //     h3.addEventListener('click', function() {
    //         console.log('Abhishek' + ' ' + index)
    //     })
    // })(i)
    document.body.appendChild(h3)
}