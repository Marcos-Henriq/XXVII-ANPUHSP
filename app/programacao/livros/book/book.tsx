"use client";
import React, { useState } from "react";
import { Paper, Box, Grid } from "@mui/material";
import { Image } from "react-bootstrap";
import Dialog from "@mui/material/Dialog";

interface BookProps {
  title: string;
  desc: string;
  autoria: string;
  editoria: string;
  date: number;
  imgUrl: string;
}

export default function Book({ title, desc, date, imgUrl, autoria, editoria }: BookProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Paper
        elevation={0}
        className="d-flex flex-column gap-3"
        sx={{ background: "transparent", alignItems: "center" }}
        onClick={handleClickOpen}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: 2,
            boxShadow: 3,
          }}
          alt="Capa do livro"
          src={imgUrl}
        />
        <h2 className="title w-100">{title}</h2>
      </Paper>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg" // Define o tamanho máximo da modal
        PaperProps={{
          style: {
            backgroundColor: "#f6f6f6",
            boxShadow: "none",
            padding: "1rem",
          },
        }} // Remove o fundo e a sombra
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
              }}
              alt="Capa do livro"
              src={imgUrl}
            />
          </Grid>
          <Grid item xs={12} sm={7} md={7} lg={7}>
            <Box
              component={"div"}
              className="d-flex"
              style={{ flexDirection: "column" }}
            >
              <h2 className="title w-100">{title}</h2>
              <h2 className="title mb-2">Autoria:</h2>
              <p className="text-default">{autoria}</p>
              <h2 className="title mb-2">Editoria:</h2>
              <p className="text-default">{editoria}</p>
              <h2 className="title mb-2">Ano de lançamento:</h2>
              <p className="text-default">{date}</p>
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
