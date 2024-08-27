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

export default function Oficina() {
  return (
    <PageDefault title="Coordenação de Seminário Temático">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="text.primary">
            Instruções - Participação em Minicurso
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-4">Participação em Minicurso</h2>
        <Row className="w-100 py-4 px-2 container-instrucao">
          <p className="text-default">
            Pedimos que sua participação seja marcada pela pontualidade ao longo
            dos três dias de atividades, para que você não perca nenhum conteúdo
            e explore cada questão apresentada.
          </p>
          <p className="text-default">
            Serão apenas três dias, mas esperamos que sejam bem intensos e de
            muito valor para sua formação.
          </p>
        </Row>
      </Container>
    </PageDefault>
  );
}
