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

interface SocialLink extends ILink {
  src: string;
}

interface BMWUserEmailProps {
  username?: string;
  userImage?: string;
  CTA?: ILink;
  heading: string;
  footerLinks?: ILink[];
  socialMediaLinks?: SocialLink[];
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const defaulltFooterLinks: BMWUserEmailProps["footerLinks"] = [
    { name: "Data privacy", href: "#" },
    { name: "E-Mail unsubscribe", href: "#" },
    { name: "Lorem", href: "#" },
  ],
  defaultSocialMediaLinks: BMWUserEmailProps["socialMediaLinks"] = [
    {
      name: "Youtube",
      href: "https://www.youtube.com/user/BMWSouthAfrica",
      src: "https://cloud.appwrite.io/v1/storage/buckets/64ea897682fcadc709da/files/64ea8bde822e9d880794/view?project=567&mode=admin",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/BMW_SA",
      src: "https://cloud.appwrite.io/v1/storage/buckets/64ea897682fcadc709da/files/64ea8bcb9f419d67b597/view?project=567&mode=admin",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/BMWSA",
      src: "https://cloud.appwrite.io/v1/storage/buckets/64ea897682fcadc709da/files/64ea8bb930e2a131fa48/view?project=567&mode=admin",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/bmwsouthafrica",
      src: "https://cloud.appwrite.io/v1/storage/buckets/64ea897682fcadc709da/files/64ea8bc6b49640931d98/view?project=567&mode=admin",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/bmwsouthafrica/",
      src: "https://cloud.appwrite.io/v1/storage/buckets/64ea897682fcadc709da/files/64ea8bbed8146d9df92a/view?project=567&mode=admin",
    },
  ],
  defaultCTA: BMWUserEmailProps["CTA"] = {
    name: "Get it now",
    href: "https://www.bmw.co.za/en/all-models/bmw-i/i7/showroom/bmw-i7-sedan-highlights.html",
  };

export const BMWInviteUserEmail = ({
  CTA = defaultCTA,
  heading = "THE NEW BMW i7.",
  footerLinks = defaulltFooterLinks,
  socialMediaLinks = defaultSocialMediaLinks,
}: BMWUserEmailProps) => {
  return (
    <Tailwind>
      <Html>
        <Head>
          <Font
            fontFamily="BMWTypeNextProTT-Regular"
            fallbackFontFamily="Arial"
            webFont={{
              url: "https://cloud.appwrite.io/v1/storage/buckets/64ea8a9a6728b31b53e4/files/64ea8b089f3ed85ef002/view?project=567&mode=admin",
              format: "truetype",
            }}
            fontStyle="normal"
          />
          <Font
            fontFamily="BMWTypeNextProTT-Light"
            fallbackFontFamily="Arial"
            webFont={{
              url: "https://cloud.appwrite.io/v1/storage/buckets/64ea8a9a6728b31b53e4/files/64ea8adeac52b7755bce/view?project=567&mode=admin",
              format: "truetype",
            }}
            fontStyle="light"
          />
          <Font
            fontFamily="BMWTypeNextProTT-Bold"
            fallbackFontFamily="Arial"
            webFont={{
              url: "https://cloud.appwrite.io/v1/storage/buckets/64ea8a9a6728b31b53e4/files/64ea8acd466896855342/view?project=567&mode=admin",
              format: "truetype",
            }}
            fontStyle="bold"
          />
        </Head>
        <Body className="bg-white my-auto mx-auto font-[BMWTypeNextProTT-Regular]">
          <Container className="border border-solid border-[#eaeaea] max-w-full rounded my-[40px] mx-auto w-full md:w-[700px] flex flex-col items-stretch">
            <Section className="w-full">
              <Img
                className="w-full object-cover object-center"
                src="https://cloud.appwrite.io/v1/storage/buckets/64ea897682fcadc709da/files/64ea8a683462a9392812/view?project=567&mode=admin"
                alt="BMW i7 Protection"
              />
            </Section>
            <Container className="pt-[73px] md:px-12 px-9 w-full pb-[79px] max-w-full">
              <Heading className="text-[#262626] text-3xl font-thin font-[BMWTypeNextProTT-Light] mt-0 p-0 mb-[30px] mx-0">
                {heading}
              </Heading>

              <Text className="uppercase text-base font-thin">
                Dear MR Smith,
              </Text>

              <Text className="text-[#262626] text-[14px] text-base leading-[24px]">
                Unleash Elegance and Security with the BMW i7 Protection – Yours
                for the Taking at R 1,000,000. Elevate Your Drive with Unrivaled
                Luxury and Cutting-Edge Safety. Click through to Discover the
                Future of Automotive Excellence.
              </Text>
              <Section className="mt-[32px] mb-[32px]">
                <Button
                  className="bg-[#1c69d4] rounded w-full sm:w-[290px] justify-center inline-flex items-center h-12 text-white font-semibold no-underline text-center"
                  href={CTA.href}
                >
                  {CTA.name}
                </Button>
              </Section>
              <Text className="text-[#262626] text-base leading-[24px]">
                Or copy and paste this URL into your browser:{" "}
                <Link href={CTA.href} className="text-[#1c69d4] no-underline">
                  {CTA.href}
                </Link>
              </Text>
            </Container>
            <Container className="pb-9 pt-16 md:px-12 px-9 bg-[#e6e6e6] w-full max-w-full">
              <Text className="flex items-center mt-0 mb-14 flex-wrap justify-start md:justify-around">
                {footerLinks?.map(({ name, href }, index) => (
                  <Link
                    key={index}
                    href={href}
                    className="text-[#262626] no-underline md:w-fit w-full font-[BMWTypeNextProTT-Bold] inline-flex items-center md:justify-center"
                  >
                    <Img
                      className="object-cover object-center h-6 mr-2"
                      src="https://cloud.appwrite.io/v1/storage/buckets/64ea897682fcadc709da/files/64ea8bb3c19598a721da/view?project=567&mode=admin"
                      alt="CTA Arrow"
                    />
                    <span className="w-max">{name}</span>
                  </Link>
                ))}
              </Text>
              <Row className="flex flex-col items-start md:center">
                <Text className="uppercase text-[#262626] text-base md:full md:text-center mt-0 mb-[30px] font-[BMWTypeNextProTT-Light]">
                  Follow us
                </Text>
                <Text className="mt-0 mb-[52px] md:justify-center flex items-center">
                  {socialMediaLinks?.map(({ name, src, href }, index) => (
                    <Link href={href} key={index} className="mr-2">
                      <Img
                        src={src}
                        alt={`${name} icon`}
                        className="object-cover object-center h-6"
                      />
                    </Link>
                  ))}
                </Text>
              </Row>
              <Row>
                <Text className="mb-14 mt-0 text-xs text-[#8e8e8e]">
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
                <Text className="text-xs text-[#8e8e8e] text-center">
                  © BMW AG 2021
                </Text>
              </Row>
            </Container>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default BMWInviteUserEmail;
