"use client";
import React, { useState } from "react";
import { Paper, Box } from "@mui/material";
import { Image } from "react-bootstrap";
import Dialog from "@mui/material/Dialog";

interface BookProps {
  title: string;
  desc: string;
  date: string;
  imgUrl: string;
}

export default function Book({ title, desc, date, imgUrl }: BookProps) {
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
          style: { backgroundColor: "transparent", boxShadow: "none" },
        }} // Remove o fundo e a sombra
      >
        <Box
          component="img"
          src={imgUrl}
          alt="Descrição da imagem expandida"
          sx={{ width: "100%", height: "auto" }}
        />
      </Dialog>
    </>
  );
}
