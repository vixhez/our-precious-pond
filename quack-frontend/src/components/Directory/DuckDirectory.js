import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const Duck = (props) => (
  <tr>
    <td>{props.duck.common_name}</td>
    <td>{props.duck.latin_name}</td>
  </tr>
);

export default function duckList() {
  const [ducks, setDucks] = useState([]);

  // This method fetches the ducks from the database.
  useEffect(() => {
    async function getDucks() {
      const response = await fetch(`http://localhost:5000/duck/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const ducks = await response.json();
      setDucks(ducks);
    }

    getDucks();

    return; 
  }, [ducks.length]);


//   // This method will map out the ducks on the table
//   function ducksList() {
//     return ducks.map((duck) => {
//       return (
//         <Duck
//           duck={duck}
//           deleteDuck={() => deleteDucks(duck._id)}
//           key={duck._id}
//         />
//       );
//     });
//   }

  // This following section will display the table with the ducks of individuals.
  return (
    <div>
      <h3>Duck List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{duckList()}</tbody>
      </table>
    </div>
  );
}
