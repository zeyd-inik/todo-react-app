import ListItem from './ListItem';

const List = ({ items, deleteItem }) => {
  return (
    <section className="list-comp">
      {items.map((item) => {
        return <ListItem {...item} key={item.id} deleteItem={deleteItem} />;
      })}
    </section>
  );
};
export default List;
