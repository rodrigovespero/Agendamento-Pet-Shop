import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function fetchSchedules({ date }) {
    try {
        const response = await fetch(`${apiConfig.baseUrl}/schedules`)
        const data = await response.json()

        //filtragem por dia e hora
        const scheduleDay = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))
        // const scheduleHour = data.filter((schedule) => dayjs(hour).isSame(schedule.hour, "hour"))

        // alert("Carregamento realizado com sucesso!")
        return scheduleDay

    } catch (error) {
        alert("Não foi possível carregar os agendamentos!")
    }
}