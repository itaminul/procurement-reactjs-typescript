import React from "react";
import ItemTable from "./ItemTable";
type User = {
  firstName: string
  lastName: string
  age: number
  visits: number
  progress: number
  status: string
}

function ItemSetupIndex() {
  const [data, setData] = React.useState<User[]>([]);
  console.log("data", data);
  return(
    <>
      <ItemTable />
    </>
  )
}

export default ItemSetupIndex;