import "./styles.scss";

type TableProps = {
  headers: string[];
  data: { [key: string]: string | number }[];
  onRowClicked?: (rowData: { [key: string]: string | number }) => void;
};

export const Table = ({ headers, data, onRowClicked }: TableProps) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClicked?.(row)}
              className="clickable-row"
            >
              {headers.map((header, colIndex) => (
                <td key={colIndex}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
