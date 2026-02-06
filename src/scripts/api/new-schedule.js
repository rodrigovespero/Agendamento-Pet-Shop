import { apiConfig } from "./api-config";

export async function newSchedule({id, tutorName, petName, phoneNumber, service, when}) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id, tutorName, phoneNumber, petName, service, when}),
        })

        alert("Agendamento realizado com sucesso!")
    } catch (error) {
        alert("Não foi possível realizar o agendamento!")
    }
}