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
          <p className="text-default">
            <b>
              Para inscrever-se em minicurso, o interessado deve escolher 3
              (três) entre as opções listadas na página do evento, classificadas
              em 1ª, 2ª e 3ª opções. Caso o minicurso escolhido em 1ª opção seja
              cancelado por não atingir o número mínimo exigido de participantes
              (10), o(a) inscrito(a) será realocado(a) no minicurso escolhido em
              2ª opção, e assim sucessivamente.
            </b>
          </p>
          <p className="text-default">
            <b>Não haverá devolução do valor de inscrição.</b>
          </p>
          <p className="text-default">
            O número máximo de participantes em cada minicurso é de 30, e a
            preferência é dada ao(a) candidato(a) que se inscreveu primeiro.
          </p>
          <p className="text-default">
            Os(As) que já estão inscritos(as) como proponente, apresentador(a)
            de trabalho ou ouvinte podem fazer a inscrição em minicurso entrando
            na "Área do inscrito", com seu login e senha, onde encontrará a
            opção "Inscrição em minicurso". Essa opção abre um formulário para
            escolha das 3 opções de minicursos e, depois de preenchido, gera
            automaticamente um novo boleto para pagamento.
          </p>
          <p className="text-default">
            As inscrições prévias para minicurso ocorrerão entre terça, 09 de
            abril, e segunda, 19 de agosto.
          </p>
          <p className="text-default">
            Para receber o certificado,{" "}
            <b>
              é necessário ter presença em 2 dos 3 dias do minicurso oferecido
            </b>
            .
          </p>
        </Row>
      </Container>
    </PageDefault>
  );
}
