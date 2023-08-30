import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { Layout } from "./Layout/Layout";

export const App = () => {

  return (
<Layout>
      <h1
          style={{
            fontSize: '20px',
            alignItems: 'center',
          }}
        >Phonebook</h1>
        <ContactForm/>
        <h2 style={{
            fontSize: '20px',
            alignItems: 'center',
          }}>Contacts</h2>
        <Filter />
        <ContactList />
      </Layout>
    )
  }

