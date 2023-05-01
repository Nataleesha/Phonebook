import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <h1>You Online Phonebook</h1>
      </div>
    </HelmetProvider>
  );
};

export default Home;
