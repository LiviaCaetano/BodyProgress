import { MouseEvent, isValidElement } from "react";
import "./styles.scss";

type TableColumn<T> = {
  key: keyof T;
  header: string;
  width: string;
};

type TableProps<T extends Record<string, any>> = {
  columns: TableColumn<T>[];
  data: T[];
  onRowClicked?: (rowData: T) => void;
};

export const Table = <T extends Record<string, any>>({
  columns,
  data,
  onRowClicked,
}: TableProps<T>) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} style={{ width: column?.width }}>
                {column?.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClicked && onRowClicked(row)}
              className="clickable-row"
            >
              {columns?.map((column, colIndex) => {
                const cellValue = row[column?.key];

                return (
                  <td
                    key={colIndex}
                    onClick={column?.key === "action" ? (e: MouseEvent) => e.stopPropagation() : undefined}
                  >
                    {isValidElement(cellValue) ? cellValue : String(cellValue)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
