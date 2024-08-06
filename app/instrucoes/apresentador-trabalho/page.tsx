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
        <Row className="w-100 py-4 px-2 container-instrucao">
          <p className="text-default">
            Os STs serão os espaços para a apresentação e discussão de pesquisas
            concluídas ou em estágio avançado de realização sobre um mesmo tema.
          </p>
          <List className="d-flex flex-column flex-start gap-3 px-4">
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                Para a apresentação de trabalho nos Seminários Temáticos
                exige-se titulação mínima de Graduação.
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                Cada inscrito(a) poderá apresentar apenas 1 (um) trabalho em
                apenas 1 (um) Seminário Temático. O(A) inscrito(a) deverá
                escolher 3 (três) Seminários Temáticos na ordem de sua
                preferência. Caso não seja aceito(a) no primeiro, será realocado
                na opção seguinte.
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                A avaliação, o aceite e a eliminação de trabalhos são da
                responsabilidade do(s) Coordenador(es) de cada Seminário
                Temático.
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                Além do resumo (máximo de 2800 caracteres), o envio do texto
                completo é importante para que o trabalho possa ser avaliado
                adequadamente pelo(a)s coordenadore(a)s. A data limite de
                entrega dos textos completos para os Anais Eletrônicos é dia 19
                de agosto.
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                O certificado de apresentação de trabalho será emitido somente
                aos presentes em 75% das atividades do Seminário.
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                Não haverá devolução do valor de inscrição. Caso o trabalho não
                seja aceito, o(a) inscrito(a) poderá usar o valor pago na
                inscrição como Ouvinte.
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">
                No formulário de inscrição, ao clicar em "apresentador de
                trabalho", três caixas podem ser visualizadas para cada opção de
                ST - uma para a inclusão do título do trabalho, outra para
                inclusão do resumo e mais uma para inclusão do texto completo.
                Pode ser utilizada qualquer fonte, pois o sistema a padronizará
                (não utilize caixa alta no texto do resumo, apenas na autoria).
              </Typography>
            </ListItem>
          </List>
          <p className="text-default">
            Instruções aos(as) inscritos(as) em Seminários Temáticos para
            publicar os textos integrais nos anais eletrônicos (
            <b>anexar na área do inscrito até 19 de agosto</b>)
          </p>
          <List className="d-flex flex-column flex-start gap-3">
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">1</Typography>
              <Typography className="text-default m-0">Formato: A4;</Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">2</Typography>
              <Typography className="text-default m-0">
                Fonte: Times New Roman;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">3</Typography>
              <Typography className="text-default m-0">Tamanho: 12;</Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">4</Typography>
              <Typography className="text-default m-0">
                Espaçamento: 1,5;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">5</Typography>
              <Typography className="text-default m-0">
                Número máximo de 15 laudas e mínimo de 10 laudas, incluindo as
                referências;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">6</Typography>
              <Typography className="text-default m-0">
                Margens: superior e inferior 2,5; esquerda e direita 3,0;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">7</Typography>
              <Typography className="text-default m-0">
                Alinhamento: justificado;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">8</Typography>
              <Typography className="text-default m-0">
                Título em maiúsculo, centralizado e em negrito;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">9</Typography>
              <Typography className="text-default m-0">
                Nome do(a)s autor(a)s alinhado à direita depois de uma linha de
                espaço do título;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">10</Typography>
              <Typography className="text-default m-0">
                Vinculação institucional, logo abaixo do(a)s nome(s) do(a)s
                autor(a)s, também alinhado à direita;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">11</Typography>
              <Typography className="text-default m-0">
                Endereço eletrônico logo abaixo da vinculação institucional;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">12</Typography>
              <Typography className="text-default m-0">
                Citações com até 3 (três) linhas deverão vir no corpo do texto,
                sem itálico, com chamada autor-data entre parênteses. As
                citações com mais de 3 (três) linhas devem vir fora do corpo do
                texto, tamanho 10, com recuo de 4 cm;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">13</Typography>
              <Typography className="text-default m-0">
                Caso o trabalho contenha imagens, estas deverão estar em 300 dpi
                no formato TIF ou JPEG, dimensionadas no formato de
                aproximadamente 5x5cm e colocadas no próprio texto.
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">14</Typography>
              <Typography className="text-default m-0">
                As indicações bibliográficas no corpo do texto, colocadas entre
                parênteses, deverão se resumir ao último sobrenome do autor, à
                data de publicação da obra e à página, quando necessário (BURKE,
                2005, p. 20). Se o nome do autor estiver citado no corpo do
                texto, indicam-se, entre parênteses, apenas a data e a página.
                Notas de rodapé, apenas em caráter de explicação;
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              className="d-flex gap-2 justify-center"
              sx={{ alignItems: "start" }}
            >
              <Typography className="text-default m-0">15</Typography>
              <Typography className="text-default m-0">
                As referências bibliográficas finais devem seguir as
                recomendações da ABNT.
              </Typography>
            </ListItem>
          </List>
        </Row>
      </Container>
    </PageDefault>
  );
}
