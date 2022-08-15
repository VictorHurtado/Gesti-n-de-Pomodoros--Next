import React from 'react'
import { useDispatch } from 'react-redux';


import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';


import { AutoForm, AutoField, ErrorField, SubmitField } from 'uniforms-mui';

import { bridge as schema } from '../../../uniforms/login/loginForm';

import {Box} from '@mui/material';


import { updateAllProperties } from '../../../stores/user/user_reducer';
import {setToken} from '../../../utils/tokenActions';
import {authenticationUserWithModoroServer} from '../../../services/Auth/repository/pomodoro_server_repository';


interface Props {
    onClose: () => void;
}


export const LoginForm = ({ onClose }: Props) => {
    const dispatch= useDispatch();
   

    async function handleSubmit (model: any)  {
        
        const userIsActive= await authenticationUserWithModoroServer(model)
        if(userIsActive.status === 'success'){
            setToken(userIsActive.data);
            
            dispatch(updateAllProperties({
                username: userIsActive.data.username, 
                idUser:userIsActive.data.idUser,
                access:userIsActive.data.access,
                refresh:userIsActive.data.refresh
            }));
        }
        onClose();

    }




    return (
        <React.Fragment>
            <AutoForm schema={schema} onSubmit={handleSubmit}>
                <AutoField name="username" sx={{marginBottom:'10px', marginTop:'17px'}}/>
                <ErrorField name="username">
                    <span>No es un username valido!</span>
                </ErrorField>
                <AutoField name="password" label="Password" type="password"  sx={{ minWidth: '100%'}}/>
                <ErrorField
                    name="password"
                    errorMessage="No es valida la contraseña"
                />
                <Box sx={{height:'40px'}}></Box>
                <DialogActions>
                    <Button variant="contained" onClick={onClose}>Cancel</Button>
                    <SubmitField name='Submit' label="Iniciar"></SubmitField>

                </DialogActions>
            </AutoForm>
        </React.Fragment>
    )
}
