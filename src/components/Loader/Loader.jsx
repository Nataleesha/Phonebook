import css from "components/Loader/Loader.module.css";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css["container-loader"]}>
      <Oval
        height={60}
        width={60}
        color="#2d3450"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#b8556c"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
