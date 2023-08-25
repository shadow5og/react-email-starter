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

interface ILink {
  name: string;
  href: string;
}
interface BMWInviteUserEmailProps {
  username?: string;
  userImage?: string;
  CTA?: ILink;
  heading: string;
  footerLinks?: ILink[];
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const BMWInviteUserEmail = ({
  CTA = {
    name: "Check it out",
    href: "https://www.bmw.co.za/en/all-models/bmw-i/i7/showroom/bmw-i7-sedan-highlights.html",
  },
  heading = "The new BMW i7 Protection.",
  footerLinks = [
    { name: "Data privacy", href: "#" },
    { name: "E-Mail unsubscribe", href: "#" },
    { name: "Lorem", href: "#" },
  ],
}: BMWInviteUserEmailProps) => {
  return (
    <Tailwind>
      <Html>
        <Head>
          <Font
            fontFamily="BMWTypeNextProTT-Regular"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${baseUrl}/static/fonts/pro_ttf/BMWTypeNextProTT-Regular.ttf`,
              format: "truetype",
            }}
            fontStyle="normal"
          />
          <Font
            fontFamily="BMWTypeNextProTT-Light"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${baseUrl}/static/fonts/pro_ttf/BMWTypeNextProTT-Light.ttf`,
              format: "truetype",
            }}
            fontStyle="light"
          />
          <Font
            fontFamily="BMWTypeNextProTT-Bold"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${baseUrl}/static/fonts/pro_ttf/BMWTypeNextProTT-Bold.ttf`,
              format: "truetype",
            }}
            fontStyle="bold"
          />
        </Head>
        <Preview>{}</Preview>
        <Body className="bg-white my-auto mx-auto font-[BMWTypeNextProTT-Regular]">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto w-[465px] md:w-[700px] flex flex-col items-stretch">
            <Section className="w-full">
              <Img
                className="w-full object-cover object-center"
                src={`${baseUrl}/static/bmw-i7-protection.jpg`}
                alt="BMW i7 Protection"
              />
            </Section>
            <Container className="pt-[73px] md:px-12 px-9 w-full pb-[79px]">
              <Heading className="text-black text-3xl font-thin font-[BMWTypeNextProTT-Light] mt-0 p-0 mb-[30px] mx-0">
                {heading}
              </Heading>

              <Text className="uppercase font-thin">Dear MR Smith,</Text>

              <Text className="text-black text-[14px] leading-[24px]">
                Unleash Elegance and Security with the BMW i7 Protection – Yours
                for the Taking at R 1,000,000. Elevate Your Drive with Unrivaled
                Luxury and Cutting-Edge Safety. Click through to Discover the
                Future of Automotive Excellence.
              </Text>
              <Section className="mt-[32px] mb-[32px]">
                <Button
                  className="bg-black rounded w-[290px] justify-center inline-flex items-center h-12 text-white font-semibold no-underline text-center"
                  href={CTA.href}
                >
                  {CTA.name}
                </Button>
              </Section>
              <Text className="text-black text-[14px] leading-[24px]">
                or copy and paste this URL into your browser:{" "}
                <Link href={CTA.href} className="text-blue-600 no-underline">
                  {CTA.href}
                </Link>
              </Text>
            </Container>
            <Section className="pb-9 pt-16 md:px-12 px-9 bg-[#e6e6e6]">
              <Row className="w-full font-[BMWTypeNextProTT-Bold] mb-14 flex justify-around">
                {footerLinks?.map(({ name, href }, index) => (
                  <Column key={index} className="w-1/3 text-center">
                    <Link href={href} className="text-black no-underline">
                      <span className="mr-2">›</span>
                      <span>{name}</span>
                    </Link>
                  </Column>
                ))}
              </Row>
              <Container>
                <Text className="mb-14 text-xs">
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
                </Text>
                <Text className="text-xs text-center">© BMW AG 2021</Text>
              </Container>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default BMWInviteUserEmail;
