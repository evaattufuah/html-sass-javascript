
const data = {};

function clearAllSelections() {
    document.querySelectorAll('.container__page').forEach(element => {
        element.className = "container__page";
        element.setAttribute('data-selected', false)
    })
}

document.querySelectorAll('.container__page').forEach(
    element => {
        element.addEventListener('click', (e) => {
            clearAllSelections();
            element.className = "container__page container__page--selected";
            element.setAttribute('data-selected', true);
        })
    }
)


document.getElementById('submit').addEventListener('click', (e) => {
    let selected = 0;
    const arr = [];

    for (const d of document.querySelectorAll('.container__page').values()) {
        arr.push(d.getAttribute('data-selected'))
    }
    
    arr.reduce((acc, x) => {
        if (Boolean(x)) {
           acc = 
       }
   })
   


})