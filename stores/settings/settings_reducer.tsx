import {Settings} from './settings.d'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:Settings = {
    current:"work",
    qtCurrent:2,
    work:25,
    shortBreak:5,
    longBreak:25
};

const settingsSlicer = createSlice({
    name: 'settings',
    initialState,  
    reducers: {
        setCurrentAutomatically:(state:Settings, action:PayloadAction<string>) =>{
            if(state.current === 'work' && state.qtCurrent<3){
                state.qtCurrent = state.qtCurrent + 1;
                // console.log("qtCurrent: "+state.qtCurrent);
                return
            }
            if(state.current === 'shortBreak') return
            state.qtCurrent = 0;
            
        },
        setCurrent: (state:Settings,  action: PayloadAction<string>) =>{
           
            
            state.current = action.payload;
        },
        setWork: (state:Settings, action: PayloadAction<number>) =>{
            state.work = action.payload;

        },
        setShortBreak: (state:Settings,  action: PayloadAction<number>) =>{
            state.shortBreak = action.payload;

        },
        setLongBreak: (state:Settings,  action: PayloadAction<number>) =>{
            state.longBreak = action.payload;

        },
        updateAllSettings: (state:Settings, action: PayloadAction<Settings>) =>{
            
            state.work= action.payload.work;
            state.shortBreak= action.payload.shortBreak;
            state.longBreak= action.payload.longBreak;
        }
    }
});
export const { updateAllSettings, setCurrent,setCurrentAutomatically} = settingsSlicer.actions

export default settingsSlicer.reducer 