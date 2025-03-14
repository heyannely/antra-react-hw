//3/13/2025

import { useState } from "react";

const data = [
  {
    region: "US",
    model: "A",
    sales: 150,
  },
  {
    region: "US",
    model: "B",
    sales: 120,
  },
  {
    region: "US",
    model: "C",
    sales: 350,
  },
  {
    region: "EU",
    model: "A",
    sales: 200,
  },
  {
    region: "EU",
    model: "B",
    sales: 100,
  },
  {
    region: "EU",
    model: "C",
    sales: 250,
  },
  {
    region: "CA",
    model: "A",
    sales: 200,
  },
  {
    region: "CA",
    model: "B",
    sales: 100,
  },
  {
    region: "CA",
    model: "C",
    sales: 230,
  },
  {
    region: "CA",
    model: "D",
    sales: 400,
  },
];

const ClientTeslaHw = () => {
  const [regionFilter, setRegionFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");

  const filteredData = data.filter(
    (item) =>
      (regionFilter === "" || item.region === regionFilter) &&
      (modelFilter === "" || item.model === modelFilter)
  );

  return (
    <div
      style={{ padding: "5px", margin: "10px", border: "1px solid lightgray" }}
    >
      <h1>Tesla Client Hw</h1>
      <div>
        <div>
          <label>
            Filter by Region:
            <select onChange={(e) => setRegionFilter(e.target.value)}>
              <option value="">All</option>
              {[...new Set(data.map((item) => item.region))].map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </label>

          <label>
            Filter by Model:
            <select onChange={(e) => setModelFilter(e.target.value)}>
              <option value="">All</option>
              {[...new Set(data.map((item) => item.model))].map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </label>
        </div>

        <table border="1">
          <thead>
            <tr>
              <th>Region</th>
              <th>Model</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.region}</td>
                <td>{item.model}</td>
                <td>{item.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientTeslaHw;
