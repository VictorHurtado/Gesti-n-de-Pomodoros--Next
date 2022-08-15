import { Container, Typography } from '@mui/material'
import React from 'react'
import { MainContainerHome } from '../../classes'

const noAuthenticate = () => {
  return (
   <>
   <Container sx={MainContainerHome}>
        <Typography variant='subtitle1'>
          Parece que no haz iniciado sesión. Inicia y vuelve a intentarlo!
        </Typography>
      </Container>
   </>
  )
}

export default noAuthenticate