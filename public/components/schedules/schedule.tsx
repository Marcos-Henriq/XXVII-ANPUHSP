import React from "react";
import Header from "../header/header";
import {
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import { AccessAlarm, Padding } from "@mui/icons-material";

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

const Schedule: React.FC<Event> = ({ id, dayWeek, date, schedules }) => {
  return (
    <Container className="d-flex flex-column align-start justify-center p-0 my-4 gap-2">
      <div>
        <p className="subtitle">{date}</p>
        <h1 className="title">{dayWeek}</h1>
      </div>
      <Paper elevation={1} className="scheduleContainer">
        <List className="d-flex flex-column gap-2">
          {schedules.map((schedule, index) => (
            <ListItem sx={{display:"flex",alignItems:"start"}}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#F4B303" }}>
                  <AccessAlarm color="secondary" fontSize="medium" />
                </Avatar>
              </ListItemAvatar>
              <div className="d-flex flex-column align-center justify-center">
                <span className="title">{schedule.schedule}</span>
                {Array.isArray(schedule.event) ? (
                  <Row>
                    {schedule.event.map((e) => (
                      <Col key={e.id}>
                        <div className="thumbnail-event">
                        </div>
                        {e.name}
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <p className="subtitle">{schedule.event}</p>
                )}
              </div>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Schedule;
