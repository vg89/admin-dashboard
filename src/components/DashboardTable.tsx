import { Column } from "react-table";
import TableHOC from "./TableHOC";

//An interface in TypeScript defines the structure of an object. It specifies the properties and their types that objects of this type should have.
interface DataType {
    id: string;
    quantity: number;
    discount: number;
    amount: number;
    status: string;
}
 //Column<DataType>[] is a TypeScript syntax that defines an array of objects where each object conforms to the Column type, with DataType being a generic type parameter. generic type in TypeScript allows you to create components, functions, or classes that can work with a variety of data types, rather than a single specific type
 const columns: Column<DataType>[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const DashboardTable = ({ data = [] }: { data: DataType[] }) => {
  return TableHOC<DataType>(
    columns,
    data,
    "transaction-box",
    "Top Transaction"
  )();
};

export default DashboardTable;