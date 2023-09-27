import { withTable } from "./withTable";

export const Table = ({ component }) => {
  const TableEntry = withTable(component);

  return <TableEntry />;
};
