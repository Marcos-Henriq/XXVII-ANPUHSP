import PageDefault from "@/public/components/pageContainer/pageContainer";
import { Grid } from "@mui/material";
import { Container, Row } from "react-bootstrap";

export default function Apoio() {
  return (
    <PageDefault title="Apoio">
      <Container>
        <Row xs={12} className="py-2">
          <h2 className="pt-4">Apoio e Realização</h2>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={4}>
              <img src="/images/FFLCH_logo.webp" alt="" className="w-100" />
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <img src="/images/ANPUH-SP_logo.webp" alt="" className="w-100" />
            </Grid>
          </Grid>
        </Row>
      </Container>
    </PageDefault>
  );
}
