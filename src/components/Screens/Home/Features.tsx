import Animator from "@/components/custom/Animator";
import GlobalIcon from "@/components/Icons/GlobalIcon";
import MultiTechIcon from "@/components/Icons/MultiTechIcon";
import SmartIcon from "@/components/Icons/SmartIcon";
import TransactionsIcon from "@/components/Icons/TransactionsIcon";
import { Grid2, Typography } from "@mui/material";
import Link from "next/link";

function Features() {
  const content = [
    {
      title: "Secure Transactions",
      description: "Advanced encryption ensures your data is protected",
      icon: <TransactionsIcon />,
    },
    {
      title: "Multi-Network Technology",
      description:
        "Switches between networks for uninterrupted payment processing.",
      icon: <MultiTechIcon />,
    },
    {
      title: "Smart SIM Integration",
      description: "Enables seamless connectivity in all locations.",
      icon: <SmartIcon />,
    },
    {
      title: "Global Reach",
      description: "Works across borders without disruption.",
      icon: <GlobalIcon />,
    },
  ];
  return (
    <div
      id="service"
      className="section"
      style={{
        paddingBottom: 150,
      }}
    >
      <div className="section-inner">
        <div
          style={{
            display: "flex",
            justifyContent: "center",

            alignItems: "center",
            flexDirection: "column",
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
              <Typography color="#5A5A5A">Our Features</Typography>
              <div
                style={{
                  width: 30,
                  height: 2,
                  background: "#BF6CE9",
                }}
              />
            </div>
          </Animator>
          <Animator delay={300}>
            <Typography align="center" mt={2} variant="h3" fontWeight={600}>
              Why Choose Our Payment Solution?
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
                    md: 3,
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
                    {item.icon}
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
                    <Link href="/">
                      <Typography
                        color="#5A5A5A"
                        sx={{
                          textDecoration: "underline",
                        }}
                        variant="caption"
                      >
                        Learn More
                      </Typography>
                    </Link>
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
export default Features;
