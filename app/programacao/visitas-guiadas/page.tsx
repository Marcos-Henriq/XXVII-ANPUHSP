import PageDefault from "@/public/components/pageContainer/pageContainer";
import EventList from "@/public/components/schedules/scheduleList";
import ThumbContainer from "@/public/components/thumbContainer/thumbContainer";
import ListMesas from "@/public/components/thumbContainer/listMesas";
import { Container, Breadcrumbs, Link, Typography, Box } from "@mui/material";
import ListSt from "@/public/components/thumbContainer/listSt";

export default function VisitasGuiadas() {
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
            Programação - Visitas guiadas
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-2">Visitas guiadas</h2>
        <p className="text-default">
          As visitas guiadas são atividades que se destinam a visitantes que
          queiram conhecer os principais acervos que estão localizados em três
          espaços distintos: Arquivo Edgard Leuenroth, Centro de Memória da
          Unicamp e Biblioteca de Obras Raras.
        </p>
        <p className="text-default">
          Dispomos de cinco horários de visitação em grupos e as pessoas
          interessadas deverão <b>registar</b> seu nome com o pessoal de apoio que
          estará no <b>Departamento de História da Unicamp</b>, que fica no prédio da
          Administração do IFCH, durante o período de <b>segunda a quinta-feira,
          das 8h-18h.</b>
        </p>
        <h2 className="mb-2 title">Sexta-feira, 6 de setembro de 2024 </h2>
        <h2 className="mb-2 title">Horários: 9; 10; 11; 14 e 15 horas</h2>
      </Container>
    </PageDefault>
  );
}
