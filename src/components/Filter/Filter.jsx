import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <p className={styles.p}></p>
      <input
        className={styles.input}
        onChange={(e) => dispatch(setFilter(e))}
        type="text"
        name="filter"
        placeholder="Wyszukaj"
      />
    </>
  );
};

export default Filter;
