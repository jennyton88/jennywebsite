const helloButton = document.body.querySelector("#sayHello");

const table1 = document.getElementById("table1");

var pressedOnce = false;

// const table1Rows = table1.rows;

helloButton.addEventListener("click", () => {

    //console.log(table1Rows);
    // console.log(table1.rows[0].cells.length); 
    //console.log(table1.rows[0].cells[1].id); // get their id
    // console.log(table1.rows[0].cells[0].textContent); // get their textcontent
    
    if (!pressedOnce) {
        for (let i=0; i<table1.rows[0].cells.length; i++) {
        
            //let tdID = table1.rows[0].cells[i].id;
            //const tdElement = document.get
            let originalText = table1.rows[0].cells[i].textContent;
            table1.rows[0].cells[i].textContent = "Hello " + originalText + "!";
            
        }

        pressedOnce = true;
    }
});