"use client";
import Animator from "@/components/custom/Animator";
import { useIsMobile } from "@/components/hooks/useIsMobile";
import { Grid2, Typography } from "@mui/material";

function Security() {
  const mobile = useIsMobile();
  const content = [
    {
      title: "Highlight encryption",
      description:
        "Experience obstruction-free transactions with advanced multi-network and smart SIM technology for uninterrupted connectivity.",
      icon: "/img/1.png",
    },
    {
      title: "Fraud prevention",
      description:
        "Experience obstruction-free transactions with advanced multi-network and smart SIM technology for uninterrupted connectivity.",
      icon: "/img/2.png",
    },
    {
      title: "Compliance certifications",
      description:
        "Experience obstruction-free transactions with advanced multi-network and smart SIM technology for uninterrupted connectivity.",
      icon: "/img/3.png",
    },
  ];
  return (
    <div
      id="security"
      className="section"
      style={{
        paddingBottom: mobile ? 20 : 150,
        paddingTop: 150,
      }}
    >
      <div className="section-inner">
        <div
          style={{
            marginBottom: 70,
          }}
        >
          <Animator>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 2,
                  background: "#BF6CE9",
                }}
              />
              <Typography color="#5A5A5A">Security</Typography>
              <div
                style={{
                  width: 30,
                  height: 2,
                  background: "#BF6CE9",
                }}
              />
            </div>
          </Animator>
          <Animator delay={200}>
            <Typography mt={2} variant="h4" fontWeight={600}>
              Your Security, Our Priority
            </Typography>
          </Animator>
        </div>
        <div>
          <Grid2 container spacing={3}>
            {content.map((item, i) => (
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
                <Grid2
                  size={{
                    md: 4,
                    xs: 12,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      background: "#fff",
                      padding: "30px 30px",
                      borderRadius: 20,
                      // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <img
                      src={item.icon}
                      style={{
                        height: 45,
                        width: 45,
                        objectFit: "contain",
                      }}
                    />
                    <Typography mt={1.5} color="#1E1E1E">
                      {item.title}
                    </Typography>
                    <Typography
                      style={{
                        minHeight: 60,
                      }}
                      variant="body2"
                      color="#5A5A5A"
                    >
                      {item.description}
                    </Typography>
                  </div>
                </Grid2>
              </Animator>
            ))}
          </Grid2>
        </div>
      </div>
    </div>
  );
}
export default Security;
