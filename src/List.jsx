import ListItem from './ListItem';

const List = ({ items, deleteItem, editItem }) => {
  return (
    <section className="list-comp">
      {items.map((item) => {
        return (
          <ListItem
            {...item}
            key={item.id}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        );
      })}
    </section>
  );
};
export default List;
