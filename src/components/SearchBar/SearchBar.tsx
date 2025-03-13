import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (values: { search: string }) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const notify = () => toast("Please enter search query");

  return (
    <div className={styles.searchBar}>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, { resetForm }) => {
          if (!values.search.trim()) {
            notify();
            return;
          }
          onSubmit(values);
          resetForm();
        }}
      >
        <Form className={styles.form}>
          <div className={styles.inputWrapper}>
            <Field
              type="text"
              name="search"
              className={styles.field}
              placeholder="Search images and photos"
            />
            <button type="submit" className={styles.searchIconButton}>
              <FaSearch size={20} />
            </button>
          </div>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
};

export default SearchBar;
