import React, { useEffect, FC } from 'react'
import { Typography, Box, Avatar, Button } from '@mui/material'

import { getToken } from '../../../utils/tokenActions'
import { updateAllProperties } from '../../../stores/user/user_reducer';
import { useSelector, useDispatch } from 'react-redux';
import { LogoutButton } from '../buttons/logout';

import { NavbarBox, UserNavbarBox } from '../../classes/index'
import Link from 'next/link';
import MenuNavbar from './Menunav';

interface Props {
    handleOpen: () => void
}
const Navbar: FC<Props> = ({ handleOpen }) => {
    const userActive = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const user = getToken()
        if (Object.keys(user).length === 0) return
        if (Object.keys(userActive).length === 0) dispatch(updateAllProperties(user))
    });

    const isUser = () => Object.keys(userActive).length === 0

    return (
        <>
            <Box sx={NavbarBox}>
                <Box sx={UserNavbarBox} onClick={isUser() ? () => { handleOpen() } : () => { }}>
                    <Avatar> {isUser() ? 'I' : `${userActive.username[0]}`}</Avatar>

                    <Box>
                        <Typography variant="subtitle2" sx={{ marginLeft: '0.5rem' }} align="left" > {isUser() ? "Invitado" : `${userActive.username}`},</Typography>
                        <Typography variant="body1" sx={{ marginLeft: '0.5rem' }} align="left" fontSize={13}>{isUser() ? "Iniciar Sesión" : "Bienvenido"}</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space", alignItems: "center", opacity: "0.5" }}>
                    <Link href={'/'}><Button   id="basic-button">Inicio</Button></Link>
                    {/*  <Box sx={{m:1}}></Box>
                        <Link href={'/pomodoro'}><a><Typography variant={"inherit"} >Pomodoro</Typography></a></Link> */}
                    <MenuNavbar />
                    {!isUser() ? <LogoutButton onclick={() => console.log("cerrando")} /> : ''}
                </Box>
            </Box>

        </>
    )
}

export default Navbar