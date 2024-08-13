import React from "react";
import livrosData from "@/public/data/books.json";
import { Grid, Link } from "@mui/material";
import Book from "../book/book";

interface MesaRedonda {
  id: number;
  titulo: string;
  anoLancamento: string;
  imgUrl: string;
}

const livros = livrosData.livros as MesaRedonda[];

const BookList: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {livros.map((livro) => (
        <Grid item key={livro.id} xs={12} sm={6} md={4} lg={3} >
            <Book title={livro.titulo} imgUrl={livro.imgUrl} date={livro.anoLancamento} desc=""/>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;