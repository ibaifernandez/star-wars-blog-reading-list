// import { useState, useEffect } from "react";
// import React from "react";
// import { useParams } from "react-router";

// const { id } = useParams();

// const Characterdetails = ({ uid }) => {
//     const [mainDetails, setMainDetail] = useState([]);

//     useEffect(() => {
//         fetch("https://www.swapi.tech/api/people/")
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
//                 console.log("The response was successful!");
//                 return response.json();
//             })
//             .then((thisResponse) => {
//                 setTheseCharacters(thisResponse.results);
//             })
//             .catch((error) => {
//                 console.log("Looks like there was a problem: \n", error);
//             });
//     }, []);

//     console.log(theseCharacters);

//     const [thisCharactersData, setThisCharacterData] = useState([]);

//     return (
//         <ul>
//             <li>a</li>
//         </ul>
//     );
// };

// export default Mainfeatures;
