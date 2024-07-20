import React from "react";
import events from "../../data/schedules.json";
import Schedule from "./schedule";

// Definindo a interface do tipo de dados do JSON
interface ScheduleEvent {
  schedule: string;
  event: string | { id: number; name: string }[];
}

interface Event {
  id: number;
  dayWeek: string;
  date: string;
  schedules: ScheduleEvent[];
}

const EventList: React.FC = () => {
  return (
    <div>
        {events.map((event) => (
          <Schedule
            id={event.id}
            dayWeek={event.dayWeek}
            date={event.date}
            schedules={event.schedules}
          ></Schedule>
        ))}
    </div>
  );
};

export default EventList;
