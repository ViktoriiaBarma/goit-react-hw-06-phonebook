import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { IoMdPersonAdd } from 'react-icons/io';
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import {
  Form,
  FormField,
  FieldFormik,
  StyledButton,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
          <FormField htmlFor="name">
                <BsPersonFill />
        Name
        <FieldFormik
          type="text"
          name="name"
          placeholder="Name"
          required
        />
      </FormField>

          <FormField htmlFor="number">
                  <BsFillTelephoneFill />
        Number
        <FieldFormik
          type="tel"
          name="number"
          required
          placeholder="+38-050-123-45-67"
        />
      </FormField>
      <StyledButton type="submit">
              <IoMdPersonAdd size="16" />
              Add contact
      </StyledButton>
    </Form>
  );
};

export default ContactForm;