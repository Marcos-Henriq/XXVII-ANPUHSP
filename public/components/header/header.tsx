// components/Header.tsx
"use client";

import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import {
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
  Home,
  StartOutlined,
  HomeMax,
  DateRange,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Drawer,
  Collapse,
  Slide,
  Toolbar,
  AppBar,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Inbox } from "@mui/icons-material";
import Image from "next/image";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const baseItem = ["Início", "Instruções de Participação", "Contato", "Apoio"];
  const isBaseItem = baseItem.includes(title);
  const [state, setState] = React.useState(false);
  const [open, setOpen] = React.useState(isBaseItem ? true : false);
  const [open2, setOpen2] = React.useState(isBaseItem ? true : false);
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
        <ListItem disablePadding className={styles.navItemMenu}>
          <ListItemButton component="a" href="/">
            {/* <ListItemIcon>
            </ListItemIcon> */}
            <ListItemText primary="Início" className={styles.link} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem
          className={open ? styles.onFocus : styles.navItemMenu}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <ListItemText
            primary="Programação"
            className={styles.link}
            color={styles.link}
          />
          {open ? (
            <ExpandLess color="primary" />
          ) : (
            <ExpandMore color="primary" />
          )}
        </ListItem>
        <Divider />
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ background: "#333" }}>
            <ListItem disablePadding className={styles.navItemMenu}>
              <ListItemButton component="a" href="/programacao/agenda">
                {/* <ListItemIcon>
                </ListItemIcon> */}
                <ListItemText primary="Agenda" className={styles.link} />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding className={styles.navItemMenu}>
              <ListItemButton component="a" href="/programacao/mesa-redonda">
                {/* <ListItemIcon>
                </ListItemIcon> */}
                <ListItemText
                  primary="Mesas redondas"
                  className={styles.link}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding className={styles.navItemMenu}>
              <ListItemButton component="a" href="/programacao/seminarios">
                {/* <ListItemIcon>
            </ListItemIcon> */}
                <ListItemText
                  primary="Seminários Temáticos"
                  className={styles.link}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding className={styles.navItemMenu}>
              <ListItemButton component="a" href="/programacao/mini-cursos">
                {/* <ListItemIcon>
                </ListItemIcon> */}
                <ListItemText primary="Minicursos" className={styles.link} />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding className={styles.navItemMenu}>
              <ListItemButton component="a" href="/programacao/livros">
                {/* <ListItemIcon>
                </ListItemIcon> */}
                <ListItemText primary="Livros em lançamento" className={styles.link} />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItem disablePadding className={styles.navItemMenu}>
          <ListItemButton component="a" href="/locais-alimentacao">
            {/* <ListItemIcon>
            </ListItemIcon> */}
            <ListItemText
              primary="Locais de alimentação"
              className={styles.link}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem
          className={open2 ? styles.onFocus : styles.navItemMenu}
          onClick={() => {
            setOpen2(!open2);
          }}
        >
          <ListItemText
            primary="Instruções de participação"
            className={styles.link}
            color={styles.link}
          />
          {open2 ? (
            <ExpandLess color="primary" />
          ) : (
            <ExpandMore color="primary" />
          )}
        </ListItem>
        <Divider />
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ background: "#333" }}>
            <ListItem disablePadding className={styles.navItemMenu}>
              <ListItemButton component="a" href="/instrucoes/seminarios">
                {/* <ListItemIcon>
                </ListItemIcon> */}
                <ListItemText
                  primary="Coordenação de Seminário Temático"
                  className={styles.link}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding className={styles.navItemMenu}>
              <ListItemButton component="a" href="/instrucoes/minicursos">
                {/* <ListItemIcon>
                </ListItemIcon> */}
                <ListItemText
                  primary="Coordenação de Minicurso"
                  className={styles.link}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding className={styles.navItemMenu}>
              <ListItemButton component="a" href="/instrucoes/apresentador-trabalho">
                {/* <ListItemIcon>
                </ListItemIcon> */}
                <ListItemText
                  primary="Apresentador de Trabalho"
                  className={styles.link}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding className={styles.navItemMenu}>
              <ListItemButton component="a" href="/instrucoes/apresentador-poster">
                {/* <ListItemIcon>
                </ListItemIcon> */}
                <ListItemText
                  primary="Apresentador de Pôster"
                  className={styles.link}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding className={styles.navItemMenu}>
              <ListItemButton component="a" href="/instrucoes/oficina">
                {/* <ListItemIcon>
                </ListItemIcon> */}
                <ListItemText
                  primary="Participação em Minicurso"
                  className={styles.link}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding className={styles.navItemMenu}>
              <ListItemButton component="a" href="/instrucoes/livros">
                {/* <ListItemIcon>
                </ListItemIcon> */}
                <ListItemText
                  primary="Lançamento de Livros"
                  className={styles.link}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
        <ListItem disablePadding className={styles.navItemMenu}>
          <ListItemButton component="a" href="/apoio">
            {/* <ListItemIcon>
            </ListItemIcon> */}
            <ListItemText primary="Apoio" className={styles.link} />
          </ListItemButton>
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
