import PageDefault from "@/public/components/pageContainer/pageContainer";
import Schedule from "@/public/components/schedules/schedule";
import { Breadcrumbs } from "@mui/material";
import { Breadcrumb, Container, Row } from "react-bootstrap";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import EventList from "@/public/components/schedules/scheduleList";

export default function Agenda() {
  return (
    <PageDefault title="Agenda">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="text.primary">Programação - Agenda</Typography>
        </Breadcrumbs>
        <h2 className="mb-2">Programação</h2>
        <EventList></EventList>
      </Container>
    </PageDefault>
  );
}
