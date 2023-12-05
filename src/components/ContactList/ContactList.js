import { ContactList } from './ContactList.styled';

export const ContactsList = ({ items, onDelete }) => {
  return (
    <ContactList>
      {items.map(item => (
        <li key={item.id}>
          {item.name}: <i>{item.number}</i>
          <button onClick={() => onDelete(item.id)}>delete</button>
        </li>
      ))}
    </ContactList>
  );
};
