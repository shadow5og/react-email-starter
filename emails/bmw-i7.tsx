import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface BMWInviteUserEmailProps {
  username?: string;
  userImage?: string;
  CTALink?: string;
  heading: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const BMWInviteUserEmail = ({
  CTALink = "https://www.bmw.co.za/en/all-models/bmw-i/i7/showroom/bmw-i7-sedan-highlights.html",
  heading = "The new BMW i7 Protection.",
}: BMWInviteUserEmailProps) => {
  return (
    <Tailwind>
      <Html>
        <Head>
          <Font
            fontFamily="BMWTypeNextPro"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Preview>{}</Preview>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto w-[465px] md:w-[650px]">
            <Section className="w-full">
              <Img
                className="w-full object-cover object-center"
                src={`${baseUrl}/static/bmw-i7-protection.jpg`}
                alt="BMW i7 Protection"
              />
            </Section>
            <Container className="py-9 px-12 w-full">
              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                <strong>{heading}</strong>
              </Heading>
              <Text className="text-black text-[14px] leading-[24px]">
                Unleash Elegance and Security with the BMW i7 Protection – Yours
                for the Taking at R 1,000,000. Elevate Your Drive with Unrivaled
                Luxury and Cutting-Edge Safety. Swipe through to Discover the
                Future of Automotive Excellence.
              </Text>
              <Section className="text-center mt-[32px] mb-[32px]">
                <Button
                  pX={20}
                  pY={12}
                  className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                  href={CTALink}
                >
                  Check it out
                </Button>
              </Section>
              <Text className="text-black text-[14px] leading-[24px]">
                or copy and paste this URL into your browser:{" "}
                <Link href={CTALink} className="text-blue-600 no-underline">
                  {CTALink}
                </Link>
              </Text>
            </Container>
            <Section className="py-9 px-12 bg-[#e6e6e6]">
              <Row className="w-full">
                <Column className="w-1/3 text-center">
                  <span className="mr-2">›</span>
                  <span>1</span>
                </Column>
                <Column className="w-1/3 text-center">1</Column>
                <Column className="w-1/3 text-center">1</Column>
              </Row>
              <Container>
                <Text>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Duis mollis, est non
                  commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                  sem nec elit. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Duis mollis, est non commodo luctus, nisi
                  erat porttitor ligula, eget lacinia odio sem nec elit. <br />{" "}
                  <br />
                  Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor
                  id nibh ultricies vehicula ut id elit. Cras mattis consectetur
                  purus sit amet fermentum. Curabitur blandit tempus porttitor.
                  Nullam quis risus eget urna mollis ornare vel eu leo. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. <br />{" "}
                  <br />
                  *BMW Select Offer from BMW Financial Services (South Africa)
                  (Pty) Ltd., an authorised Financial Services [FSP 4623] and
                  Registered Credit Provider [NCRP 2341]. Valid until 31
                  December 2022. Vehicle specifications may vary. Ts & Cs apply.
                </Text>
              </Container>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default BMWInviteUserEmail;
