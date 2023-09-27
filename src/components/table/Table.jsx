import { withTable } from "./withTable";

import "./table.scss";

export const Table = ({ component }) => {
  const TableEntry = withTable(component);

  return <TableEntry />;
};
