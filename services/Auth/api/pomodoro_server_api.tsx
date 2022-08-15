import { User } from "./userInterface.d";
import {ErrorsCode, userAuthResponse, ResponseAuth} from './authUser.errors'



const url = 'http://localhost:8080';

async function getDetailUser(username: string, token:string) {
   
    return await fetch(url + '/users/userdetail/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify({"username": username})
    })
        .then(async function (response) {
            var usersData:ResponseAuth;
            if(response.status > 400)
               return usersData =  userAuthResponse[ErrorsCode.ErrorAuht]
             
         
            usersData= {...userAuthResponse[ErrorsCode.Success], data: await response.json()} as ResponseAuth
     
            return  usersData;
        })
        .catch(function (error) {
            console.log(error);
            return  {...userAuthResponse[ErrorsCode.Failure], data:error}
        });
}

// { exito 200
//     "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2MDEzNTA4NiwiaWF0IjoxNjYwMDQ4Njg2LCJqdGkiOiIxMWE1NTg4MzlkZTE0YTU2OTEwZTNiY2EzODFjNDAyOSIsInVzZXJfaWQiOjF9.RtygaCDGl7zGdwdkCToyNS9Gfe6ohZhgpOxzN4QSQaA",
//     "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYwMDQ4OTg2LCJpYXQiOjE2NjAwNDg2ODYsImp0aSI6Ijk3MzhiMWNlY2NjZjRiNTFiYzMyYzM2N2VjODVhNGU0IiwidXNlcl9pZCI6MX0.pSfH7Xic5URP5xhT58si2HJp38_5yHeRSijc3hw2G_U"
//   }
// { fallo 401
//     "detail": "No active account found with the given credentials"
//   }

async function verifyUser(authUser: User) {
    return await fetch(url + '/api/token/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(authUser)
    })
        .then(async function (response) {
            var usersData:ResponseAuth; 
            if(response.status > 400){
               return usersData = userAuthResponse[ErrorsCode.ErrorAuht]
            }  
            usersData= {...userAuthResponse[ErrorsCode.Success], data: await response.json()} as ResponseAuth
            return  usersData;
        })
        .catch(function (error) {
            console.log(error);
            return  {...userAuthResponse[ErrorsCode.Failure], data:error}
        });
}
export {

    verifyUser,
    getDetailUser
};