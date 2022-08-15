import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {setCurrent} from '../../../stores/settings/settings_reducer'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

interface Props {

    onclick: () => void;
}
export const ToggleButtonMode = ({ onclick }: Props) => {

    const current = useSelector((state:any)=> state.settings.current);
    const dispatch = useDispatch();

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
      ) => {

        dispatch(setCurrent(newAlignment))
      };

    return (
        <ToggleButtonGroup
            color="primary"
            value={current}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value="work">Pomodoro</ToggleButton>
            <ToggleButton value="shortBreak">Corto</ToggleButton>
            <ToggleButton value="longBreak">Largo</ToggleButton>
        </ToggleButtonGroup>
    )
}
