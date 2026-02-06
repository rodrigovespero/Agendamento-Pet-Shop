import { scheduleRemove } from "../api/remove-schedule"
import { daySchedules } from "./load-schedules"

const periods = document.querySelectorAll("#scheduled-pets")

// Gera evento de click para cada período
periods.forEach((period) =>{
    period.addEventListener("click", async (event) =>{
        if (event.target.tagName === "P"){
            const item = event.target.closest("div")
            console.log(item)

            const { id } = item.dataset

            if(id){
                const isConfirm = confirm("Tem certeza que deseja remover o agendamento?")
                // Faz a requisição para cancelar na api
                if(isConfirm){
                    await scheduleRemove({id})
                    daySchedules()
                }
            }
        }
    })
})