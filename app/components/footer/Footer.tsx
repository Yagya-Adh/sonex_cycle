"use client";
import FooterForm from "./FooterForm";
import FooterBody from "./FooterBody";
import { FooterBottom } from "./FooterBottom";
import FooterEnd from "./FooterEnd";

const Footer = () => {
  return (
    <>
      <footer>
        <FooterForm />
        <FooterBody />
        <FooterBottom />
        <FooterEnd />
      </footer>
    </>
  );
};

export default Footer;
