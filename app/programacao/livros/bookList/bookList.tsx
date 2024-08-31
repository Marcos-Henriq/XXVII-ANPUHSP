import React from "react";
import livrosData from "@/public/data/books.json";
import { Grid, Link } from "@mui/material";
import Book from "../book/book";

interface Livro {
  id: number;
  titulo: string;
  ano: number;
  editoria: string;
  autoria: string;
  imgUrl: string;
}

const livros = livrosData.lancamentoLivros as Livro[];

const BookList: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {livros.map((livro) => (
        <Grid item key={livro.id} xs={12} sm={6} md={4} lg={3} >
            <Book title={livro.titulo} imgUrl={livro.imgUrl} date={livro.ano} desc="" autoria={livro.autoria} editoria={livro.editoria}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;