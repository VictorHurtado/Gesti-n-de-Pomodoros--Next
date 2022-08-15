import { ResponseAuth } from '../api/authUser.errors';
import {verifyUser,getDetailUser} from '../api/pomodoro_server_api'
import {User}from '../api/userInterface.d'

async function authenticationUserWithModoroServer(userAuth:User){
    // const usersData = await getAllUsers();
    let userData:ResponseAuth;
    const userAccessInfo:ResponseAuth = await verifyUser(userAuth)
    if(userAccessInfo.status ==='error') return userAccessInfo
    userData=userAccessInfo

    const userInformation= await getDetailUser(userAuth.username, userAccessInfo.data.access);
    if(userInformation.status ==='error') return userInformation
    userData.data= {...userData.data, ...userInformation.data}
  
    return userData; //usersData.data;//el adaptador me sirve para parsear la data segun el repositorio pdta: podria hacerlo en el consumo
}
export {authenticationUserWithModoroServer}