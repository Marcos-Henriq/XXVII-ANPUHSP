// app/programacao/mesa-redonda/[id]/page.tsx
import PageDefault from "@/public/components/pageContainer/pageContainer";
import minicursoData from "@/public/data/minicurso.json";
import { Box, Breadcrumbs, Container, Link, Typography, Button } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { PlayArrow } from "@mui/icons-material";

interface Minicurso {
  id: number;
  titulo: string;
  ementa: string;
  programa?: string;
  objetivos?: [];
  curso?: string;
  ministrantes: [];
  local: string;
  aulas?: [];
}

interface Props {
  params: {
    id: string;
    beforePage: string;
    nameBeforePage: string;
  };
}

const seminariosTematicos = minicursoData.minicursos as Minicurso[];

export default function MiniCursoDetail({ params }: Props) {
  const id = parseInt(params.id, 10);
  const beforePage = params.beforePage;
  const nameBeforePage = params.nameBeforePage;
  const minicurso = seminariosTematicos.find((st) => st.id === id) || null;

  if (!minicurso) {
    return (
      <PageDefault title="Minicurso não encontrado">
        Minicurso não encontrada.
      </PageDefault>
    );
  }

  return (
    <PageDefault title={`Minicurso ${minicurso.id}`}>
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
            Mini-curso - {minicurso.id}
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-2">
          Mini-curso <p>{minicurso.titulo}</p>
        </h2>
        <Row className="mb-4">
          <Col sm={12} md={6} lg={3}>
            <Link
              href="https://www.youtube.com/@ANPUH-SP"
              className="text-decoration-none"
            >
              <Button variant="contained" className="button w-100" endIcon={<PlayArrow/>}>
                Ver no youtube
              </Button>
            </Link>
          </Col>
        </Row>
        <h2 className="title mb-2">Local:</h2>
        <p className="text-default">{minicurso.local}</p>
        <h2 className="title mb-2">Ministrantes:</h2>
        <Box component={"ul"} className="mb-2">
          {minicurso.ministrantes.map((ministrantes, index) => (
            <li key={index} className="text-default">
              {ministrantes}
            </li>
          ))}
        </Box>

        <h2 className="title mb-2">Ementa:</h2>
        <p className="text-default">{minicurso.ementa}</p>
        {minicurso.programa && (
          <>
            <h2 className="title mb-2">Programa:</h2>
            <p className="text-default">{minicurso.programa}</p>
          </>
        )}

        {minicurso.objetivos && (
          <>
            <h2 className="title mb-2">Objetivos:</h2>
            <Box component={"ul"} className="mb-2">
              {minicurso.objetivos.map((objetivo, index) => (
                <li key={index} className="text-default">
                  {objetivo}
                </li>
              ))}
            </Box>
          </>
        )}
        {minicurso.curso && (
          <>
            <h2 className="title mb-2">Curso:</h2>
            <p className="text-default">{minicurso.curso}</p>
          </>
        )}
        {minicurso.aulas && (
          <>
            <h2 className="title mb-2">Aulas:</h2>
            <Box component={"ul"} className="mb-2">
              {minicurso.aulas.map((palestrante, index) => (
                <li key={index} className="text-default">
                  {palestrante}
                </li>
              ))}
            </Box>
          </>
        )}
      </Container>
    </PageDefault>
  );
}
