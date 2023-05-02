import React from "react";
import Filter from "components/Form/Filter";
import Form from "components/Form/Form";
import Contacts from "components/Form/Contacts";
import css from "pages/Contacts/Phonebook.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Phonebook = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <div className={css.phonebook}>
        <Form />
        <Filter />
        <Contacts />
      </div>
    </HelmetProvider>
  );
};

export default Phonebook;
