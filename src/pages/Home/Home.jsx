import { Helmet, HelmetProvider } from "react-helmet-async";
import css from "pages/Home/Home.module.css";

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className={css["container-home"]}>
        <div className={css.cover}>
          <h1 className={css.title}>
            You Own Online <span className={css.name}>Phonebook</span>
          </h1>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
