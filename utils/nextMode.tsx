export function calculateNextMode(mode: string, qtCurrent:number): string {
    if(mode === "longBreak" ) return "work";
    if( mode === "shortBreak") return "work"
    if( mode === "work" && qtCurrent<3)  return "shortBreak"
    return "longBreak"
}
export function modeType(mode: string): number {
    switch(mode) {
        case "longBreak":
            return 3
        case "shortBreak":
            return 2
        case "work":
            return 1
            default:
            return 1;

    }
}