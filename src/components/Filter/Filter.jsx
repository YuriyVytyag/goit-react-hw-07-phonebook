import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/phoneSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <input
      id={nanoid()}
      type="text"
      onChange={event => dispatch(filterContact(event.target.value))}
    />
  );
};
