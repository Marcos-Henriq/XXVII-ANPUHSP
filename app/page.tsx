import PageDefault from "@/public/components/pageContainer/pageContainer";
import { Button, Container, Grid } from "@mui/material";
import Image from "next/image";
import "./globals.css";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <PageDefault title="Inicio">
      <Container className="w-100" style={{ padding: "0" }}>
        <Row xs={12}>
          <img
            src="/images/banner.png" // Caminho para a imagem no diretório public
            alt="Logo"
            style={{ width: "100%" }}
          />
        </Row>
        <Container maxWidth="xl">
          <h2 className="py-1">Boas Vindas</h2>
          <p className="text-default">
            A Associação Nacional de História – Seção São Paulo tem a satisfação
            de receber as associadas e associados, bem como a comunidade de
            professores(as) e pesquisadores(as) para atuarem no 
            <b>XXVII Encontro Estadual de História</b>, nosso primeiro evento
            presencial após a pandemia de Covid-19.
          </p>
          <p className="text-default">
            Nos alegramos por ter o apoio da <b>Unicamp</b>, representado pela
            direção do IFCH – Instituto de Filosofia e Ciências Humanas, assim
            como do Departamento do curso de História, na pessoa da Diretora
            Raquel G. Alves Gomes, do Programa de Pós-graduação de História por
            meio de sua Coordenadora Luana S. Tvardovskas, e o Mestrado
            Profissional em Ensino de História – ProfHistória, e assim dispor
            das instalações para a realização deste evento durante os dias{" "}
            <b>02 a 06 de setembro de 2024</b>.
          </p>
          <p className="text-default">
            Após duas edições no formato virtual, voltaremos a nos encontrar
            para refletir sobre o tema: <b>História, por que ainda falar sobre
            isso?</b> Com o objetivo de enfatizar a importância do conhecimento
            histórico e da prática docente em todos os níveis, esse evento será
            mais uma forma de irmos contra o negacionismo científico que tem se
            ramificado nos últimos anos por meio de fake news e discursos que
            procuram esvaziar as análises pautadas em metodologias e fontes
            consagradas da História...
          </p>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <Link
                href="https://www.encontro2024.sp.anpuh.org"
                passHref
                className="text-decoration-none"
              >
                <Button variant="contained" className="button w-100">
                  Saiba mais
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </PageDefault>
  );
}
