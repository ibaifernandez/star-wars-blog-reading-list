// const callMiniData = () => {
//     const miniData = [];

//     fetch(`https://swapi.dev/api/people`)
//         .then((response) => {
//             if (!response.ok) {
//                 throw Error(response.statusText);
//             }
//             // console.log("The response was successful!");
//             return response.json();
//         })
//         .then((thisResponse) => {
//             // console.log(thisResponse.results);
//             miniData = thisResponse.results;
//         })
//         .catch((error) => {
//             // console.log("Looks like there was a problem: \n", error);
//         });
//     // console.log(miniData);
//     return miniData;
// };
