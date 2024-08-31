// components/RestauranteList.tsx
import React from "react";
import {
  Grid,
  Link,
  Paper,
  Divider,
  Container,
  Breadcrumbs,
  Typography,
  Box,
  ListItem,
  List,
  ListItemAvatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
} from "@mui/material";
import atividadesData from "@/public/data/atividades.json";
import PageDefault from "@/public/components/pageContainer/pageContainer";
import { AccessAlarm } from "@mui/icons-material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Row } from "react-bootstrap";
import ThumbContainer from "@/public/components/thumbContainer/thumbContainer";

interface Evento {
  nome: string;
  link: string;
}

interface Atividades{
  marielle_franco: Evento[];
  fausto_castilho: Evento[];
  sala_multiuso: Evento[];
  sala_IH08: Evento[];
  sala_IH09: Evento[];
  sala_Após_24A: Evento[];
  sala_Após_14B: Evento[];
}

const {
  marielle_franco,
  fausto_castilho,
  sala_Após_14B,
  sala_Após_24A,
  sala_multiuso,
  sala_IH08,
  sala_IH09
} = atividadesData as Atividades

const renderAtividades = (atividades: Evento[], category: string) => {
  return (
    <Grid container spacing={2}>
      {atividades.map((atividade, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Link
            className="link"
            href={atividade.link}
          >
            <ThumbContainer
              date=""
              title={atividade.nome}
              desc=""
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

const RestauranteList: React.FC = () => {
  return (
    <PageDefault title="Locais de alimentação">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="text.primary">Locais de atividades</Typography>
        </Breadcrumbs>
        <h2 className="mb-1">Locais de atividades</h2>
        <Row className="w-100 py-2 px-2 container-instrucao mb-4">
          <p className="text-default mb-0">
            Nota: Eventualmente, a critério da Comissão Organizadora, os locais
            previamente informados na programação, poderão sofrer alterações.
            Pessoas da Monitoria orientarão para o novo local, caso isso ocorra.
            Agradecemos a compreensão de cada participante.
          </p>
        </Row>
        <Box className="d-flex flex-column" sx={{ gap: "2.5rem" }}>
        <div>
            <h2 className="title">Anfiteatro Marielle Franco</h2>
            {renderAtividades(marielle_franco, "marielle_franco")}
          </div>
          <div>
            <h2 className="title">Anfiteatro Fausto Castilho</h2>
            {renderAtividades(
              fausto_castilho,
              "fausto_castilho"
            )}
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
            <h2 className="title">Sala da pós 24A</h2>
            {renderAtividades(sala_Após_24A, "sala_Após_24A")}
          </div>
          <div>
            <h2 className="title">Sala da pós 14B</h2>
            {renderAtividades(sala_Após_14B, "sala_Após_14B")}
          </div>
        </Box>
      </Container>
    </PageDefault>
  );
};

export default RestauranteList;
