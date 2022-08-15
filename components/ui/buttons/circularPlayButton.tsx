import React from 'react'
import { Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { CircularButtonClass } from '../../classes/circularbutton/circularButton.d'



interface Props {
  ticking: boolean;
  onclick: () => void;
}
export const CircularPlayButton = ({ onclick, ticking }: Props) => {





  function handleClick() {

    onclick();
  }
  return (
    <Button variant="contained" color="primary" sx={CircularButtonClass} onClick={handleClick}>
      {ticking ? <PauseIcon /> : <PlayArrowIcon />}
    </Button>
  )
}
