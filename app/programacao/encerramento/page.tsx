import PageDefault from "@/public/components/pageContainer/pageContainer";
import EventList from "@/public/components/schedules/scheduleList";
import ThumbContainer from "@/public/components/thumbContainer/thumbContainer";
import ListMesas from "@/public/components/thumbContainer/listMesas";
import { Container, Breadcrumbs, Link, Typography, Box,Button } from "@mui/material";
import ListSt from "@/public/components/thumbContainer/listSt";
import { Col, Row } from "react-bootstrap";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { PlayArrow } from "@mui/icons-material";

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
          <Typography color="text.primary">Programação - Conferência de Encerramento</Typography>
        </Breadcrumbs>
        <h2 className="mb-2">Conferência de Encerramento</h2>
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
        <p className="text-default">
        As cotas raciais e o novo estatuto historiográfico do protagonismo africano na História do Brasil
        </p>
        <p className="text-default">
        Aldair Carlos Rodrigues - Unicamp
        </p>
        <h2 className="mb-2 title">Quinta-feira, 05 de setembro de 2024</h2>
        <h2 className="mb-2 title">Anfiteatro Fausto Castilho </h2>
        <h2 className="mb-2 title">Horário: 19:30 horas</h2>
      </Container>
    </PageDefault>
  );
}
