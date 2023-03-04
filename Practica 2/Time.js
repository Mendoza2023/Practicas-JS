export const timeDiff = (timeInitial, timeFinal)=> {
    timeInitial = parseInt(timeInitial.replaceAll(":",""));
    timeFinal = parseInt(timeFinal.replaceAll(":",""));
    return timeFinal-timeInitial;
}