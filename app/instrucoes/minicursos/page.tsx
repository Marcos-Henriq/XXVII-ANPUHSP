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

export default function Minicurso() {
  return (
    <PageDefault title="Coordenação de Seminário Temático">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="text.primary">
            Instruções - Coordenação de Minicurso
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-4">Coordenação de Minicurso</h2>
        <Row className="w-100 py-4 px-2 container-instrucao">
          <p className="text-default">
            Os Minicursos são espaços de atualização para professores(as) do
            Ensino Fundamental e Médio, alunos(as) de graduação e pós-graduação
            e devem, preferencialmente, remeter-se ao tema geral do Encontro.
          </p>
          <List className="d-flex flex-column flex-start gap-3 px-4">
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                Serão oferecidos cursos, com seis horas-aula, distribuídas em
                sessões de duas horas (das 8h00 às 10h00), nos dias 03, 04 e 05
                de setembro;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                Serão analisadas pela Comissão Científica preliminar e
                divulgados a partir de 08 de abril de 2024, que os selecionarão
                considerando os critérios de qualidade e relevância acadêmica da
                proposta e experiência profissional dos(as) proponentes e
                viabilidade para o formato virtual.
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                O curso será realizado com o mínimo de 10 inscritos(a);
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                Para cada minicurso serão abertas 30 vagas que poderão ser
                ampliadas, havendo comum acordo entre a Comissão Organizadora e
                o(s) professor(es).
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                O curso deverá ser ministrado exclusivamente pelos(a)
                proponentes;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                Para evitar transtornos operacionais não será devolvida a taxa
                de inscrição de Minicursos que não se viabilizarem. A taxa será
                considerada como pagamento de inscrição no Encontro.
              </Typography>
            </ListItem>
          </List>
          <p className="text-default">
            Observação: a cada minicurso caberá um pró-labore (valor a ser
            estipulado)
          </p>
          <p className="text-default">
            CONDIÇÕES PARA APRESENTAÇÃO DE PROPOSTAS DE MINICURSOS:
          </p>
          <List className="d-flex flex-column flex-start gap-3 px-4">
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                Os(As) proponentes de Minicurso deverão obrigatoriamente ser
                associados(as) da ANPUH, estarem em dia com as anuidades de 2022
                e 2023 no ato da inscrição, terem titulação mínima de mestre e
                ter experiência docente
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                Poderá ser feita por 1 ou 2 ministrantes
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                No caso de serem 2 ministrantes, cada um deve fazer a inscrição
                individualmente no sistema.
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                O procedimento é necessário para o sistema gerar duas formas
                independentes de acesso à Área do(a) Inscrito(a).
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
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
          </List>
          <p className="text-default">
            AS PROPOSTAS DE MINICURSO DEVERÃO INDICAR:
          </p>
          <List className="d-flex flex-column flex-start gap-3 px-4">
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">título;</Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                nome(s) do(a)s proponente(s);
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                titulação e vínculo institucional do(a)s proponente(s);
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                ementa, forma de desenvolvimento do curso, objetivos, programa e
                bibliografia;
              </Typography>
            </ListItem>
          </List>
          <p className="text-default">Observações gerais:</p>
          <p className="text-default">
            - Não haverá devolução do valor de inscrição, caso a proposta não
            seja aprovada pela Comissão Científica ou não alcance o número
            mínimo de 10 inscritos;
          </p>
          <p className="text-default">
            - As pessoas responsáveis por coordenar os minicursos devem zelar
            pela lista de presença, passando-a em sala para a assinatura dos
            participantes, ou registrando a presença de outra forma.
          </p>
          <p className="text-default">
            - Além da proposição de temas e do trabalho integrado na Comissão
            Científica, caberá aos coordenadores:
          </p>
          <List className="d-flex flex-column flex-start gap-3 px-4">
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
