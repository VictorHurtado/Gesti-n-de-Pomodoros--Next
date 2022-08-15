import React from 'react'
import {  Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

interface Props {
    open: boolean,
    handleClose: () => void,
    title: string,
    children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}
const ModalForm: React.FC<Props> = ({ open, handleClose,title,children }: Props) => {

    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    A continuación diligencia los siguientes campos
                </DialogContentText>
              {children}
            </DialogContent>
            
        </Dialog>
    )
}

export { ModalForm }