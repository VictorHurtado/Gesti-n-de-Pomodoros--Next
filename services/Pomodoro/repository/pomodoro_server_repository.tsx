import { Pomodoro } from "../../../stores/pomodoro/pomodoro.d";
import {sendPomodoroServer,getPomodorosByUser,getPomodorosStatisticsByUser} from '../api/pomodoro_server_api';

async function savePomodoro(pomodoro:Pomodoro,token:string){

    const response=  await sendPomodoroServer(pomodoro, token);
  
    return response;

}
async function getPomodoros(idUser:number, token:string) {
    const response = await getPomodorosByUser(idUser,token);
    return response;    
}
async function getPomodorosStatistics(idUser:number, token:string) {
    const response = await getPomodorosStatisticsByUser(idUser,token);
    return response;    
}
export {savePomodoro,getPomodoros,getPomodorosStatistics}