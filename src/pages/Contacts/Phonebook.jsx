import React from "react";
import Filter from "components/Form/Filter";
import Form from "components/Form/Form";
import Contacts from "components/Form/Contacts";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Phonebook = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Form />
      <Filter />
      <Contacts />
    </HelmetProvider>
  );
};

export default Phonebook;
