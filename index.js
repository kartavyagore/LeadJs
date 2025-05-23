let myLeads = []
let ULel = document.getElementById("ul-el")
let LSel = document.getElementById("ls-el")

function saveLead(){
    let inputEl = document.getElementById("leads")
    let lead = inputEl.value;
    if(lead){
         myLeads.push(lead)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        // alert(`Element ${lead} saved.`)
        ULel.innerHTML += ("<li>"+lead+"</li>")
        inputEl.value = "";
    }else{
        alert("Enter a lead first.")
    }
   
}
function deleteLead(){
    if(myLeads.length > 0){
        myLeads = []
       console.log("delete")
        ULel.innerHTML = ""
    }else{
        alert("No elements to delete.")
    }
}
function getAllLead(){
    if(!localStorage.getItem("myLeads")){
        alert("No elements to get")
    }
    LSel.innerHTML = ""
    console.log(localStorage.getItem("myLeads"))
    let arr = JSON.parse(localStorage.getItem("myLeads"))
    console.log(arr)
    for(let i = 0 ; i < arr.length ; i++){
        LSel.innerHTML += "<li>"+arr[i]+"</li>"
    }
    
}

function deleteAllLead(){
        localStorage.removeItem("myLeads")
        LSel.innerHTML = ""
}

function toggleMode(){
    console.log("button pressed.")
    let modeBtn = document.getElementById("modeBtn")
    let body = document.getElementById("bodyTag")
    let sl = document.getElementById("savedLeads")
    let lsl = document.getElementById("localStorageLeads")
    let lh = document.getElementById("labelHead")
    if(modeBtn.value === "Dark Mode"){
        body.style.backgroundColor = "black";
        sl.style.color = "white"
        lsl.style.color = "white"
        lh.style.color = "white"
        modeBtn.value = "Light Mode"
        modeBtn.textContent = "Light Mode"

    }else{
        body.style.backgroundColor = "#f8fafc";
        sl.style.color = "black"
        lsl.style.color = "black"
        lh.style.color = "black"
        modeBtn.value = "Dark Mode"
        modeBtn.textContent = "Dark Mode"
    }
}

