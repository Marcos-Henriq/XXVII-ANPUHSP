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
            como do Departamento do curso de História, do Programa de
            Pós-graduação de História e o Mestrado Profissional em Ensino de
            História – ProfHistória, e assim dispor das instalações para a
            realização deste evento durante os dias{" "}
            <b>02 a 06 de setembro de 2024</b>.
          </p>
          <p className="text-default">
            Após duas edições do evento no formato virtual, voltamos a nos
            encontrar de forma presencial para refletir sobre o tema:
            <b>História, por que ainda falar sobre isso?</b> Com o objetivo de
            enfatizar a importância do conhecimento histórico e da prática
            docente em todos os níveis, esse evento é uma demonstração contrária
            ao negacionismo científico que se alastrou nos últimos anos.
          </p>
          <p className="text-default">
            Enfim, desejamos que você aproveite bem esses dias de intensa
            programação aqui na Unicamp!
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
