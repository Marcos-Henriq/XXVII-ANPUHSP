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

export default function Seminario() {
  return (
    <PageDefault title="Coordenação de Seminário Temático">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="text.primary">
            Instruções - Coordenação de Seminário Temático
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-4">Coordenação de Seminário Temático</h2>
        <Row className="w-100 py-4 px-2 container-instrucao">
          <p className="text-default">
            Pedimos a gentileza que as coordenações mantenham as atividades
            dentro do tempo previsto. Foi destinado para cada apresentação de
            trabalho, cerca de 15 a 20 minutos, para que haja um tempo de ao
            menos 60 minutos de comentários e debate. Há sugestão de intervalo
            de 20 minutos.
          </p>
          <p className="text-default">
            Na quarta-feira, dedicamos o horário das 16-16:30 horas para a
            Reunião dos Grupos de Trabalho (GTs) da ANPUH-SP, onde deverá
            ocorrer a indicação de nova coordenação, bem como aprovação do
            Relatório de Atividades realizadas durante o biênio (2022-2024),
            cujas informações deverão ser enviadas para a secretaria pelo email:
            anpuhsp@usp.br.
          </p>
          <p className="text-default">
            A presença de pessoas da Monitoria, devidamente identificadas com a
            camiseta do evento, passarão uma lista diária de presença dos
            participantes de cada ST, procurando dar o apoio necessário para a
            bom andamento das atividades.
          </p>
        </Row>
      </Container>
    </PageDefault>
  );
}
