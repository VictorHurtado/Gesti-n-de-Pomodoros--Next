export function pomodoroType(typeOf:string){
  
    switch (typeOf.toString()) {
        case "1": return "Pomodoro"
        case "2": return "Corto"
        case "3": return "Largo"
        default:
            return "Pomodoro"
    }
}