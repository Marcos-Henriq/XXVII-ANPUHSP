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

export default function Livros() {
  return (
    <PageDefault title="Coordenação de Seminário Temático">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="text.primary">
            Instruções - Lançamento de Livros
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-4">Lançamento de Livros</h2>
        <Row className="w-100 py-4 px-2 container-instrucao">
          <p className="text-default">
            Os lançamentos de livros constituem-se em importante atividade do
            Encontro Estadual de História, pois permitem que os participantes
            entrem em contato com pesquisas recém-publicadas e com autoras e
            autores.
          </p>
          <p className="text-default">
            Ao longo do evento, serão realizadas entrevistas com autoras e
            autores para promover a divulgação das obras.
          </p>
          <p className="text-default">
            As iniciativas acima apresentadas não substituirão o lançamento de
            livros, que será realizado durante o evento em data e local a ser
            definido.
          </p>
          <p className="text-default">
            <b>Instruções gerais:</b>
            <br />
            Para inscrever-se basta apenas enviar um e-mail para{" "}
            <b>anpuhsp@usp.br</b>
            com o assunto Lançamento de livro e contendo os seguintes dados:
          </p>
          <List className="d-flex flex-column flex-start gap-3">
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">1</Typography>
              <Typography className="text-default m-0">
                Nome da(s) autoras e/ou do(s) autores, ou organizadoras e
                organizadores e filiação institucional;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">2</Typography>
              <Typography className="text-default m-0">
                Título do livro
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">3</Typography>
              <Typography className="text-default m-0">Editora</Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">4</Typography>
              <Typography className="text-default m-0">
                Ano de publicação
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">5</Typography>
              <Typography className="text-default m-0">
                Foto legível da capa
              </Typography>
            </ListItem>
          </List>
          <p className="text-default">
            <b>O e-mail deve ser enviado até o dia 02 de agosto de 2024. </b>
          </p>
          <p className="text-default">
            - As autoras e autores deverão fornecer um desconto de 30% na noite
            do lançamento. A responsabilidade pelo transporte, venda e
            recolhimento após a sessão de autógrafos será de inteira
            responsabilidade da(s) autoras e/ou do(s) autores.
          </p>
          <p className="text-default">
            - Para aqueles que desejarem fazer o lançamento de seu livro, a
            estrutura fornecida pela organização do XXVII Encontro Estadual de
            História será: mesa, cadeiras e divulgação no site.
          </p>
          <p className="text-default">
            - A relação de livros a serem lançados estará disponível neste
            espaço no dia 09 de agosto de 2024.
          </p>
          <p className="text-default">
            Não serão aceitos lançamentos de livros que o(s) autor(es) não
            esteja(m) presente(s). Para tal, existirá o espaço da Feira de
            Livros.
          </p>
        </Row>
      </Container>
    </PageDefault>
  );
}
