
import React,{useEffect} from 'react'
import { NextPage } from 'next'
import MainLayout from '../../components/layouts/mainLayout'
import { Container} from '@mui/material'
import { useOpen } from '../../hooks/useOpen';
import { Clock } from '../../components/clock/clock';
import { ModalForm } from '../../components/ui/modals/modalForm'
import { LoginForm } from '../../components/ui/forms/loginForm';
import Navbar from '../../components/ui/navbar/Navbar';




const PomodoroTimer:NextPage = () => {
  const { open, handleOpen, handleClose } = useOpen();

  return (
    <MainLayout title='Timer'>
      <Container  sx={{
                minHeight: '100vh',
        
            }}>
                <Navbar handleOpen={handleOpen}/>
                <Clock />
                <ModalForm open={open} handleClose={handleClose} title="Inicio de Sesión" > <LoginForm onClose={handleClose}></LoginForm>    </ModalForm>
            </Container>
    </MainLayout>
  )
}

export default PomodoroTimer