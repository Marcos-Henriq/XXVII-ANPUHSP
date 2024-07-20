import PageDefault from "@/public/components/pageContainer/pageContainer";
import { Button, Container } from "@mui/material";
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
            de convidar as associadas e associados, bem como a comunidade de
            professores(as) e pesquisadores(as) para participarem do 
            <b>XXVII Encontro Estadual de História</b>, evento que ocorrerá de
            forma presencial de <b>02 a 06 de setembro de 2024</b> na 
            <b>Unicamp</b>, em Campinas, São Paulo.
          </p>
          <p className="text-default">
            Após duas edições no formato virtual, voltaremos a nos encontrar
            para refletir sobre o tema: História, por que ainda falar sobre
            isso? Com o objetivo de enfatizar a importância do conhecimento
            histórico e da prática docente em todos os níveis, esse evento será
            mais uma forma de dizer não ao negacionismo científico que tem se
            ramificado nos últimos anos por meio de fake news e discursos que
            procuram esvaziar as análises pautadas em metodologias e fontes
            consagradas da História...
          </p>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <Link href="https://www.encontro2024.sp.anpuh.org" passHref className="text-decoration-none">
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
