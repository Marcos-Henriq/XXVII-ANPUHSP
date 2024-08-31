import PageDefault from "@/public/components/pageContainer/pageContainer";
import EventList from "@/public/components/schedules/scheduleList";
import ThumbContainer from "@/public/components/thumbContainer/thumbContainer";
import ListMesas from "@/public/components/thumbContainer/listMesas";
import { Container, Breadcrumbs, Link, Typography } from "@mui/material";
import ListSt from "@/public/components/thumbContainer/listSt";

export default function Seminarios() {
  return (
    <PageDefault title="Mesas Redondas">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="text.primary">Programação - Simpósios Temáticos</Typography>
        </Breadcrumbs>
        <h2 className="mb-4">Simpósios Temáticos</h2>
        <ListSt/>
      </Container>
    </PageDefault>
  );
}
