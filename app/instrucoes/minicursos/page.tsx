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

export default function Minicurso() {
  return (
    <PageDefault title="Coordenação de Seminário Temático">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="text.primary">
            Instruções - Coordenação de Minicurso
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-4">Coordenação de Minicurso</h2>
        <Row className="w-100 py-4 px-2 container-instrucao">
          <p className="text-default">
            Pedimos a gentileza que cada docente mantenha as atividades dentro
            do tempo previsto, para não prejudicar a programação seguinte.
          </p>
          <p className="text-default">
            Uma lista diária de presença dos participantes de cada Minicurso
            será entregue por pessoas que estarão na Monitoria, devidamente
            identificadas com a camiseta do evento, procurando dar o apoio
            necessário para a bom andamento das atividades.
          </p>
        </Row>
      </Container>
    </PageDefault>
  );
}
