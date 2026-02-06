const body = document.body;
const blurDiv = document.getElementById("blur-div");
const newSchedule = document.getElementById("to-schedule");
const overlay = document.getElementById("overlay");
const closeForm = document.getElementById("close-form");

newSchedule.addEventListener("click", () =>{
    body.classList.add("no-scroll");
    overlay.classList.remove("hidden");
    blurDiv.classList.remove("hidden");
})

closeForm.addEventListener("click", ()=>{
    closeOverlay()
})

export function closeOverlay(){
    overlay.classList.add("hidden");
    body.classList.remove("no-scroll");
    blurDiv.classList.add("hidden");
}