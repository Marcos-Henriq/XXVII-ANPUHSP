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

export default function Poster() {
  return (
    <PageDefault title="Agenda">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="text.primary">
            Instruções - Apresentador poster
          </Typography>
        </Breadcrumbs>
        <h2 className="mb-4">Apresentador poster</h2>
        <Row className="w-100 py-4 px-2 container-instrucao">
          <p>
            Os PÔSTERES se destinam à apresentação de trabalhos de iniciação
            científica realizados por estudantes de graduação em História, em
            grupo ou individualmente. Nesta modalidade, a responsabilidade pela
            seleção de trabalhos é do(a) docente orientador(a), o que não
            configura coautoria.
          </p>
          <p>
            Serão destinados espaços onde, agrupados por afinidade temática,
            os(as) autores(as) dos pôsteres apresentarão seus trabalhos.
          </p>
          <p>
            A inscrição deve ser acompanhada de resumo (1000 caracteres com
            espaços). O texto sobre o tema do pôster (máximo de 10 laudas)
            constará nos anais eletrônicos do Encontro.
          </p>
          <p>
            Cada autor(a) de pôster, em caso de coautoria, deve efetuar sua
            inscrição individualmente.
          </p>
          <p>
            <b>Período de inscrição: 06 de maio a 06 de agosto de 2024</b>
          </p>
          <p>
            Instruções para publicar os textos integrais nos anais eletrônicos
            (anexar no sistema até o dia <b>19 de agosto</b>)
          </p>
          <List className="d-flex flex-column flex-start gap-3">
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <p className="text-default m-0">1</p>
              <p className="text-default m-0">Formato: A4;</p>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <p className="text-default m-0">2</p>
              <p className="text-default m-0">Fonte: Times New Roman;</p>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <p className="text-default m-0">3</p>
              <p className="text-default m-0">Tamanho: 12;</p>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <p className="text-default m-0">4</p>
              <p className="text-default m-0">Espaçamento: 1,5;</p>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <p className="text-default m-0">5</p>
              <p className="text-default m-0">
                Número máximo de 10 laudas e mínimo de 7 laudas, incluindo as
                referências;
              </p>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <p className="text-default m-0">6</p>
              <p className="text-default m-0">
                Margens: superior e inferior 2,5; esquerda e direita 3,0;
              </p>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <p className="text-default m-0">7</p>
              <p className="text-default m-0">Alinhamento: justificado;</p>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <p className="text-default m-0">8</p>
              <p className="text-default m-0">
                Título em maiúsculo, centralizado e em negrito;
              </p>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <p className="text-default m-0">9</p>
              <p className="text-default m-0">
                Nome do(a)s autor(a)s alinhado à direita depois de uma linha de
                espaço do título;
              </p>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <p className="text-default m-0">10</p>
              <p className="text-default m-0">
                Vinculação institucional, logo abaixo do(a)s nome(s) do(a)s
                autor(a)s, também alinhado à direita;
              </p>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <p className="text-default m-0">11</p>
              <p className="text-default m-0">
                Endereço eletrônico logo abaixo da vinculação institucional;
              </p>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <p className="text-default m-0">12</p>
              <p className="text-default m-0">
                Citações com até 3 (três) linhas deverão vir no corpo do texto,
                sem itálico, com chamada autor-data entre parênteses. As
                citações com mais de 3 (três) linhas devem vir fora do corpo do
                texto, tamanho 10, com recuo de 4 cm;
              </p>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <p className="text-default m-0">13</p>
              <p className="text-default m-0">
                Caso o trabalho contenha imagens, estas deverão estar em 300 dpi
                no formato TIF ou JPEG, dimensionadas no formato de
                aproximadamente 5x5cm e colocadas no próprio texto.
              </p>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <p className="text-default m-0">14</p>
              <p className="text-default m-0">
                As indicações bibliográficas no corpo do texto, colocadas entre
                parênteses, deverão se resumir ao último sobrenome do autor, à
                data de publicação da obra e à página, quando necessário (BURKE,
                2005, p. 20). Se o nome do autor estiver citado no corpo do
                texto, indicam-se, entre parênteses, apenas a data e a página.
                Notas de rodapé, apenas em caráter de explicação;
              </p>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <p className="text-default m-0">15</p>
              <p className="text-default m-0">
                As referências bibliográficas finais devem seguir as
                recomendações da ABNT.
              </p>
            </ListItem>
          </List>
        </Row>
      </Container>
    </PageDefault>
  );
}
