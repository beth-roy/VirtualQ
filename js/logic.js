let loadStatusPage =  () => {   
    window.location.href='./status.html'
}
let loadStatusPage2 =  () => {   
    window.location.href='./status2.html'
}
let loadErrandsPage =  () => {   
    window.location.href='./Errands.html'
}

let backErrandsPage = () => {
    window.location.href='./Errands.html'
}

let searchPage = () => {
    let query = document.getElementById('search-query').value
    
    window.location.href = "./search_result.html?query=" + query 
    console.log(query)
}

let cafePage = () => {
    window.location.href = "./search_result.html?query=cafe" 
    console.log(query)
}


let gasPage = () => {
    window.location.href = "./search_result.html?query=gas_station" 
    console.log(query)
}

let libraryPage = () => {
    window.location.href = "./search_result.html?query=library"
    console.log(query)
}

let loadHomePage =  () => {   
    window.location.href='./index.html'
}