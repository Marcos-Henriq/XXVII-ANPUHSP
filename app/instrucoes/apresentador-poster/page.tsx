import PageDefault from "@/public/components/pageContainer/pageContainer";
import Schedule from "@/public/components/schedules/schedule";
import {
  Breadcrumbs,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Breadcrumb, Container, Row } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import EventList from "@/public/components/schedules/scheduleList";

export default function Poster() {
  return (
    <PageDefault title="Agenda">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="text.primary">
            Instruções - Apresentador poster
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-4">Apresentador poster</h2>
        <Row className="w-100 py-4 px-2 container-instrucao">
          <p className="text-default">
            Na quarta-feira, dia 04, no horário estipulado para as
            apresentações, cada estudante responsável por seu pôster deverá
            ficar ao lado do banner durante todo o período, momento que os
            avaliadores estarão conversando com cada autor/a.
          </p>
        </Row>
      </Container>
    </PageDefault>
  );
}
