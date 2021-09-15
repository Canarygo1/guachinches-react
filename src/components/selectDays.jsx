import React from 'react';
import DaySchedule from "./daySchedule";


function SelectDays({schedule}) {
  let days = schedule.split("\n");
  // days.splice(0,1)
  days.splice(7 , (7-days.length)*-1)
  return (
    <div>
      {days.map((e)=>{
        let day = e.split(' ')
        let shifts = [];
        for (let i = 1; i<day.length;i++){
          shifts.push(day[i]);
        }
        return <DaySchedule day={day[0]}shifts={shifts} ></DaySchedule>

      })}
    </div>
  );
}

export default SelectDays;
