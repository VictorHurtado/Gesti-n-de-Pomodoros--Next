import { Stack } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import { getPomodorosStatistics } from '../../../services/Pomodoro/repository/pomodoro_server_repository';
import StatisticsCard from './StatisticsCard'
interface Props {
    idUser: number,
    access: string
  }
interface Statistics {
    pomodoros:   number;
    shortBreaks: number;
    longBreaks:  number;
}
const initialState:Statistics={
    pomodoros:0,
    shortBreaks:0,
    longBreaks:0
}
const StackCardsStatitics:FC<Props> = ({idUser,access}) => {
    const [statistics, setStatistics] = useState<Statistics>(initialState)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getPomodorosStatistics(idUser, access)
          .then((response) => {
            setStatistics(response.data as Statistics);
            setLoading(false)
          })
    }, [idUser, access])
    

    return (
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'space-between' }}>
            <StatisticsCard title='Pomodoro' value={statistics.pomodoros} />
            <StatisticsCard title='Descanso Corto' value={statistics.shortBreaks} />
            <StatisticsCard title='Descanso Largo' value={statistics.longBreaks} />

        </Stack>
    )
}

export default StackCardsStatitics