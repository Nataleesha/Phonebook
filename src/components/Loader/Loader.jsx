import css from "components/Form/Form.module.css";
import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css["loader-container"]}>
      <Circles
        height="80"
        width="80"
        color="#BBE38F"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
