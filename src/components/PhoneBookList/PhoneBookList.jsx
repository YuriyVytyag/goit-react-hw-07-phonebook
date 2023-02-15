import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
import { PhoneBookItem } from './PhoneBookItem';
// import { getContacts, getContactsFilter } from 'redux/selector';

export function PhoneBookList({ contactList }) {
  // const filter = useSelector(getContactsFilter);

  // const filteredContacts = () =>
  //   contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  return (
    <ul>
      {contactList.map(({ id, name, number }) => (
        <PhoneBookItem
          key={id}
          name={name}
          number={number}
          id={id}
        ></PhoneBookItem>
      ))}
    </ul>
  );
}

PhoneBookList.propTypes = {
  phoneBookList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
