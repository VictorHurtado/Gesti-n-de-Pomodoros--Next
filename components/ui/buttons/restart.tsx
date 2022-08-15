import React, { useState } from 'react';

import {Button} from '@mui/material'


import RotateLeftSharpIcon from '@mui/icons-material/RotateLeftSharp';


interface Props {

    onclick: () => void;
}
export const RestartButton = ({ onclick }: Props) => {

    return (
        <Button sx={{
            paddingY: '1.2rem',
            borderRadius: '100%',
        }} onClick={() => onclick()}>
            <RotateLeftSharpIcon color="primary" fontSize='small'/>
        </Button>
    )
}
