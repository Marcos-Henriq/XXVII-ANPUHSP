import PageDefault from "@/public/components/pageContainer/pageContainer";
import EventList from "@/public/components/schedules/scheduleList";
import ThumbContainer from "@/public/components/thumbContainer/thumbContainer";
import ListMesas from "@/public/components/thumbContainer/listMesas";
import { Container, Breadcrumbs, Link, Typography, Box, Button } from "@mui/material";
import ListSt from "@/public/components/thumbContainer/listSt";
import { Col, Row } from "react-bootstrap";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { PlayArrow } from "@mui/icons-material";

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
        <Row className="mb-4">
          <Col sm={12} md={6} lg={3}>
            <Link
              href="https://www.youtube.com/@ANPUH-SP"
              className="text-decoration-none"
            >
              <Button
                variant="contained"
                className="button w-100"
                endIcon={<PlayArrow />}
              >
                Ver no youtube
              </Button>
            </Link>
          </Col>
        </Row>
        <h2 className="mb-2 title">Coordenação Geral:</h2>
        <p className="text-default">
          Arrovani Luiz Fonseca (SEE-SP/GT de Ensino de História ANPUH-SP).
        </p>
        <h2 className="mb-2 title">Plataformização do ensino:</h2>
        <p className="text-default">Renata Peres Barbosa (UFPR)</p>

        <h2 className="mb-2 title">
          Curricularização da extensão na graduação de História:
        </h2>
        <p className="text-default">
          Rodrigo Camargo de Godoi (Unicamp) e Fabio Eduardo Cressoni
          (Universidade da Integração Internacional da Lusofonia Afro-brasileira
          (UNILAB))
        </p>

        <h2 className="mb-2 title">
          Cursos noturnos de História na universidade:
        </h2>
        <p className="text-default">Raul Gomes de Oliveira (Unicamp)</p>
        <p className="text-default">
          Segunda-feira, 02 de setembro de 2024 das 9:00-12:00 horas
        </p>
        <h2 className="mb-2 title">Segunda-feira, 02 de setembro de 2024</h2>
        <h2 className="mb-2 title">Anfiteatro Fausto Castilho</h2>
        <h2 className="mb-2 title">Horário: 9-12 horas</h2>
      </Container>
    </PageDefault>
  );
}
