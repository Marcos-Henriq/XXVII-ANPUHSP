import PageDefault from "@/public/components/pageContainer/pageContainer";
import EventList from "@/public/components/schedules/scheduleList";
import ThumbContainer from "@/public/components/thumbContainer/thumbContainer";
import ListMesas from "@/public/components/thumbContainer/listMesas";
import { Container, Breadcrumbs, Link, Typography, Box } from "@mui/material";
import ListSt from "@/public/components/thumbContainer/listSt";

export default function ApresentacaoPosteres() {
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
            Programação - Apresentação de Pôsteres
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-2">Apresentação de Pôsteres</h2>
        <p className="text-default">
          Essa atividade se destina a incentivar a participação de estudantes da
          graduação que estejam desenvolvendo pesquisas de Iniciação Científica.
          Os trabalhos inscritos estarão sendo exibidos na Biblioteca do IFCH na
          segunda e terça-feira para quem visitar o local, e na quarta-feira,
          das 16h-17h, haverá a apresentação dos trabalhos, momento que cada
          jovem pesquisador/a estará disponível para expor ao público sua
          pesquisa.
        </p>
        <p className="text-default">
          Nesse mesmo dia, as avaliações estarão sendo finalizadas pela Comissão
          de Pôsteres, e os três primeiros trabalhos classificados serão
          conhecidos na noite de encerramento, quando então seus autores/as
          receberão a premiação.
        </p>
        <h2 className="mb-2 title">Quarta-feira, 04 de setembro de 2024</h2>
        <h2 className="mb-2 title">Casa do Lago </h2>
        <h2 className="mb-2 title">Horário: 16:00 horas</h2>
      </Container>
    </PageDefault>
  );
}
