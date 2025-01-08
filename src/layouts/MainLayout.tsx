"use client";

import Footer from "@/components/Footer";
import { useIsMobile } from "@/components/hooks/useIsMobile";
import { Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  ButtonBase,
  Divider,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const MainLayout = ({
  active,
  children,
  loading,
  showFooter = true,
}: {
  active?: "home" | "marketplace";
  children: ReactNode;
  loading?: boolean;
  showFooter?: boolean;
}) => {
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobile = useIsMobile();
  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
  }, [window.screenY]);

  const routes = [
    {
      name: "Home",
      route: "/",
      active: "home",
    },
    {
      name: "About Us",
      route: "#about",
      active: "about-us",
    },
    {
      name: "Our Service",
      route: "#service",
      active: "our-service",
    },
    {
      name: "Security",
      route: "#security",
      active: "contact-us",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position={navbar ? "fixed" : "absolute"}
        sx={{
          backgroundColor: navbar ? "#090C1B" : "#F9F9F9",
          transition: "all 0.5s ease-in-out",
          transform: navbar ? "translateY(-30)" : "translateY(0px)",
          padding: navbar ? "2px 0" : "0",
          overflow: "hidden",
          boxShadow: "none",
          width: "100%",
        }}
      >
        {" "}
        <div
          className="section"
          style={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <Toolbar
            className="section-inner"
            style={{
              padding: mobile ? 15 : "10px 0px",
            }}
            sx={{
              width: "100%",
              // padding: 0,
              // paddingTop: 1,

              justifyContent: "space-between",
            }}
          >
            <Link href="/">
              <img
                src={navbar ? "/logo/logo1.png" : "/logo/logo.png"}
                alt="logo"
                style={{
                  height: 35,
                  marginLeft: "-2%",
                  // width: 100,
                  objectFit: "contain",
                }}
              />
            </Link>
            {mobile && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <IconButton
                  size="large"
                  edge="end"
                  color="primary"
                  aria-label="menu"
                  onClick={handleMobileMenuOpen}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </div>
            )}

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <List sx={{ display: "flex", width: "100%", gap: 2 }}>
                {routes?.map((cur, i) => (
                  <ListItem
                    key={i}
                    sx={{
                      width: "auto",
                      color:
                        cur.active === active
                          ? "var(--primary)"
                          : active === "marketplace" && !navbar
                          ? "#000"
                          : "#fff",
                      ":hover": {
                        color: "var(--primary)",
                      },
                    }}
                  >
                    <Link
                      key={i}
                      href={cur.route}
                      style={{
                        textDecoration: "none",

                        // fontSize: ,
                        // fontWeight: 600,
                      }}
                    >
                      <Typography
                        fontWeight={300}
                        style={{
                          fontSize: 16,
                          color: navbar ? "#fff" : "#000",
                        }}
                        sx={{
                          ":hover": {
                            color: "var(--primary)",
                          },
                        }}
                      >
                        {" "}
                        {cur.name}
                      </Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                variant="contained"
                sx={{ background: "var(--primary-gradient)" }}
              >
                Get Started
              </Button>
            </Box>
          </Toolbar>
        </div>
      </AppBar>

      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={handleMobileMenuOpen}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box
          sx={{
            width: 350,
            height: "100%",
            backgroundColor: "#090C1B",
            padding: 2,
            textAlign: "center",
          }}
        >
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <ButtonBase onClick={handleMobileMenuOpen}>
              <Close
                style={{
                  fontSize: 33,
                  color: "#fff",
                }}
              />
            </ButtonBase>
          </div>
          <List style={{ marginTop: 20 }}>
            {routes?.map((cur, i) => (
              <ListItem
                onClick={() => {
                  router.push(cur.route);
                  handleMobileMenuOpen();
                }}
                key={i}
                sx={{
                  color: cur.active === active ? "var(--primary)" : "#fff",
                  // background: cur.active === active ? "var(--primary)" : "#f7f7f7",
                  borderRadius: 3,
                  paddingTop: 1.5,
                  paddingBottom: 1.5,
                  marginBottom: 2,
                  ":hover": {
                    color: "var(--primary)",
                  },
                }}
              >
                <Link
                  href={cur.route}
                  style={{
                    textDecoration: "none",

                    fontSize: 18,
                    fontWeight: 300,
                  }}
                >
                  {cur.name}
                </Link>
              </ListItem>
            ))}
          </List>
          <Button
            size="large"
            fullWidth
            variant="contained"
            sx={{ background: "var(--primary-gradient)" }}
          >
            Get Started
          </Button>
        </Box>
      </Drawer>

      <div
        style={{
          background: "#F9f9f9",
          minHeight: "100vh",
        }}
      >
        {children}
        <Footer />
      </div>
    </Box>
  );
};

export default MainLayout;
