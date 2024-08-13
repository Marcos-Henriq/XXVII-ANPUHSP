import PageDefault from "@/public/components/pageContainer/pageContainer";
import EventList from "@/public/components/schedules/scheduleList";
import ThumbContainer from "@/public/components/thumbContainer/thumbContainer";
import { Container, Breadcrumbs, Link, Typography } from "@mui/material";
import ListMesas from "@/public/components/thumbContainer/listMesas";
import BookList from "./bookList/bookList";

export default function Books() {
  return (
    <PageDefault title="Mesas Redondas">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="text.primary">Programação - Livros em lançamento</Typography>
        </Breadcrumbs>
        <h2 className="mb-4">Livros em lançamento</h2>
        <BookList></BookList>
      </Container>
    </PageDefault>
  );
}