// components/RestauranteList.tsx
import React from "react";
import {
  Grid,
  Link,
  Paper,
  Divider,
  Container,
  Breadcrumbs,
  Typography,
  Box,
  ListItem,
  List,
  ListItemAvatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
} from "@mui/material";
import restaurantesData from "@/public/data/restaurantes.json";
import PageDefault from "@/public/components/pageContainer/pageContainer";
import { AccessAlarm } from "@mui/icons-material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Row } from "react-bootstrap";

interface HorarioFuncionamento {
  cafe_da_manha?: string;
  almoco: string;
  jantar: string;
  segundaQuarta?: string;
  quintaDomingo?: string;
  segundaSexta?: string;
}

interface Restaurante {
  nome: string;
  endereco: string;
  horarios: HorarioFuncionamento | string;
  descricao?: string;
  ofertas?: string;
}

interface RestaurantesData {
  restaurantes_universitarios: Restaurante[];
  campus: Restaurante[];
  proximidades_unicamp: Restaurante[];
  barao_geraldo: Restaurante[];
  happy_hour: Restaurante[];
}

const {
  restaurantes_universitarios,
  campus,
  proximidades_unicamp,
  barao_geraldo,
  happy_hour,
} = restaurantesData as RestaurantesData;

const renderHorarios = (horarios?: HorarioFuncionamento) => {
  if (!horarios) return <p className="text-default">Horarios indisponíveis</p>;

  const {
    cafe_da_manha,
    almoco,
    jantar,
    segundaQuarta,
    quintaDomingo,
    segundaSexta,
  } = horarios;
  return (
    <List
      sx={{
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {segundaQuarta && (
        <ListItem className="item-horario">
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "#F4B303" }}>
              <AccessAlarm color="secondary" fontSize="large" />
            </Avatar>
          </ListItemAvatar>
          <div className="d-flex flex-column align-center justify-center">
            <span className="title">Segunda a Quarta</span>
            <p className="subtitle">{segundaQuarta}</p>
          </div>
        </ListItem>
      )}
      {quintaDomingo && (
        <ListItem className="item-horario">
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "#F4B303" }}>
              <AccessAlarm color="secondary" fontSize="large" />
            </Avatar>
          </ListItemAvatar>
          <div className="d-flex flex-column align-center justify-center">
            <span className="title">Quinta a Domingo</span>
            <p className="subtitle">{quintaDomingo}</p>
          </div>
        </ListItem>
      )}
      {segundaSexta && (
        <ListItem className="item-horario">
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "#F4B303" }}>
              <AccessAlarm color="secondary" fontSize="large" />
            </Avatar>
          </ListItemAvatar>
          <div className="d-flex flex-column align-center justify-center">
            <span className="title">Segunda a Sexta</span>
            <p className="subtitle">{segundaSexta}</p>
          </div>
        </ListItem>
      )}
      {cafe_da_manha && (
        <ListItem className="item-horario">
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "#F4B303" }}>
              <AccessAlarm color="secondary" fontSize="large" />
            </Avatar>
          </ListItemAvatar>
          <div className="d-flex flex-column align-center justify-center">
            <span className="title">Café da Manhã</span>
            <p className="subtitle">{cafe_da_manha}</p>
          </div>
        </ListItem>
      )}
      {almoco && (
        <ListItem className="item-horario">
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "#F4B303" }}>
              <AccessAlarm color="secondary" fontSize="large" />
            </Avatar>
          </ListItemAvatar>
          <div className="d-flex flex-column align-center justify-center">
            <span className="title">Almoço</span>
            <p className="subtitle">{almoco}</p>
          </div>
        </ListItem>
      )}
      {jantar && (
        <ListItem className="item-horario">
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "#F4B303" }}>
              <AccessAlarm color="secondary" fontSize="large" />
            </Avatar>
          </ListItemAvatar>
          <div className="d-flex flex-column align-center justify-center">
            <span className="title">Jantar</span>
            <p className="subtitle">{jantar}</p>
          </div>
        </ListItem>
      )}
    </List>
  );
};

const renderRestaurantes = (restaurantes: Restaurante[], category: string) => {
  return (
    <Grid container spacing={2}>
      {restaurantes.map((restaurante, index) => {
        const enderecoEncoded = encodeURIComponent(restaurante.endereco);
        const restauranteEncoded = encodeURIComponent(restaurante.nome);
        const query = `${restauranteEncoded} ${enderecoEncoded}`;
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

        return (
          <Grid item xs={12} sm={6} md={4} key={`${category}-${index}`}>
            <Paper
              variant="outlined"
              square={false}
              className="p-4"
              sx={{ borderRadius: "22px" }}
            >
              <Typography variant="h6" component="h2" className="title">
                {restaurante.nome}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className="text-default"
              >
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  className="text-link d-flex gap-1"
                  rel="noopener noreferrer"
                >
                  {restaurante.endereco}
                  <OpenInNewIcon />
                </a>
              </Typography>
              {restaurante.descricao && (
                <Typography
                  variant="body1"
                  component="p"
                  className="text-default"
                >
                  {restaurante.descricao}
                </Typography>
              )}
              {restaurante.ofertas && (
                <Typography
                  variant="body1"
                  component="p"
                  className="text-default"
                >
                  {restaurante.ofertas}
                </Typography>
              )}
              <Divider />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography variant="h6" className="title" component="div">
                    Horários
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {typeof restaurante.horarios === "string" ? (
                    <Typography variant="body1" component="p">
                      {restaurante.horarios}
                    </Typography>
                  ) : (
                    renderHorarios(restaurante.horarios)
                  )}
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

const RestauranteList: React.FC = () => {
  return (
    <PageDefault title="Locais de alimentação">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="text.primary">Locais de Alimentação</Typography>
        </Breadcrumbs>
        <h2 className="mb-4">Locais de alimentação</h2>
        <Box className="d-flex flex-column" sx={{ gap: "2.5rem" }}>
          <div>
            <h2 className="title">Restaurantes Universitários</h2>
            {renderRestaurantes(
              restaurantes_universitarios,
              "restaurantes_universitarios"
            )}
          </div>
          <div>
            <h2 className="title">Campus</h2>
            {renderRestaurantes(campus, "campus")}
          </div>

          <div>
            <h2 className="title">Proximidades da Unicamp</h2>
            {renderRestaurantes(proximidades_unicamp, "proximidades_unicamp")}
          </div>
          <div>
            <h2 className="title">Barão Geraldo</h2>
            {renderRestaurantes(barao_geraldo, "barao_geraldo")}
          </div>
          <div>
            <h2 className="title">Happy Hour</h2>
            {renderRestaurantes(happy_hour, "happy_hour")}
          </div>
        </Box>
      </Container>
    </PageDefault>
  );
};

export default RestauranteList;
