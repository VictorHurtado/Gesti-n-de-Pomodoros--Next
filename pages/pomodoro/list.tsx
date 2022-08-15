import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from 'next'


import { Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'


import MainLayout from '../../components/layouts/mainLayout'
import { LoginForm } from '../../components/ui/forms/loginForm'
import { ModalForm } from '../../components/ui/modals/modalForm'
import Navbar from '../../components/ui/navbar/Navbar'
import NoAuthenticate from '../../components/ui/noAccess/noAuthenticate'
import { PomodoroTable } from '../../components/ui/table/PomodoroTable'
import { useOpen } from '../../hooks/useOpen'
import StatisticsCard from '../../components/ui/card/StatisticsCard'
import StackCardsStatitics from '../../components/ui/card/StackCardsStatitics'
const MyHistoricalPomodoros: NextPage = () => {
  const userActive = useSelector((state: any) => state.user);
  const { open, handleOpen, handleClose } = useOpen();
  const isUser = () => Object.keys(userActive).length === 0



  return (
    <MainLayout title='Historico'>
      <Container>
        <Navbar handleOpen={handleOpen} />
        {!isUser() ?<StackCardsStatitics idUser={userActive.idUser} access={userActive.access}/>:''}
        <Typography variant="h6" sx={{ marginY: "2rem" }}> Historico de Pomodoros</Typography>

        {!isUser() ?
          <PomodoroTable idUser={userActive.idUser} access={userActive.access}></PomodoroTable>
          : <NoAuthenticate />}
      </Container>


      <ModalForm open={open} handleClose={handleClose} title="Inicio de Sesión" > <LoginForm onClose={handleClose}></LoginForm>    </ModalForm>
    </MainLayout>
  )
}

export default MyHistoricalPomodoros