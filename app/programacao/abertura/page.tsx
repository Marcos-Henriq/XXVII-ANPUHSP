import PageDefault from "@/public/components/pageContainer/pageContainer";
import EventList from "@/public/components/schedules/scheduleList";
import ThumbContainer from "@/public/components/thumbContainer/thumbContainer";
import ListMesas from "@/public/components/thumbContainer/listMesas";
import {
  Container,
  Breadcrumbs,
  Link,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ListSt from "@/public/components/thumbContainer/listSt";
import { Col, Row } from "react-bootstrap";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { PlayArrow } from "@mui/icons-material";

export default function Abertura() {
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
            Programação - Conferência de Abertura
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-2">Conferência de Abertura</h2>
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
        <h2 className="mb-2 title">Memória ANPUH e as lutas pela História</h2>
        <p className="text-default">
          Ana Maria Veiga – Presidenta da ANPUH Brasil
        </p>
        <h2 className="mb-2 title">Segunda-feira, 02 de setembro de 2024</h2>
        <h2 className="mb-2 title">Anfiteatro Fausto Castilho</h2>
        <h2 className="mb-2 title">Horário: 19:30 horas</h2>
      </Container>
    </PageDefault>
  );
}
