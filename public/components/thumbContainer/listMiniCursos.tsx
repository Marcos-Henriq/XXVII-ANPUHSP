// components/ThumbList.tsx
import React from "react";
import minicursosData from "@/public/data/minicurso.json";
import { Grid, Link } from "@mui/material";
import ThumbContainer from "./thumbContainer";

interface Minicursos {
  id: number;
  titulo: string;
  local:string;
  ementa: string;
  programa?: string;
  objetivos?: [];
  curso?: string;
  ministrantes: [];
  aulas?: [];
}

const minicursos =
minicursosData.minicursos as Minicursos[];

const ListMiniCursos: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {minicursos.map((minicurso) => (
        <Grid item xs={12} sm={6} md={4}>
          <Link
            className="link"
            href={`/programacao/mini-cursos/${
              minicurso.id
            }/${"/mini-cursos"}/${"Mini-cursos"}`}
          >
            <ThumbContainer
              date=""
              title={`Minicurso - ${minicurso.id} : ${minicurso.titulo}`}
              desc=""
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListMiniCursos;
