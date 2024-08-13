"use client";

import React from "react";
import { Paper, List, ListItem, ListItemAvatar, Avatar } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import { AccessAlarm } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

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
    <Container className="d-flex flex-column align-start justify-center p-0 my-4 gap-3">
      <div>
        <p className="subtitle">{date}</p>
        <h1 className="title">{dayWeek}</h1>
      </div>
      <Paper elevation={1} className="scheduleContainer">
        <List className="d-flex flex-column gap-2">
          {schedules.map((schedule, index) => (
            <ListItem key={index} sx={{ display: "flex", alignItems: "start" }}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#F4B303" }}>
                  <AccessAlarm color="secondary" fontSize="large" />
                </Avatar>
              </ListItemAvatar>
              <div className="d-flex flex-column align-center justify-center">
                <span className="title">{schedule.schedule}</span>
                {Array.isArray(schedule.event) ? (
                  <Row>
                    {schedule.event.map((e, idx) => (
                      <Link
                        key={idx}
                        className="link"
                        href={`/programacao/mesa-redonda/${e.id}/agenda/Agenda`}
                      >
                        <span className="title">{e.name}</span>
                        <OpenInNewIcon />
                      </Link>
                    ))}
                  </Row>
                ) : schedule.event === "Fórum de Graduação" ? (
                  <Link
                    className="link"
                    href="/programacao/forum-graduacao" // O caminho do link específico para "Fórum de Graduação"
                  >
                    <span className="title">Fórum de Graduação</span>
                    <OpenInNewIcon />
                  </Link>
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
