import Heading from "../../components/Heading";
import Head from "next/head";
import { useEffect } from "react";
import ContactInfo from "../../components/ContactInfo";
import React from "react";
import { contactType } from "../../types";
import { GetServerSideProps } from "next";

type ContactTypeProps = {
  contact: contactType;
};

//SSR
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contact: data,
    },
  };
};

const Contact: React.FC<ContactTypeProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
