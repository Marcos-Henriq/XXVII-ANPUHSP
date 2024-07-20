// components/Header.tsx
"use client";

import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { Menu as MenuIcon, ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemText,
  Drawer,
  Collapse,
  Slide,
  Toolbar,
  AppBar,
  Typography,
  IconButton,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Image from "next/image";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const baseItem = ["Início", "Instruções de Participação", "Contato", "Apoio"];
  const isBaseItem = baseItem.includes(title);
  const [state, setState] = React.useState(false);
  const [open, setOpen] = React.useState(isBaseItem ? false : true);
  const trigger = useScrollTrigger();

  const toggleDrawer =
    (input: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setState(input);
    };

  const list = () => (
    <div className={styles.list} role="presentation">
      <div className={styles.menuTitle}>
        <img src="/images/ANPUH-SP_logo.webp" style={{ width: "200px" }} />
        <p>XXVII Encontro Estadual de História</p>
      </div>
      <List className={styles.listComponent}>
        <ListItem key="Inicio">
          <Link href="/" className={styles.link}>
            Inicio
          </Link>
        </ListItem>

        <ListItem
          onClick={() => {
            setOpen(!open);
          }}
        >
          <ListItemText primary="Programação" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem key="Agenda" className={styles.nested}>
              <Link className={styles.link} href="/programacao/agenda">
                Agenda
              </Link>
            </ListItem>

            <ListItem key="Mesas Redondas" className={styles.nested}>
              <Link className={styles.link} href="/programacao/mesas_redondas">
                Mesas Redondas
              </Link>
            </ListItem>

            {/* Adicione outros itens conforme necessário */}
          </List>
        </Collapse>

        <ListItem key="Instruções de Participação" className={styles.nested}>
          <Link className={styles.link} href="/instrucao_encontro">
            Instruções de Participação
          </Link>
        </ListItem>

        <ListItem key="Contato" className={styles.nested}>
          <Link className={styles.link} href="/contato">
            Contato
          </Link>
        </ListItem>

        <ListItem key="Apoio" className={styles.nested}>
          <Link className={styles.link} href="/apoio">
            Apoio
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={styles.root}>
      <Slide in={!trigger}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              className={styles.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={styles.title}>
              <img
                src="/images/logo-no-slogan.svg"
                style={{ width: "150px" }}
              />
            </Typography>
          </Toolbar>
          <Drawer
            open={state}
            onClose={toggleDrawer(false)}
            classes={{ paper: styles.paper }}
          >
            {list()}
          </Drawer>
        </AppBar>
      </Slide>
    </div>
  );
}
