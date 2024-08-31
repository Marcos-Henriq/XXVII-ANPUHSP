import PageDefault from "@/public/components/pageContainer/pageContainer";
import EventList from "@/public/components/schedules/scheduleList";
import ThumbContainer from "@/public/components/thumbContainer/thumbContainer";
import ListMesas from "@/public/components/thumbContainer/listMesas";
import { Container, Breadcrumbs, Link, Typography, Box } from "@mui/material";
import ListSt from "@/public/components/thumbContainer/listSt";

export default function LancamentoLivros() {
  return (
    <PageDefault
      title="Lançamento de livros
"
    >
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Link underline="hover" color="inherit" href={`/programacao/agenda`}>
            Programação
          </Link>
          <Typography color="text.primary">
            Programação - Lançamento de livros
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-2">Lançamento de livros</h2>
        <p className="text-default">
          Essa é uma atividade muito aguardada nos eventos, em que autores/as e
          seus trabalhos, individuais ou coletivos, serão apresentados ao
          público. Assim, você está convidado para conhecer pessoalmente os
          lançamentos e conversar com amigos e colegas.
        </p>
        <h2 className="mb-2 title">Quarta-feira, 04 de setembro de 2024</h2>
        <h2 className="mb-2 title">Casa do Lago </h2>
        <h2 className="mb-2 title">Horário: 20:00 horas</h2>
      </Container>
    </PageDefault>
  );
}
