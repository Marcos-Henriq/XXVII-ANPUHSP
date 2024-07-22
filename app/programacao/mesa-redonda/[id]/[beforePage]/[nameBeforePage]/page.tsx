// app/programacao/mesa-redonda/[id]/page.tsx
import PageDefault from "@/public/components/pageContainer/pageContainer";
import mesasRedondasData from "@/public/data/mesasRedondas.json";
import { Breadcrumbs, Link, Typography } from "@mui/material";

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
    nameBeforePage: string
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
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Página inicial
        </Link>
        <Link underline="hover" color="inherit" href={`/programacao/${beforePage}`}>
          {nameBeforePage}
        </Link>
        <Typography color="text.primary">Mesa Redonda - {mesaRedonda.id}</Typography>
      </Breadcrumbs>
      <h1>{mesaRedonda.titulo}</h1>
      <p>Data: {mesaRedonda.data}</p>
      <p>Horário: {mesaRedonda.horario}</p>
      <p>Local: {mesaRedonda.local}</p>
      <p>Ementa: {mesaRedonda.ementa}</p>
      {mesaRedonda.homenagem && <p>Homenagem: {mesaRedonda.homenagem}</p>}
      <h2>Mediadora</h2>
      <p>{mesaRedonda.mediadora}</p>
      {mesaRedonda.tema && (
        <>
          <h2>Tema</h2>
          <p>{mesaRedonda.tema}</p>
        </>
      )}
      {mesaRedonda.mediador && (
        <>
          <h2>Mediador</h2>
          <p>{mesaRedonda.mediador}</p>
        </>
      )}
      <h2>Palestrantes</h2>
      <ul>
        {mesaRedonda.palestrantes.map((palestrante, index) => (
          <li key={index}>
            <strong>{palestrante.nome}</strong> ({palestrante.afiliacao}):{" "}
            {palestrante.tema}
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}
