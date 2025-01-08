import Animator from "@/components/custom/Animator";
import { Button, GlobalStyles, Grid2, Typography } from "@mui/material";

function PaymentSteps() {
  const steps = [
    {
      title: "Download the App",
      description: "Available on iOS and Android.",
    },
    {
      title: "Set Up Your Account",
      description: "Link your preferred payment methods.",
    },
    {
      title: "Take Payment",
      description: "Enjoy obstruction-free transactions wherever you go.",
    },
  ];
  const styles = (
    <GlobalStyles
      styles={{
        ".paymentsection": {
          // height: "800px",
          paddingTop: 70,
          paddingBottom: 0,
          // textAlign: "center",
          background: 'url("/img/paymentstepbg.png")',
          backgroundAttachment: "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          transition: "background-color 0.5s ease-in-out",
          backgroundRepeat: "no-repeat",
          position: "relative",
          borderRadius: 1,
          zIndex: 1,
          ["@media (min-width : 1200px)"]: {
            minHeight: "60vh",
          },

          "& .wv": {
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "auto",
            left: 0,
            top: 0,
            zIndex: 2,
            background: "#48288150",
          },
        },
      }}
    />
  );
  return (
    <div id="about">
      {styles}
      <div className="section paymentsection ">
        <div className="wv"></div>
        <div
          className="section-inner"
          style={{
            zIndex: 1000,
            position: "relative",
          }}
        >
          <Grid2 container spacing={6}>
            <Grid2
              size={{
                md: 6,
                xs: 12,
              }}
            >
              <div>
                <Animator>
                  <div
                    style={{
                      display: "flex",
                      // justifyContent: "center",
                      alignItems: "center",
                      gap: 7,
                      marginBottom: 15,
                    }}
                  >
                    <Typography color="#fff">How It Works Section</Typography>
                    <div
                      style={{
                        height: 2,
                        width: 40,
                        background: "#fff",
                      }}
                    />
                  </div>
                </Animator>
                <Animator delay={200}>
                  <Typography
                    color="#fff"
                    variant="h3"
                    mb={6}
                    lineHeight={1.5}
                    fontWeight={600}
                  >
                    Simplified Payments in 3 Easy Steps
                  </Typography>
                </Animator>
                <div
                  style={{
                    marginBottom: 50,
                  }}
                >
                  {steps.map((step, i) => (
                    <Animator
                      key={i}
                      delay={
                        i === 0
                          ? 200
                          : i === 1
                          ? 300
                          : i === 2
                          ? 400
                          : i === 3
                          ? 500
                          : 600
                      }
                    >
                      <div>
                        <div
                          style={{
                            display: "flex",
                            gap: 7,
                            marginBottom: 15,
                          }}
                        >
                          <Typography color="#CDCDCD" variant="h6">
                            {i + 1}.
                          </Typography>
                          <div>
                            <Typography
                              fontWeight={400}
                              color="#CDCDCD"
                              variant="h6"
                              mb={1}
                            >
                              {step.title}
                            </Typography>
                            <Typography color="#A9A9A9" variant="body2">
                              {step.description}
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </Animator>
                  ))}
                </div>
                <Animator delay={600}>
                  <Button
                    style={{
                      padding: "12px 34px",
                    }}
                    variant="contained"
                  >
                    Discover more
                  </Button>
                </Animator>
              </div>
            </Grid2>
            <Grid2
              size={{
                md: 6,
                xs: 12,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Animator delay={400} variant="grow">
                  <img
                    src="/img/stepright.png"
                    style={{
                      width: "100%",
                    }}
                  />
                </Animator>
              </div>
            </Grid2>
          </Grid2>
        </div>
      </div>
    </div>
  );
}
export default PaymentSteps;
