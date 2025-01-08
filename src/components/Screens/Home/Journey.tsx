import Animator from "@/components/custom/Animator";
import { Button, Grid2, Typography } from "@mui/material";

function Journey() {
  return (
    <div>
      <div
        className="section "
        style={{
          paddingTop: 100,
        }}
      >
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
              sx={{ display: "flex", alignItems: "center" }}
            >
              <div>
                <Animator>
                  <Typography
                    variant="h3"
                    mb={6}
                    lineHeight={1.5}
                    fontWeight={600}
                  >
                    Start Your Secure Payment Journey Today!
                  </Typography>
                </Animator>
                <div
                  style={{
                    marginBottom: 50,
                  }}
                >
                  <Animator delay={200}>
                    <Typography color="#5A5A5A" lineHeight={1.9}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Typography>
                  </Animator>
                  <Animator delay={300}>
                    <Typography mt={3} color="#5A5A5A" lineHeight={1.9}>
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum
                      passages.
                    </Typography>
                  </Animator>
                </div>
                <Animator delay={400}>
                  <Button
                    style={{
                      padding: "12px 34px",
                    }}
                    variant="contained"
                  >
                    Explore more Features
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
                <Animator variant="grow" delay={500}>
                  <img
                    src="/img/journey.png"
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
export default Journey;
