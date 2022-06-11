import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

<p>hiya!</p>

// export function testFunction(props) {
//    return <p> inside duck directory</p>;
// }

// testFunction();

export default function DisplayAllDucks() {
    const [ducks, setDucks] = useState([]);
  
    // This method fetches the records from the database.
    useEffect(() => {
      async function getDucks() {
        const response = await fetch(`http://localhost:5000/ducks/`);
  
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

    return ducks.map((duck) => {
        return (
            <p>{duck.latin_name} - - -</p>
        );
    });
  

// export default function fetchDucks(props) {

//     // const fullDuckList = fetch(`/ducks/`);
//     // let stringDuck = fullDuckList.toString();

//     (async () => {
//         let ducks;
//         let stringDuck;
//         let response = await fetch(`localhost:5000/ducks/`);
  
//         if (!response.ok) {
//           const message = `An error occured: ${response.statusText}`;
//           window.alert(message);
//           return;
//         } else {
//             ducks = await response.json();
//             stringDuck = ducks.toString();
//         }

//         return ducks.map((duck) => {
//             return (
//                 <p>{duck.latin_name} - - - {stringDuck}</p>
//             );
//           });


//       })();

    // const fullDuckListJson = fullDuckList.json();


    // return (
    //     <p>string duck? {ducks}</p>
                // <div>
                //     <ul>
                //         {fullDuckListJson.map((duck) => (
                //             <li key={duck.common_name}>
                //                 <h3>
                //                     {duck.latin_name}
                //                 </h3>
                //             </li>
                //         ))}
                //     </ul>
                // </div>
            // );
}

// fetchDucks();

// export default function DuckDirectory(props) {

//     const [ducks, ducksSet] = React.useState([]);
  
//     React.useEffect(() => {
//         async function fetchDucks() {
//             const fullDuckList = await fetch(`/ducks/`);
//             const fullDuckListJson = await fullDuckList.json();

//             // console.log(fullDuckListJson);
  
//         // ducksSet(fullDuckListJson.data);
//         }
//         fetchDucks();
//     }, []);
  
  
//     return (
//         <div>
//             <ul>
//                 {ducks.map((duck) => (
//                     <li key={duck.common_name}>
//                         <h3>
//                             {duck.latin_name}
//                         </h3>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default function duckList() {
//   const [ducks, setDucks] = useState([]);

//   // This method fetches the ducks from the database.
//   useEffect(() => {
//     async function getDucks() {
//       const response = await fetch(`http://localhost:5000/duck/`);

//       if (!response.ok) {
//         const message = `An error occured: ${response.statusText}`;
//         window.alert(message);
//         return;
//       }

//       const ducks = await response.json();
//       setDucks(ducks);
//     }

//     getDucks();

//     return; 
//   }, [ducks.length]);


// //   // This method will map out the ducks on the table
// //   function ducksList() {
// //     return ducks.map((duck) => {
// //       return (
// //         <Duck
// //           duck={duck}
// //           deleteDuck={() => deleteDucks(duck._id)}
// //           key={duck._id}
// //         />
// //       );
// //     });
// //   }

//   // This following section will display the table with the ducks of individuals.
//   return (
//     <div>
//       <h3>Duck List</h3>
//       <table className="table table-striped" style={{ marginTop: 20 }}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Position</th>
//             <th>Level</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>{duckList()}</tbody>
//       </table>
//     </div>
//   );
// }
