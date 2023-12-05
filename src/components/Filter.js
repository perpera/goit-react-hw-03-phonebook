export const Filter = ({ filter, onUpdate }) => {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={event => onUpdate(event.target.value)}
      />
    </div>
  );
};
