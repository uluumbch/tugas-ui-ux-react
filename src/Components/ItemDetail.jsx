function ItemDetail({ nama, item }) {
  return (
    <div className="flex justify-between my-4">
      <p>{nama}</p>
      <p>{item}</p>
    </div>
  );
}

export default ItemDetail;
