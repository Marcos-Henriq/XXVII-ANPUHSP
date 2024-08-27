import PageDefault from "@/public/components/pageContainer/pageContainer";
import EventList from "@/public/components/schedules/scheduleList";
import ThumbContainer from "@/public/components/thumbContainer/thumbContainer";
import ListMesas from "@/public/components/thumbContainer/listMesas";
import { Container, Breadcrumbs, Link, Typography, Box } from "@mui/material";
import ListSt from "@/public/components/thumbContainer/listSt";

export default function ForumGraducao() {
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
            Programação - Fórum Graduação
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-2">Fórum Graduação</h2>
        <p className="text-default">
          Segunda-feira, 02 de setembro de 2024 das 9:00-12:00 horas
        </p>
        <p className="text-default">Local: Anfiteatro Fausto Castilho</p>
        <h2 className="mb-2 title">Coordenação Geral:</h2>
        <p className="text-default">
          Arrovani Luiz Fonseca (SEE-SP/GT de Ensino de História ANPUH-SP).
        </p>
        <h2 className="mb-2 title">Assuntos</h2>
        <Box component={"ul"} className="mb-2">
          <li className="text-default">
            Plataformização do ensino: Renata Peres Barbosa (UFPR)
          </li>
          <li className="text-default">
            Curricularização da extensão na graduação de História: Rodrigo
            Camargo de Godoi (Unicamp) e Fabio Eduardo Cressoni (Universidade da
            Integração Internacional da Lusofonia Afro-brasileira (UNILAB))
          </li>
          <li className="text-default">
            Cursos noturnos de História na universidade. Raul Gomes de Oliveira
            (Unicamp)
          </li>
        </Box>
      </Container>
    </PageDefault>
  );
}
