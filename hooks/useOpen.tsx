
import {useState} from 'react'

export const useOpen = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
      console.log("Open")
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
  return {
    open,
    handleOpen,
    handleClose
  }
}
