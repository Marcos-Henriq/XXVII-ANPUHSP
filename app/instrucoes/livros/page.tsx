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

export default function Livros() {
  return (
    <PageDefault title="Coordenação de Seminário Temático">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="text.primary">
            Instruções - Lançamento de Livros
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-4">Lançamento de Livros</h2>
        <Row className="w-100 py-4 px-2 container-instrucao">
          <p className="text-default">
            Na quarta-feira à noite, teremos um momento especial, que será o
            lançamento de livros, em que as autoras, autores e organizadores
            estarão presentes para brindar com os associados e associadas, seus
            novos trabalhos. O evento contará com uma atividade cultural e será
            realizado na Casa do Lago. Você está convidado/a a participar dessa
            festa!
          </p>
        </Row>
      </Container>
    </PageDefault>
  );
}
