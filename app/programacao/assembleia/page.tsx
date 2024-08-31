import PageDefault from "@/public/components/pageContainer/pageContainer";
import EventList from "@/public/components/schedules/scheduleList";
import ThumbContainer from "@/public/components/thumbContainer/thumbContainer";
import ListMesas from "@/public/components/thumbContainer/listMesas";
import { Container, Breadcrumbs, Link, Typography, Box } from "@mui/material";
import ListSt from "@/public/components/thumbContainer/listSt";

export default function Assembleia() {
  return (
    <PageDefault title="Mesas Redondas">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Link underline="hover" color="inherit" href={`/programacao/agenda`}>
            Programação
          </Link>
          <Typography color="text.primary">Programação - Assembleia</Typography>
        </Breadcrumbs>
        <h2 className="mb-2">Assembleia</h2>
        <p className="text-default">
          Você que é associado ou associada da ANPUH-SP venha participar da
          Assembleia, nela serão apresentados os relatórios das atividades da
          Associação e conhecida a nova diretoria eleita. Também serão indicados
          os membros do novo Conselho Consultivo, importante organismo de apoio
          à nova gestão. Venha participar, inclusive você, que ainda não é
          vinculado à ANPUH.
        </p>
        <h2 className="mb-2 title">Quarta-feira, 04 de setembro de 2024</h2>
        <h2 className="mb-2 title">Anfiteatro Fausto Castilho </h2>
        <h2 className="mb-2 title">Horário: 17:00 horas</h2>
      </Container>
    </PageDefault>
  );
}
