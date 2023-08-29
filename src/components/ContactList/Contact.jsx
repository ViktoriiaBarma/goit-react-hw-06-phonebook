import { deleteContact } from '../redux/contactsSlice';
import { Btn } from './ContactList.styled';
import { useDispatch } from 'react-redux';


const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
       <p> {contact.name}:
        <span>{contact.number}</span>
      </p>
      <Btn onClick={handleDelete}>delete</Btn>
    </>
  );
};
export default Contact;


