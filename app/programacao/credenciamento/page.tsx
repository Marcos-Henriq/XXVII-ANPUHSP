import PageDefault from "@/public/components/pageContainer/pageContainer";
import EventList from "@/public/components/schedules/scheduleList";
import ThumbContainer from "@/public/components/thumbContainer/thumbContainer";
import ListMesas from "@/public/components/thumbContainer/listMesas";
import { Container, Breadcrumbs, Link, Typography, Box } from "@mui/material";
import ListSt from "@/public/components/thumbContainer/listSt";

export default function Assembleia() {
  return (
    <PageDefault title="Mesas Redondas">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Link underline="hover" color="inherit" href={`/programacao/agenda`}>
            Programação
          </Link>
          <Typography color="text.primary">
            Programação - Credenciamento
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-2">Credenciamento</h2>
        <p className="text-default">
          O credenciamento das pessoas inscritas acontecerá na segunda-feira no
          Anfiteatro Marielle Franco. Nos demais dias do evento, será no
          Departamento de História, no prédio da Administração do IFCH.
        </p>
      </Container>
    </PageDefault>
  );
}
