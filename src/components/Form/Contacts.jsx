import css from "components/Form/Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "components/Form/Loader";
import {
  getContacts,
  getIsLoading,
  getError,
  getFilter,
} from "components/Redux/selectors";
import { deleteContact } from "components/Redux/deleteContactOperation";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
  const lowerCaseFilter = filter.toLowerCase();
  const removeContact = (contactId, contactName) => {
    dispatch(deleteContact(contactId));
    Notify.success(`${contactName} was deleted from your contacts`);
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(lowerCaseFilter)
  );

  return contacts.length === 0 && isLoading && !error ? (
    <Loader />
  ) : (
    <>
      <ul className={css.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <button
              className={css.btn}
              type="button"
              onClick={() => removeContact(id, name)}
            >
              Delete
            </button>
            <p className={css.text}>
              {name}: {number}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
