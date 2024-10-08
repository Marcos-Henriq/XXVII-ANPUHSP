import PageDefault from "@/public/components/pageContainer/pageContainer";
import EventList from "@/public/components/schedules/scheduleList";
import ThumbContainer from "@/public/components/thumbContainer/thumbContainer";
import { Container, Breadcrumbs, Link, Typography } from "@mui/material";
import ListMesas from "@/public/components/thumbContainer/listMesas";

export default function MesasRedondas() {
  return (
    <PageDefault title="Mesas Redondas">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="text.primary">Programação - Mesas redondas</Typography>
        </Breadcrumbs>
        <h2 className="mb-4">Mesas redondas</h2>
        <ListMesas/>
      </Container>
    </PageDefault>
  );
}
