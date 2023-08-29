import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

export const App = () => {

  return (
      <>
      {/* // <div
      //   style={{
      //     height: '100vh',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     fontSize: 40,
      //     color: '#010101',
      //     padding: '20px',
      //   }}
      // > */}
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
      {/* // </div> */}
  </>
    )
  }

