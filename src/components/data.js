// export function fetchDataset () {
//     let data;
//     fetch("https://localhost:5001/ml?dataset=naukri_data_science_jobs_india&source=database",{
//       method: "GET",
//       headers: {
//       "Access-Control-Allow-Origin" : "*",
//       "Content-type": "application/json; charset=UTF-8"
//     }}).then((response) => {
//       return response.json()
//     } ).then((apidata)=> {
//         console.log(apidata);
//         data = apidata;
//     });
//     console.log(data);
//     return data;
// }

export const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];