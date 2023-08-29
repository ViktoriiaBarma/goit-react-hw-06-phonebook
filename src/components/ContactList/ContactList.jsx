import { Item, List } from './ContactList.styled';
import { useSelector } from "react-redux";
import { getContacts } from "../redux/selectors";
import Contact from "./Contact";

const ContactList = () => {

  const { contacts, filter } = useSelector(getContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
     {filteredContacts.map((contact) => {
        return (
          <Item key={contact.id}>
             <Contact key={contact.id} contact={contact} />
          </Item>
        );
      })}
    </List>
  );
};



export default ContactList;