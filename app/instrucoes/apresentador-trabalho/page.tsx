import PageDefault from "@/public/components/pageContainer/pageContainer";
import Schedule from "@/public/components/schedules/schedule";
import {
  Breadcrumbs,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Breadcrumb, Container, Row } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import EventList from "@/public/components/schedules/scheduleList";

export default function Trabalho() {
  return (
    <PageDefault title="apresentador de trabalho">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="text.primary">
            Instruções - Apresentador de Trabalho
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-4">Apresentador de Trabalho</h2>
        <Row className="w-100 py-2 px-2 container-instrucao mb-4">
          <p className="text-default mb-0">
            Nota: quem for utilizar power-point para sua exposição que o faça no formato PDF, para evitar desconfiguração.
          </p>
        </Row>
        <Row className="w-100 py-4 px-2 container-instrucao">
          <p className="text-default">
            Pedimos que não cheguem atrasado nos dias agendados para sua
            apresentação, e quem for utilizar power-point para sua exposição,
            que chegue um pouco antes para instalar e testar os equipamentos. A
            presença de pessoas da Monitoria, devidamente identificadas com a
            camiseta do evento, estarão prontas para ajudar a solucionar
            qualquer problema. Caso você tenha algum imprevisto que impeça sua
            apresentação na data agendada, procure entrar em contato com a
            coordenação do seu ST ou com a secretaria do evento: (11) 93051-4289
            (Cel/Whatsapp) ou anpuhsp@usp.br.
          </p>
        </Row>
      </Container>
    </PageDefault>
  );
}
