import dayjs from "dayjs";
import { fetchSchedules } from "../api/fetch-schedules";
import { showSchedules } from "../api/show-schedules";

// Variaveis referentes ao form
const form = document.querySelector("form");
const selectedDate = document.getElementById("daily-schedules");
const selectedScheduleDate = document.getElementById("schedule-day");
const currentTime = document.getElementById("schedule-hour");
const today = dayjs(new Date()).format("YYYY-MM-DD");
const time = dayjs().format("HH:mm");

// Carrega a data atual e bloqueia anteriores
selectedDate.value = today;
selectedDate.min = today;

// Carrega a data atual para o agendamento e bloqueia anteriores
selectedScheduleDate.value = today;
selectedScheduleDate.min = today;

currentTime.value = time;

document.addEventListener("DOMContentLoaded", daySchedules);

export async function daySchedules() {
    const date = selectedDate.value

    const allSchedules = await fetchSchedules({ date })
    // console.log(allSchedules)

    // Exibe os agendamentos
    showSchedules({allSchedules})
}

selectedDate.addEventListener("change", daySchedules);