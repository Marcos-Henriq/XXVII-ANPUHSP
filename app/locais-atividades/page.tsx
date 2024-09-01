import React from "react";
import {
  Grid,
  Link,
  Container,
  Breadcrumbs,
  Typography,
  Box,
} from "@mui/material";
import atividadesData from "@/public/data/atividades.json";
import PageDefault from "@/public/components/pageContainer/pageContainer";
import ThumbContainer from "@/public/components/thumbContainer/thumbContainer";
import { Row } from "react-bootstrap";

// Interface para as atividades e eventos
interface Evento {
  nome: string;
  link: string;
}

interface Atividades {
  marielle_franco: Evento[];
  fausto_castilho: Evento[];
  sala_multiuso: Evento[];
  sala_IH08: Evento[];
  sala_IH09: Evento[];
  sala_Apos_24A: Evento[];
  sala_Apos_14B: Evento[];
  sala_defesa_teste_I: Evento[];
  sala_defesa_teste_II: Evento[];
  sala_congregacao: Evento[];
  sala_acessivel_I: Evento[];
  sala_11b: Evento[];
  sala_14b: Evento[];
  sala_video: Evento[];
  sala_11a: Evento[];
  sala_24a: Evento[];
  sala_projecao: Evento[];
  sala_IH05: Evento[];
  sala_IH06: Evento[];
  labMet1: Evento[];
}

// Desestruturacao dos dados do JSON
const {
  marielle_franco,
  fausto_castilho,
  sala_Apos_14B,
  sala_Apos_24A,
  sala_multiuso,
  sala_IH08,
  sala_IH09,
  sala_defesa_teste_I,
  sala_defesa_teste_II,
  sala_congregacao,
  sala_acessivel_I,
  sala_11b,
  sala_14b,
  sala_video,
  sala_11a,
  sala_24a,
  sala_projecao,
  sala_IH05,
  sala_IH06,
  labMet1,
} = atividadesData as Atividades;

// Combina e ordena as atividades
const combineAndSortAtividades = (atividadesObj: Atividades) => {
  const allAtividades: Evento[] = Object.values(atividadesObj).flat();
  return allAtividades.sort((a, b) => a.nome.localeCompare(b.nome));
};

const renderAtividades = (atividades: Evento[], category: string) => {
  return (
    <Grid container spacing={2}>
      {atividades.map((atividade, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Link className="link" href={atividade.link}>
            <ThumbContainer date="" title={atividade.nome} desc="" />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

const RestauranteList: React.FC = () => {
  const allAtividadesOrdenadas = combineAndSortAtividades({
    marielle_franco,
    fausto_castilho,
    sala_Apos_14B,
    sala_Apos_24A,
    sala_multiuso,
    sala_IH08,
    sala_IH09,
    sala_defesa_teste_I,
    sala_defesa_teste_II,
    sala_congregacao,
    sala_acessivel_I,
    sala_11b,
    sala_14b,
    sala_video,
    sala_11a,
    sala_24a,
    sala_projecao,
    sala_IH05,
    sala_IH06,
    labMet1,
  });

  return (
    <PageDefault title="Locais de alimentacao">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Pagina inicial
          </Link>
          <Typography color="text.primary">Locais de atividades</Typography>
        </Breadcrumbs>
        <h2 className="mb-1">Locais de atividades</h2>
        <Row className="w-100 py-2 px-2 container-instrucao mb-4">
          <p className="text-default mb-0">
            Nota: Eventualmente, a criterio da Comissao Organizadora, os locais
            previamente informados na programacao, poderao sofrer alteracoes.
            Pessoas da Monitoria orientarao para o novo local, caso isso ocorra.
            Agradecemos a compreensao de cada participante.
          </p>
        </Row>
        <Box className="d-flex flex-column" sx={{ gap: "2.5rem" }}>
          <div>
            <h2 className="title">Anfiteatro Marielle Franco</h2>
            {renderAtividades(marielle_franco, "marielle_franco")}
          </div>
          <div>
            <h2 className="title">Anfiteatro Fausto Castilho</h2>
            {renderAtividades(fausto_castilho, "fausto_castilho")}
          </div>
          <div>
            <h2 className="title">Sala Multiuso</h2>
            {renderAtividades(sala_multiuso, "sala_multiuso")}
          </div>
          <div>
            <h2 className="title">Sala IH08</h2>
            {renderAtividades(sala_IH08, "sala_IH08")}
          </div>
          <div>
            <h2 className="title">Sala IH09</h2>
            {renderAtividades(sala_IH09, "sala_IH09")}
          </div>
          <div>
            <h2 className="title">Sala da Pós 24A</h2>
            {renderAtividades(sala_Apos_24A, "sala_Apos_24A")}
          </div>
          <div>
            <h2 className="title">Sala da Pós 14B</h2>
            {renderAtividades(sala_Apos_14B, "sala_Apos_14B")}
          </div>
          <div>
            <h2 className="title">Sala Defesa Teste I</h2>
            {renderAtividades(sala_defesa_teste_I, "sala_defesa_teste_I")}
          </div>
          <div>
            <h2 className="title">Sala Defesa Teste II</h2>
            {renderAtividades(sala_defesa_teste_II, "sala_defesa_teste_II")}
          </div>
          <div>
            <h2 className="title">Sala Congregação</h2>
            {renderAtividades(sala_congregacao, "sala_congregacao")}
          </div>
          <div>
            <h2 className="title">Sala Acessível I</h2>
            {renderAtividades(sala_acessivel_I, "sala_acessivel_I")}
          </div>
          <div>
            <h2 className="title">Sala 11B</h2>
            {renderAtividades(sala_11b, "sala_11b")}
          </div>
          <div>
            <h2 className="title">Sala 14B</h2>
            {renderAtividades(sala_14b, "sala_14b")}
          </div>
          <div>
            <h2 className="title">Sala de Vídeo</h2>
            {renderAtividades(sala_video, "sala_video")}
          </div>
          <div>
            <h2 className="title">Sala 11A</h2>
            {renderAtividades(sala_11a, "sala_11a")}
          </div>
          <div>
            <h2 className="title">Sala 24A</h2>
            {renderAtividades(sala_24a, "sala_24a")}
          </div>
          <div>
            <h2 className="title">Sala de Projeção</h2>
            {renderAtividades(sala_projecao, "sala_projecao")}
          </div>
          <div>
            <h2 className="title">Sala IH05</h2>
            {renderAtividades(sala_IH05, "sala_IH05")}
          </div>
          <div>
            <h2 className="title">Sala IH06</h2>
            {renderAtividades(sala_IH06, "sala_IH06")}
          </div>
          <div>
            <h2 className="title">LabMet1</h2>
            {renderAtividades(labMet1, "labMet1")}
          </div>
        </Box>
      </Container>
    </PageDefault>
  );
};

export default RestauranteList;
