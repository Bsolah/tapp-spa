import Animator from "@/components/custom/Animator";
import Features from "@/components/Screens/Home/Features";
import Journey from "@/components/Screens/Home/Journey";
import PaymentSteps from "@/components/Screens/Home/PaymentSteps";
import Security from "@/components/Screens/Home/Security";
import MainLayout from "@/layouts/MainLayout";
import { ArrowForward } from "@mui/icons-material";
import {
  Button,
  Divider,
  GlobalStyles,
  Grid2,
  Hidden,
  Typography,
} from "@mui/material";

export default function Home() {
  const styles = (
    <GlobalStyles
      styles={{
        ".headerroot": {
          paddingTop: "5rem",
          overflow: "hidden",
          ["@media (min-width : 1200px)"]: {
            paddingTop: "5rem",
          },
        },
        ".header": {
          // height: "800px",
          display: "flex",
          // padding: 20,
          alignItems: "center",
          justifyContent: "center",
          // textAlign: "center",
          background: 'url("/img/hero.png")',
          backgroundAttachment: "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          transition: "background-color 0.5s ease-in-out",
          backgroundRepeat: "no-repeat",
          position: "relative",
          borderRadius: 1,
          paddingLeft: 15,
          ["@media (min-width : 1200px)"]: {
            // minHeight: "70vh",
            // // backgroundAttachment: "fixed",
            // // marginLeft: "5rem",
            // // marginRight: "5rem",
            // maxHeight: "80vh",
            borderRadius: 25,
            paddingLeft: 40,
          },

          "& .wv": {
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "auto",
            left: 0,
            top: 0,
            background: "#090C1B99",
            borderRadius: 1,

            ["@media (min-width : 1200px)"]: {
              borderRadius: 25,
            },
          },
        },
      }}
    />
  );

  return (
    <MainLayout>
      {styles}
      <div className="headerroot section">
        <div className="header section-inner">
          <div className="wv"></div>
          <div
            style={{
              zIndex: 1000,
            }}
          >
            <Grid2
              container
              spacing={6}
              sx={{
                minHeight: "80vh",
                // maxHeight: "90vh",
                // backgroundAttachment: "fixed",
                // marginLeft: "5rem",
                // marginRight: "5rem",
                // maxHeight: "80vh",
              }}
            >
              <Grid2
                size={{
                  md: 6,
                  xs: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                    flexDirection: "column",
                  }}
                >
                  <Animator variant="slide" direction="right">
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: {
                          xs: 40,
                          md: 54,
                        },
                      }}
                      // variant="h3"
                      fontWeight={600}
                    >
                      Secure, Reliable Payments Anytime, Anywhere
                    </Typography>
                  </Animator>
                  <Animator>
                    <Divider
                      sx={{
                        height: "1px",
                        backgroundColor: "#fff",
                        margin: "20px 0",
                        width: "80%",
                        background: "#BF6CE9",
                        // width: "30%",
                      }}
                    />
                  </Animator>
                  <Animator delay={300}>
                    <Typography color="#EDEDED">
                      Experience obstruction-free transactions with advanced
                      multi-network and smart SIM technology for uninterrupted
                      connectivity.
                    </Typography>
                  </Animator>
                  <Animator delay={400}>
                    <div
                      style={{
                        marginTop: 26,
                        display: "flex",
                        alignItems: "center",
                        gap: 15,
                      }}
                    >
                      <Button variant="contained">
                        Get Started{" "}
                        <ArrowForward
                          style={{
                            fontSize: 20,
                            marginLeft: 5,
                          }}
                        />
                      </Button>
                      <Button variant="outlined">Learn More</Button>
                    </div>
                  </Animator>
                </div>
              </Grid2>
              <Hidden smDown>
                <Grid2
                  size={{
                    md: 6,
                  }}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    flexDirection: "row",
                    width: "100%",
                    minHeight: "100%",
                  }}
                >
                  <Animator delay={500} variant="zoom">
                    <img
                      src="/img/heroright.png"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "15px",
                        alignSelf: "flex-end",
                        // position: "absolute",
                        bottom: 0,
                      }}
                    />
                  </Animator>
                </Grid2>
              </Hidden>
            </Grid2>
          </div>
        </div>
      </div>
      <Features />
      <PaymentSteps />
      <Security />
      <Journey />
    </MainLayout>
  );
}
