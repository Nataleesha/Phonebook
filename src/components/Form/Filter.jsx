import css from "components/Form/Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "components/Redux/filter/filterSlice.js";
import { getFilter } from "components/Redux/selectors.js";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const filterNames = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css["container-filter"]}>
      <h2 className={css.title}>Filter</h2>
      <label>
        Find contact by name
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={filterNames}
        />
      </label>
    </div>
  );
};

export default Filter;
