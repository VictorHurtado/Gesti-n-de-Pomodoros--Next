import { Pomodoro} from "../../../stores/pomodoro/pomodoro.d";
import {ErrorsCode, pomodoroResponse, Response} from './pomodoro.errors'

const url = 'http://localhost:8080/';

async function sendPomodoroServer(pomodoro:Pomodoro, token:string) {

    return await fetch(url + 'pomodoro/pomodoros/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify(pomodoro)
    })
        .then(async function (response) {
            var pomodoroData:Response; 
            if(response.status > 400){
                console.log(await response.json())
               return pomodoroData = pomodoroResponse[ErrorsCode.ErrorAuht]
            }  
            pomodoroData= {...pomodoroResponse[ErrorsCode.Success], data: await response.json()} as Response
            console.log(pomodoroData)
            return  pomodoroData;
        })
        .catch(function (error) {
            console.log(error);
            return  {...pomodoroResponse[ErrorsCode.Failure], data:error}
        });
}

async function getPomodorosByUser(idUser:number, token:string) {
   
    return await fetch(url + `pomodoro/pomodoros/pomodoroByUser/?userId=${idUser}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
    })
        .then(async function (response) {
       
            var pomodoroData:Response; 
            if(response.status > 400){
                console.log(await response.json())
               return pomodoroData = pomodoroResponse[ErrorsCode.ErrorAuht]
            }  
            pomodoroData= {...pomodoroResponse[ErrorsCode.Success], data: await response.json()} as Response
           
            return  pomodoroData;
        })
        .catch(function (error) {
            console.log(error);
            return  {...pomodoroResponse[ErrorsCode.Failure], data:error}
        });
}


async function getPomodorosStatisticsByUser(idUser:number, token:string) {
   
    return await fetch(url + `pomodoro/pomodoros/pomodoroStatisticsByUser/?userId=${idUser}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
    })
        .then(async function (response) {
       
            var pomodoroData:Response; 
            if(response.status > 400){
                console.log(await response.json())
               return pomodoroData = pomodoroResponse[ErrorsCode.ErrorAuht]
            }  
            pomodoroData= {...pomodoroResponse[ErrorsCode.Success], data: await response.json()} as Response
           
            return  pomodoroData;
        })
        .catch(function (error) {
            console.log(error);
            return  {...pomodoroResponse[ErrorsCode.Failure], data:error}
        });
}

export {
    sendPomodoroServer,
    getPomodorosByUser,
    getPomodorosStatisticsByUser
};