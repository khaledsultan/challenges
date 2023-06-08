values = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"];

function points(games) {
    let p =0 ;
    for (const result in games) {
        let a = games[result][0]
        let b = games[result].charAt(2)
        // console.log(a);
        if (a > b) {
            p = p + 3 ;
        } else {
            p = p
        }
        
    }
    return p
}

points(values)
console.log(points(values));
