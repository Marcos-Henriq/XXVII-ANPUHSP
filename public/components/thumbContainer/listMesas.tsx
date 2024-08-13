// components/ThumbList.tsx
import React from "react";
import mesasRedondasData from "@/public/data/mesasRedondas.json";
import { Grid, Link } from "@mui/material";
import ThumbContainer from "./thumbContainer";

interface MesaRedonda {
  id: number;
  titulo: string;
  data: string;
  horario: string;
  local: string;
  ementa: string;
}

const mesasRedondas = mesasRedondasData.mesasRedondas as MesaRedonda[];

const ListMesas: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {mesasRedondas.map((mesa) => (
        <Grid item key={mesa.id} xs={12} sm={6} md={4}>
          <Link
            className="link"
            href={`/programacao/mesa-redonda/${
              mesa.id
            }/${"/mesa-redonda"}/${"Mesas-redondas"}`}
          >
            <ThumbContainer
              title={mesa.titulo}
              desc={mesa.ementa}
              date={`${mesa.data} - ${mesa.horario}`}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListMesas;
