"use client";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

const IMAGE_URL = "https://d26whlelwrmtms.cloudfront.net/netflix/demo/";
export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  imageLargeUrl: string;
  linkUrl: string;
  price: number;
  discountedPrice: number;
  currency: string;
  longDescription: string;
}
export default function WixPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      "https://d26whlelwrmtms.cloudfront.net/netflix/demo/products.js";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <Container>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            paddingTop: "56.25%",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            // src="https://videolity-demo.web.app/mobile/netflix/demo"
            frameBorder="0"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 1,
            overflowX: "scroll",
          }}
        >
          {data?.map((item: IProduct) => (
            <Box
              sx={{
                display: "inline-block",
                marginY: 2,
                marginX: 1,
                paddingX: 1,
                paddingY: 1,
                minWidth: 200,
                border: "1px solid #ebebeb",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  direction: "row",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={`${IMAGE_URL}${item.imageUrl}`}
                  sx={{
                    width: 1,
                    height: "auto",
                    maxWidth: "50px",
                  }}
                  alt={item.name}
                />
              </Box>
              <Typography>{item.name}</Typography>
              <Typography>{item.price}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}
