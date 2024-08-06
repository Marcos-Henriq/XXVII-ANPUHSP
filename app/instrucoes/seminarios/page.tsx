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
            Os Seminários Temáticos serão os espaços para a apresentação de
            pesquisas concluídas ou em estágio avançado de realização sobre um
            mesmo tema. A previsão é de{" "}
            <b>
              26 Seminários Temáticos, com o mínimo de 12 e máximo de 24
              participantes
            </b>
            . A exigência do mínimo será reconsiderada nos casos especiais de
            áreas expressivas que, entretanto, não contam com grande número de
            pesquisadores. A proposta poderá ser feita por até 02 (dois(uas))
            coordenadores(as) para STs de grande demanda, que poderão ser
            desdobrados. Caberá ao(a) proponente/coordenador(a) definir as
            formas de trabalho no ST, sempre com o objetivo de garantir ampla
            participação e tempo necessário para apresentação, discussão e
            aprofundamento das questões suscitadas.
          </p>
          <p className="text-default">
            Os(As) proponentes/coordenadores(as) de seminários temáticos
            deverão:
          </p>
          <List className="d-flex flex-column flex-start gap-3 px-4">
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                Ser obrigatoriamente associados da ANPUH, estarem em dia com as
                anuidades de 2022 e 2023 no ato da inscrição e terem titulação
                mínima de doutor;
              </Typography>
            </ListItem>
          </List>
          <p className="text-default">
            Observação: Para evitar transtornos operacionais, não será devolvida
            a taxa de inscrição de Seminários Temáticos que não se viabilizarem.
            A taxa será considerada como pagamento de inscrição no Encontro ou
            na apresentação de trabalho em Seminário Temático.
          </p>
          <p className="text-default">
            As propostas de Seminários Temáticos deverão indicar:
          </p>

          <List className="d-flex flex-column flex-start gap-3">
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">1</Typography>
              <Typography className="text-default m-0">
                título (máximo de 200 caracteres com espaço);
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">2</Typography>
              <Typography className="text-default m-0">
                nome(s) do(a)s coordenador(a)s;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">3</Typography>
              <Typography className="text-default m-0">
                titulação e vínculo institucional do(a)s coordenador(a)s;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">4</Typography>
              <Typography className="text-default m-0">resumo;</Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">5</Typography>
              <Typography className="text-default m-0">objetivos;</Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">6</Typography>
              <Typography className="text-default m-0">
                justificativa da relevância do tema;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">7</Typography>
              <Typography className="text-default m-0">bibliografia</Typography>
            </ListItem>
          </List>

          <p className="text-default">Observações:</p>
          <List className="d-flex flex-column flex-start gap-3">
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">1</Typography>
              <Typography className="text-default m-0">
                As inscrições estarão disponíveis neste site de 11 de março de
                2024 até 02 de abril de 2024.
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">2</Typography>
              <Typography className="text-default m-0">
                Poderá ser feita de 1 a 2 coordenadores(as).
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">3</Typography>
              <Typography className="text-default m-0">
                No caso de ser mais de 1 coordenador(a), cada um(a) deve fazer a
                inscrição individualmente no sistema. O procedimento é
                necessário para o sistema gerar duas formas independentes de
                acesso à Área do Inscrito no site.
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">4</Typography>
              <Typography className="text-default m-0">
                Um Código do Trabalho será gerado à primeira pessoa que realizar
                a inscrição. Para que isso ocorra, no campo Tipo de Submissão,
                este(a) primeiro(a) inscrito(a) deve escolher a opção Coautoria
                - primeira inscrição do trabalho - e seguir normalmente com sua
                inscrição. Ao final do processo, um Código do Trabalho será
                gerado. Ao(A) próximo(a) a se inscrever basta escolher a opção
                Coautoria - trabalho já inscrito e informar o Código do Trabalho
                gerado ao(a) primeiro(a) inscrito(a).
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">5</Typography>
              <Typography className="text-default m-0">
                As propostas de Seminários Temáticos serão analisadas por
                Comissão Científica (Diretoria e Conselho), que atuará na fase
                preliminar da organização do evento, podendo operar junções e/ou
                desmembramentos de temas. O resultado da avaliação das propostas
                será divulgado no dia 18 de março de 2024.
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">6</Typography>
              <Typography className="text-default m-0">
                As propostas serão avaliadas pelos seguintes critérios: -
                Consistência e clareza da apresentação; - Observância da
                integralidade ou de aspectos relevantes do tema central do
                Encontro.
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">7</Typography>
              <Typography className="text-default m-0">
                Os(As) coordenadores(as), após a definição dos Seminários
                Temáticos, integrarão a Comissão Científica do evento.
              </Typography>
            </ListItem>
          </List>
          <p className="text-default">
            ATRIBUIÇÕES DAS COORDENAÇÕES DE STS APROVADOS.
          </p>
          <p className="text-default">
            Além da proposição de temas e do trabalho integrado na Comissão
            Científica, caberá aos(as) coordenadores(as):
          </p>
          <List className="d-flex flex-column flex-start gap-3 px-4">
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                Recebimento, avaliação e seleção de trabalhos, destinando-os à
                modalidade de apresentação que julgar mais adequada.
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                Organização das sessões de modo a assegurar a diversidade de
                vínculo institucional e de titulação dos(as) participantes.
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                Coordenação das atividades durante todo o Encontro.
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                Elaboração de relatório de atividades.
              </Typography>
            </ListItem>
          </List>
        </Row>
      </Container>
    </PageDefault>
  );
}
