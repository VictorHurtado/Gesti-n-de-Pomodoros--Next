export const getReturnValues = (countDown: number) => {
    // calculate time left
    const days = Math.floor(countDown / (100 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (100 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (100 * 60 * 60)) / (100 * 60));
    const seconds = Math.floor((countDown % (100 * 60)) / 100);

    return [days, hours, minutes, seconds];
};
export function getTime(time: number) : string {
    const seconds = time* 60; 
    const miliseconds = seconds*1000;
    const timeFormat =new Date(miliseconds).toISOString().slice(11, 19);
   
    return timeFormat;
}
export function transformSecondsToFormat(seconds: number): string {
    const miliseconds = seconds*1000;
    const timeFormat =new Date(miliseconds).toISOString().slice(11, 19);
   
    return timeFormat.startsWith('00')? timeFormat.substring(3, timeFormat.length ) : timeFormat;
}