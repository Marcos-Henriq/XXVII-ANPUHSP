import PageDefault from "@/public/components/pageContainer/pageContainer";
import EventList from "@/public/components/schedules/scheduleList";
import ThumbContainer from "@/public/components/thumbContainer/thumbContainer";
import { Container, Breadcrumbs, Link, Typography } from "@mui/material";
import ListMesas from "@/public/components/thumbContainer/listMesas";
import ListMiniCursos from "@/public/components/thumbContainer/listMiniCursos";

export default function MiniCursos() {
  return (
    <PageDefault title="Mini-cursos">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="text.primary">Programação - Minicursos</Typography>
        </Breadcrumbs>
        <h2 className="mb-4">Minicursos</h2>
        <ListMiniCursos/>
      </Container>
    </PageDefault>
  );
}
