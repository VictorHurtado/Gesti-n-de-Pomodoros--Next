
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pomodoro } from "./pomodoro.d";
// Define a type for the slice state

  
const initialState:Pomodoro ={

    completed: false,
    time: '',
    typeOf: 1,
    startTime: '',
    finishTime: '',
    idUser: '',

}
const pomodoroSlicer = createSlice({
    name: "pomodoroSlicer",
    initialState,
    reducers: {
        updatePomodoroTime: (state:Pomodoro, action: PayloadAction<string>) => {
            state.time = action.payload;
        },
        setCompleted: (state:Pomodoro, action: PayloadAction<boolean>) => {
            state.completed = action.payload;

        },
        setFinishTime: (state:Pomodoro, action: PayloadAction<string>) => {
            state.finishTime = action.payload;
        },
        setIdUser: (state:Pomodoro, action: PayloadAction<string>) => {
            state.idUser = action.payload;
        },
        finishPomodoro: (state:Pomodoro, action: PayloadAction<Pomodoro>) => {
            state.completed= action.payload.completed;
            state.finishTime= action.payload.finishTime;
            state.idUser= action.payload.idUser;
        },
        updateAllPomodoroProperties: (state:Pomodoro, action: PayloadAction<Pomodoro>) => {
            state.completed = action.payload.completed;
            state.time= action.payload.time;
            state.typeOf = action.payload.typeOf;
            state.startTime= action.payload.startTime;
            state.finishTime= action.payload.finishTime;
            state.idUser= action.payload.idUser;
            
        },
    }
})
export const { updatePomodoroTime,updateAllPomodoroProperties,finishPomodoro} = pomodoroSlicer.actions

export default pomodoroSlicer.reducer 