import PageDefault from "@/public/components/pageContainer/pageContainer";
import { Grid } from "@mui/material";
import { Container, Row } from "react-bootstrap";

export default function Apoio() {
  return (
    <PageDefault title="Apoio">
      <Container>
        <Row xs={12} className="py-2">
          <h2 className="pt-4">Apoio e Realização</h2>
          <Row className="w-100 py-4 px-2 container-instrucao">
            <Grid
              container
              spacing={4}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item xs={4} sm={6} md={4}>
                <img src="/images/unesp-logo-11.png" alt="" className="w-100" />
              </Grid>
              <Grid item xs={4} sm={6} md={4}>
                <img
                  src="/images/ANPUH-SP_logo.webp"
                  alt=""
                  className="w-100"
                />
              </Grid>
              <Grid item xs={4} sm={6} md={4}>
                <img
                  src="/images/UNICAMP_logo.svg.png"
                  alt=""
                  className="w-100"
                />
              </Grid>
            </Grid>
            <div>
              <h2 className="pt-4 title">Contato: (Secretaria da ANPUH-SP)</h2>
              <p className="text-default">
                <b>e mail:</b> anpuhsp@usp.br{" "}
              </p>
              <p className="text-default">
                <b>Fones:</b> (11) 3091-3047 / (11) 93051-4289{" "}
              </p>
            </div>
          </Row>
        </Row>
      </Container>
    </PageDefault>
  );
}
