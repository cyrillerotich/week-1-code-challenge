function calculateDemeritPoints(speed){
    let speedlimit = 70;
        if(speed <= speedlimit){
        console.log(`ok`)
    }
        else {
        let demeritpoints=Math.floor;((speed-70)/5)
        
        if(demeritpoints >12){
            console.log(`License suspended`)
        }
        else {
            console.log(`points:`,demeritpoints)
        }
    }
}