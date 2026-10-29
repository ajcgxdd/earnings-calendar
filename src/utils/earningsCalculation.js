export function getEarningsResult(earning){
    const { epsEstimate, epsActual } = earning;

    if(epsActual == null || epsEstimate == null){
        return "Pending";
    }
    if(epsActual > epsEstimate){
        return "Beat";
    }

    if(epsActual < epsEstimate){
        return "Miss";
    }
    
    return "Meet";
}