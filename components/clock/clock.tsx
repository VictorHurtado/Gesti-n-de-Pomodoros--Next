import React, { useEffect } from 'react'
import { Box } from '@mui/system';
import { Card, Button } from '@mui/material';


//states
import { useDispatch, useSelector } from 'react-redux';
import {setCurrent, setCurrentAutomatically} from '../../stores/settings/settings_reducer'
import  {updateAllPomodoroProperties} from '../../stores/pomodoro/pomodoro_reducer'
//custom hooks
import { useOpen } from '../../hooks/useOpen';
import { useCountdown } from '../../hooks/useCountdown';
//custom components
import { ModalForm } from '../ui/modals/modalForm';
import { CircularPlayButton } from '../ui/buttons/circularPlayButton';
import { CircularProgressWithLabel } from './widgets/ciruclarProgress'

//style and utils
import { CardClass, BoxHeaderClass, GeneralBox} from '../classes/index';
import { getTime, transformSecondsToFormat } from '../../utils/getTime';
import { SettingsForm } from '../ui/forms/settingsForm';
import { RestartButton } from '../ui/buttons/restart'
import { ToggleButtonMode } from '../ui/buttons/toggleButton'
import { calculateNextMode, modeType } from '../../utils/nextMode';
import { savePomodoro } from '../../services/Pomodoro/repository/pomodoro_server_repository';


export const Clock = () => {
  const settings = useSelector((state: any) => state.settings);
  const pomodoro = useSelector((state: any) => state.pomodoro);
  const user = useSelector((state: any) => state.user);
  const { open, handleOpen, handleClose } = useOpen();
  const dispatch = useDispatch();
  const { start, stop, reset, ticking, timeLeft, progress } = useCountdown({
    minutes: settings[`${settings.current}`],
    onStartCallback: () => {
      console.log("iniciando..");
      dispatch(updateAllPomodoroProperties({
          completed: false,
          time: getTime(settings[`${settings.current}`]),
          typeOf: modeType(settings.current),
          startTime: new Date().toLocaleTimeString([], {hour12: false,}),
          finishTime: '',
          idUser: user.idUser? user.idUser : '',
      }));
      
    },
    onStopCallback: () => console.log("Pausado"),
    onCompleteCallback: () => {

      const next= calculateNextMode(settings.current, settings.qtCurrent)
      dispatch(setCurrentAutomatically(settings.current));
      dispatch(setCurrent(next));
      const pomodorotoSend={...pomodoro, completed:true, finishTime: new Date().toLocaleTimeString([], {hour12: false,}), userId:user.idUser}
      console.log(pomodorotoSend)
      if (user.idUser) savePomodoro(pomodorotoSend, user.access);
      reset();
    }
  });


  return (
    <React.Fragment>
      <Box sx={GeneralBox}>
        <Box sx={BoxHeaderClass}>
          <Box sx={{display:"flex", flexDirection:"row"}}>
            <ToggleButtonMode onclick={() => console.log("nuevo")}></ToggleButtonMode>
            <RestartButton onclick={reset}></RestartButton>
          </Box>
          <Button variant="outlined" onClick={() => handleOpen()}>Configuración</Button>

        </Box>

        <Card elevation={2} sx={CardClass} >

          <CircularProgressWithLabel value={-progress} label={`${transformSecondsToFormat(timeLeft)} `} />

        </Card>
        <Box>
          <CircularPlayButton  ticking={ticking} onclick={() => { !ticking ? start() : stop() }} />
        </Box>
      </Box>
      <ModalForm open={open} handleClose={handleClose} title="Configurar Pomodoro" ><SettingsForm onClose={handleClose} /> </ModalForm>

    </React.Fragment>

  )
}
