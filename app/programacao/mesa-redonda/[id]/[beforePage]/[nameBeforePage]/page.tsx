// app/programacao/mesa-redonda/[id]/page.tsx
import PageDefault from "@/public/components/pageContainer/pageContainer";
import mesasRedondasData from "@/public/data/mesasRedondas.json";
import { Breadcrumbs, Container, Link, Typography,Button } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { PlayArrow } from "@mui/icons-material";

interface MesaRedonda {
  id: number;
  titulo: string;
  data: string;
  horario: string;
  local: string;
  homenagem?: string;
  ementa: string;
  mediadora: string;
  palestrantes: {
    nome: string;
    afiliacao: string;
    tema: string;
  }[];
  tema?: string;
  mediador?: string;
}

interface Props {
  params: {
    id: string;
    beforePage: string;
    nameBeforePage: string;
  };
}

const mesasRedondas = mesasRedondasData.mesasRedondas as MesaRedonda[];

export default function MesaRedondaDetail({ params }: Props) {
  const id = parseInt(params.id, 10);
  const beforePage = params.beforePage;
  const nameBeforePage = params.nameBeforePage;
  const mesaRedonda = mesasRedondas.find((mesa) => mesa.id === id) || null;

  if (!mesaRedonda) {
    return (
      <PageDefault title="Mesa-redonda não encontrada">
        Mesa-redonda não encontrada.
      </PageDefault>
    );
  }

  return (
    <PageDefault title={`Mesa-redonda ${mesaRedonda.id}`}>
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
            Mesa redonda - {mesaRedonda.id}
          </Typography>
        </Breadcrumbs>

        <h2 className="mb-2">{mesaRedonda.titulo}</h2>
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
        <p className="text-default">
          {mesaRedonda.data} das {mesaRedonda.horario}
        </p>
        <h2 className="title mb-2">Local:</h2>
        <p className="text-default">{mesaRedonda.local}</p>
        <h2 className="title mb-2">Ementa:</h2>
        <p className="text-default">{mesaRedonda.ementa}</p>
        {mesaRedonda.homenagem && (
          <>
            <h2 className="title mb-2">Homenagem:</h2>
            {mesaRedonda.homenagem && (
              <p className="text-default">{mesaRedonda.homenagem}</p>
            )}
          </>
        )}

        <h2 className="title mb-2">Mediador(a):</h2>
        <p className="text-default">{mesaRedonda.mediadora}</p>
        {mesaRedonda.tema && (
          <>
            <h2 className="title mb-2">Tema</h2>
            <p className="text-default">{mesaRedonda.tema}</p>
          </>
        )}
        {mesaRedonda.mediador && (
          <>
            <h2 className="title mb-2">Mediador</h2>
            <p className="text-default">{mesaRedonda.mediador}</p>
          </>
        )}
        <h2 className="title">Palestrantes</h2>
        <ul>
          {mesaRedonda.palestrantes.map((palestrante, index) => (
            <li key={index} className="text-default">
              <strong>{palestrante.nome}</strong> ({palestrante.afiliacao}):
              {"-"}
              {palestrante.tema}
            </li>
          ))}
        </ul>
      </Container>
    </PageDefault>
  );
}
