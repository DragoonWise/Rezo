import React, { useContext, useState } from 'react';
import InterventionContext from '../../context/intervention/interventionContext';
const TimerCall = () => {
    const interventionContext = useContext(InterventionContext);
    const { intervention } = interventionContext;
    const [time, setTime] = useState({
        start: intervention.startDate ,
        hour: 0,
        min: 0,
        sec: 0
    });
    // let time = dateDiff(Date.now(), start);
    function dateDiff(date1, date2) {
        var diff = {}                           // Initialisation du retour
        var tmp = date2 - date1;

        tmp = Math.floor(tmp / 1000);             // Nombre de secondes entre les 2 dates
        diff.sec = tmp % 60;                    // Extraction du nombre de secondes

        tmp = Math.floor((tmp - diff.sec) / 60);    // Nombre de minutes (partie entière)
        diff.min = tmp % 60;                    // Extraction du nombre de minutes

        tmp = Math.floor((tmp - diff.min) / 60);    // Nombre d'heures (entières)
        diff.hour = tmp % 24;                   // Extraction du nombre d'heures

        tmp = Math.floor((tmp - diff.hour) / 24);   // Nombre de jours restants
        diff.day = tmp;
        diff.start = time.start;
        return diff;
    }
    const timecall = () => {
        return time.hour.toLocaleString("fr-FR", {minimumIntegerDigits : 2}) + ':' + time.min.toLocaleString("fr-FR", {minimumIntegerDigits : 2}) + ':' + time.sec.toLocaleString("fr-FR", {minimumIntegerDigits : 2});
    }
    function updateTime() {
        setTime(dateDiff(time.start, Date.now()));
    }
    setInterval(updateTime, 1000);
    return (
        <div className='text-center col-6'>
            <span className='d-none d-sm-inline'>Durée de l'appel : </span>
            {timecall()}
        </div>
    );
};

export default TimerCall;