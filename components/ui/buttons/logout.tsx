import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {deleteUser} from '../../../stores/user/user_reducer';
import {deleteToken} from '../../../utils/tokenActions';
import {Button} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';




interface Props {

    onclick: () => void;
}
export const LogoutButton = ({ onclick }: Props) => {

    const dispatch = useDispatch()

    function onLogout(){
        deleteToken();
        dispatch(deleteUser({}))
    
    }

    return (
        <Button sx={{
            paddingY: '1rem',
            borderRadius: '100%',
        }} onClick={() => onLogout()}>
            <LogoutIcon color="primary" fontSize='small'/>
        </Button>
    )
}
