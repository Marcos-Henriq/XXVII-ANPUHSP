// components/ThumbList.tsx
import React from "react";
import seminariosTematicosData from "@/public/data/st.json";
import { Grid, Link } from "@mui/material";
import ThumbContainer from "./thumbContainer";

interface SeminariosTematicos {
  id: number;
  codigo: string;
  titulo: string;
  coordenacao: string;
}

const sts =
  seminariosTematicosData.seminariosTematicos as SeminariosTematicos[];

const ListSt: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {sts.map((st) => (
        <Grid item xs={12} sm={6} md={4}>
          <Link
            className="link"
            href={`/programacao/seminarios/${
              st.id
            }/${"/seminarios"}/${"Seminarios-tematicos"}`}
          >
            <ThumbContainer
              date=""
              title={`${st.codigo}: ${st.titulo}`}
              desc={st.coordenacao}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListSt;
