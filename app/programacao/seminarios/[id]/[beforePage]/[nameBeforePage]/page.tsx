// app/programacao/mesa-redonda/[id]/page.tsx
import PageDefault from "@/public/components/pageContainer/pageContainer";
import seminariosTematicosData from "@/public/data/st.json";
import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  Typography,
  Button,
} from "@mui/material";
import { Col, Row } from "react-bootstrap";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { PlayArrow } from "@mui/icons-material";

interface SeminariosTematicos {
  id: number;
  codigo: string;
  titulo: string;
  coordenacao: string;
  local: string;
  dias: string;
  resumo?: string;
}

interface Props {
  params: {
    id: string;
    beforePage: string;
    nameBeforePage: string;
  };
}

const seminariosTematicos =
  seminariosTematicosData.seminariosTematicos as SeminariosTematicos[];

export default function SeminarioTematicosDetail({ params }: Props) {
  const id = parseInt(params.id, 10);
  const beforePage = params.beforePage;
  const nameBeforePage = params.nameBeforePage;
  const st = seminariosTematicos.find((st) => st.id === id) || null;

  if (!st) {
    return (
      <PageDefault title="Seminário Temático não encontrado">
        Simpósio Temático não encontrada.
      </PageDefault>
    );
  }

  return (
    <PageDefault title={`Mesa-redonda ${st.id}`}>
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href={`/programacao/${beforePage}`}
          >
            {nameBeforePage}
          </Link>
          <Typography color="text.primary">
            Simpósios Temáticos - {st.codigo}
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-2">
          {st.codigo}: <p>{st.titulo}</p>
        </h2>
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

        <h2 className="title mb-2">Coordenação:</h2>
        <p className="text-default">{st.coordenacao}</p>
        <h2 className="title mb-2">Local:</h2>
        <p className="text-default">{st.local}</p>
        <h2 className="title mb-2">Dias:</h2>
        <p className="text-default">{st.dias} de setembro</p>
        <h2 className="title mb-2">Resumo:</h2>
        <p className="text-default">{st.resumo}</p>
      </Container>
    </PageDefault>
  );
}
