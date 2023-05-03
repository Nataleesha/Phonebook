import css from "components/Form/Form.module.css";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css["container-loader"]}>
      <Oval
        height={80}
        width={80}
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
