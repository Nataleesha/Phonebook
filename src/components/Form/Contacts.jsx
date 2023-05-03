import css from "components/Form/Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "components/Loader/Loader";
import {
  getContacts,
  getIsLoading,
  getError,
  getFilter,
} from "components/Redux/selectors";
import { deleteContact } from "components/Redux/contacts/deleteContactOperation";
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
    Notify.info(`${contactName} was deleted from your contacts`);
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(lowerCaseFilter)
  );

  return contacts.length === 0 && isLoading && !error ? (
    <Loader />
  ) : (
    <div className={css["container-list-contacts"]}>
      <h2 className={css.title}>Contacts</h2>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={css["contact-item"]}>
            <button
              className={css["contact-btn"]}
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
    </div>
  );
};

export default Contacts;
