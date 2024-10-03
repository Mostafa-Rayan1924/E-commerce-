import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const EmailTemplate = ({ body }) => (
  <Html>
    <Head />
    <Preview>
      The Ecommerce Platform For Your Products search now for your future
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          alt="logo"
          className="w-full rounded-[12px] object-cover"
          height={288}
          src="/public/logo.svg"
        />
        <Text style={paragraph}>Hi {body.fullName},</Text>
        <Text style={paragraph}>Thank you purchasing on Rayanco Ecommerce</Text>
        <Section style={btnContainer}>
          <Button style={button} href="">
            Go to Store
          </Button>
        </Section>
        <Text style={paragraph}>Rayanco</Text>
        <Hr style={hr} />
        <Text style={footer}>See You Soon In Rayanco</Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#007dfc",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  padding: "10px",
  textAlign: "center",
  display: "block",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
