
import React, { useEffect, useState, FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getPomodoros } from '../../../services/Pomodoro/repository/pomodoro_server_repository';

import { Typography } from '@mui/material';
import { pomodoroType } from '../../../utils/pomodoroType';

interface Props {
  idUser: number,
  access: string
}
interface PomodorosRow {
  id: number,
  typeOf: string,
  state: boolean,
  create_date: string,
  time: string,
  completed: boolean,
  startTime: string,
  finishTime: string
}


export const PomodoroTable: FC<Props> = ({ idUser, access }) => {
  const [pomodoros, setPomodoros] = useState<PomodorosRow[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getPomodoros(idUser, access)
      .then((response) => {
        setPomodoros(response.data);
        setLoading(false)
      })
  }, [idUser, access])

  if(isLoading) return <Typography > cargando.. </Typography>
  if(pomodoros.length==0)<Typography > No tienes pomodoros </Typography>

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tipo</TableCell>


              <TableCell align="center" >Tiempo</TableCell>
              <TableCell align="center" sx={{ display: { xs: 'none', md: 'table-cell' } }}>Inicio</TableCell>
              <TableCell align="center" sx={{ display: { xs: 'none', md: 'table-cell' } }}>Fin</TableCell>
              <TableCell align="center" sx={{ display: { xs: 'none', md: 'table-cell' } }}>Creado</TableCell>
              <TableCell align="center">Completado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pomodoros.map((row) => (
              <TableRow

                hover={true}
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}{" "}{pomodoroType(row.typeOf)}
                </TableCell>


                <TableCell align="center">{row.time}</TableCell>
                <TableCell align="center" sx={{ display: { xs: 'none', md: 'table-cell' } }}>{row.startTime}</TableCell>
                <TableCell align="center" sx={{ display: { xs: 'none', md: 'table-cell' } }}>{row.finishTime}</TableCell>
                <TableCell align="center" sx={{ display: { xs: 'none', md: 'table-cell' } }}>{row.create_date}</TableCell>
                <TableCell align="center">{row.completed ? "Sí" : "No"}</TableCell>


              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  );
}