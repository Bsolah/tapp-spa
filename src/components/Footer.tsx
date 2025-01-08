import { Box, ButtonBase, Divider, Grid2, Typography } from "@mui/material";
import EmailIcon from "./Icons/EmailIcon";
import FacebookIcon from "./Icons/FacebookIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import LinkedInIcon from "./Icons/LinkedInIcon";
import LocationIcon from "./Icons/LocationIcon";
import PhoneIcon from "./Icons/PhoneIcon";
import XIcon from "./Icons/XIcon";
const Footer = () => {
  return (
    <div
      className="section"
      style={{
        backgroundColor: "#090C1B",
        color: "#ffffff",
        paddingTop: 70,
        paddingBottom: 30,
      }}
    >
      <Box className="section-inner">
        <Grid2 container spacing={7} mb={5}>
          <Grid2
            size={{
              md: 4,
              xs: 12,
            }}
          >
            <img
              src="/logo/logo1.png"
              style={{
                height: 90,
                width: 120,
                objectFit: "contain",
              }}
            />
            <Typography color="#D1D1D1" fontWeight={200}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
            <div
              style={{
                display: "flex",
                gap: 15,
                alignItems: "center",
                marginTop: 45,
              }}
            >
              {[
                {
                  icon: <FacebookIcon />,
                  url: "",
                },
                {
                  icon: <XIcon />,
                  url: "",
                },
                {
                  icon: <InstagramIcon />,
                  url: "",
                },
                {
                  icon: <LinkedInIcon />,
                  url: "",
                },
              ]?.map((cur, i) => (
                <a key={i} href={cur.url}>
                  <ButtonBase>{cur.icon}</ButtonBase>
                </a>
              ))}
            </div>
          </Grid2>
          <Grid2
            size={{
              md: 2.6,
              xs: 6,
            }}
          >
            <Typography mb={3} variant="h6" color="#fff">
              About us
            </Typography>
            <div>
              {[
                {
                  label: "Careers",
                  url: "",
                },
                {
                  label: "Community",
                  url: "",
                },
                {
                  label: "Gallery",
                  url: "",
                },
                {
                  label: "Blog",
                  url: "",
                },
              ].map((cur, i) => (
                <a href={cur.url} key={i}>
                  <Typography mb={1.8} fontWeight={200} color="#D1D1D1">
                    {cur.label}
                  </Typography>
                </a>
              ))}
            </div>
          </Grid2>
          <Grid2
            size={{
              md: 2.6,
              xs: 6,
            }}
          >
            <Typography mb={3} variant="h6" color="#fff">
              Services
            </Typography>
            <div>
              {[
                {
                  label: "Land Freight",
                  url: "",
                },
                {
                  label: "Air Freight",
                  url: "",
                },
                {
                  label: "Ocean Freight",
                  url: "",
                },
                {
                  label: "Rail Freight",
                  url: "",
                },
              ].map((cur, i) => (
                <a href={cur.url} key={i}>
                  <Typography mb={1.8} fontWeight={200} color="#D1D1D1">
                    {cur.label}
                  </Typography>
                </a>
              ))}
            </div>
          </Grid2>
          <Grid2
            size={{
              md: 2.6,
              xs: 12,
            }}
          >
            <Typography mb={3} variant="h6" color="#fff">
              Contact
            </Typography>
            <div>
              {[
                {
                  label: "example@gmail.com",
                  url: "",
                  icon: <EmailIcon />,
                },
                {
                  label: "+92 8552 4026",
                  url: "",
                  icon: <PhoneIcon />,
                },
                {
                  label: "154 Meadowcrest Lane Harold, KY 41635",
                  url: "",
                  icon: <LocationIcon />,
                },
              ].map((cur, i) => (
                <a
                  href={cur.url}
                  key={i}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                    marginBottom: 20,
                  }}
                >
                  {cur.icon}
                  <Typography fontWeight={200} color="#D1D1D1">
                    {cur.label}
                  </Typography>
                </a>
              ))}
            </div>
          </Grid2>
        </Grid2>
        <Divider
          style={{
            marginTop: 80,
            marginBottom: 30,
            backgroundColor: "#FFFFFF20",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            // marginTop: 20,
          }}
        >
          <Typography
            color="#D1D1D1"
            fontWeight={200}
            sx={{
              fontSize: {
                xs: 12,
                md: 16,
              },
            }}
          >
            © Copyright 2024 Pvt. Ltd.
          </Typography>
          <Typography
            color="#D1D1D1"
            fontWeight={200}
            sx={{
              fontSize: {
                xs: 12,
                md: 16,
              },
            }}
          >
            Terms & Condition | Privacy Policy
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default Footer;
