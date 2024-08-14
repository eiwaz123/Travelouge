const List = (props) => {
  //   listahan.sort((a, b) =>  a.Name.localeCompare(b.Name)); SORT ALPHABETHICAL
  //   listahan.sort((a, b) => b.Name.localeCompare(a.Name)); SORT REVERSE ALPHABETHICAL
  // listahan.sort((a, b) => a.calories - b.calories);// SORT BY NUMBER
  //listahan.sort((a, b) => b.calories - a.calories); // SORT REVERSE BY NUMBER
  //const lowCalories=listahan.filter(listahan=>listahan.calories<200) FILTER BASE SA CONDITIONS I CHANGE YUNG LISTAHAN SA LISTAHAN.map SA CONST NANG lOWCALORIES
  const category = props.category;
  const itemList = props.items;
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.Name}&nbsp;{item.calories}
    </li>
  ));

  return (
    <div>
      <p class="text-4xl font-medium text-gray-900 dark:text-white">
        {category}
      </p>
      <ol className="space-y-4 text-Black-500 list-disc list-inside">
        {listItems}
      </ol>
    </div>
  );
};
List.defaultProps = {
    category: "Category",
    items:[]

    
}
export default List;
