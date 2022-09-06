const mothDays = document.querySelector(".days");


const generateDays = (month) => {
    let currentMonth = month - 1;
    let currentYear = new Date().getFullYear()
    let date = new Date(currentYear, currentMonth, 1);
    

    for(let i = 0; i < 35; i++) {
        if (i + 1 > date.getDay()) {
            if (i != 0) {
                let currentDate = new Date();

                if (date.getDate() == currentDate.getDate() &
                    date.getMonth() == currentDate.getMonth() &
                    date.getFullYear() == currentDate.getFullYear()) 
                {
                    mothDays.innerHTML += `
                    <span class='activeDay'><p>${date.getDate()}</p></span>
                `
                } 
                else {
                    mothDays.innerHTML += `
                        <span><p>${date.getDate()}</p></span>
                    `
                }


                
            } 
    
            date.setDate(date.getDate() + 1);
    
            if (date.getMonth() != currentMonth) break;
        } else {
            mothDays.innerHTML += `
                    <blank></blank>
                `
        }
        
    }
}


generateDays(8);