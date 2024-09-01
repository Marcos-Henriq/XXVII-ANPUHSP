"use client";

import React from "react";
import { Paper, List, ListItem, ListItemAvatar, Avatar } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import { AccessAlarm } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { link } from "fs";

interface ScheduleEvent {
  schedule: string;
  event: string | { id: number; name: string }[];
}

type LinksType = {
  "Fórum de Graduação": string;
  "Abertura Conferência": string;
  "Apresentação de Pôsteres": string;
  "Assembleia": string;
  "Lançamento de livros": string;
  "Conferência de Encerramento": string;
  "Visitas guiadas": string;
  "Credenciamento": string;
};

interface Event {
  id: number;
  dayWeek: string;
  date: string;
  schedules: ScheduleEvent[];
}

function getLink(links: LinksType, eventKey: string): string {
  return links[eventKey as keyof LinksType] || "Evento desconhecido";
}

const Schedule: React.FC<Event> = ({ id, dayWeek, date, schedules }) => {
  const links: LinksType = {
    "Fórum de Graduação": "forum-graduacao",
    "Abertura Conferência": "abertura",
    "Apresentação de Pôsteres": "apresentacao-posteres",
    "Assembleia": "assembleia",
    "Lançamento de livros": "lancamento-livros",
    "Conferência de Encerramento" : "encerramento",
    "Visitas guiadas": "visitas-guiadas",
    "Credenciamento" : "credenciamento"
  };

  function isLinkKey(eventKey: string): eventKey is keyof LinksType {
    return eventKey in links;
  }

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
                ) : (
                  <>
                    {isLinkKey(schedule.event) ? (
                      <Link
                        className="link"
                        href={`/programacao/${links[schedule.event]}`}
                      >
                        <span className="title">{schedule.event}</span>
                        <OpenInNewIcon />
                      </Link>
                    ) : (
                      <p className="subtitle">{schedule.event}</p>
                    )}
                  </>
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
