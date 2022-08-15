import { Typography } from '@mui/material'
import { Container } from '@mui/material'
import type { NextPage } from 'next'
import MainLayout from '../components/layouts/mainLayout'
import { LoginForm } from '../components/ui/forms/loginForm'
import { ModalForm } from '../components/ui/modals/modalForm'
import Navbar from '../components/ui/navbar/Navbar'
import { useOpen } from '../hooks/useOpen'

import { MainContainerHome } from '../components/classes'
import HomeLayout from '../components/layouts/homeLayout'

const Home: NextPage = () => {
  const { open, handleOpen, handleClose } = useOpen();
  return (
     <HomeLayout title='Home'>
      <Navbar handleOpen={handleOpen} />
      <Container sx={MainContainerHome} >
        <Typography variant='h2'>
          Pomodoro Timer for Developers!
        </Typography>
      </Container>
      <ModalForm open={open} handleClose={handleClose} title="Inicio de Sesión" > <LoginForm onClose={handleClose}></LoginForm>    </ModalForm>
    </HomeLayout>
    

  )
}

export default Home
