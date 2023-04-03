
// kompontent który jest funkcja, która udostęninamy dla innych plików Reacta. (Powinno się nazywać z dużej litery jeśli jest to kompontnet, a mała literk jesli jest to funkcja)
import {View} from './compontents/pokemon/view.jsx';
export const Application = () => {
    // const text = "Siema Damian !";
    // const  data = [
    //     {"uuid": "f18c685c-6c14-41f6-b905-616b277b99a4", name: "Igor", surname: "Nowak"},
    //     {"uuid": "010a331a-918b-11ed-a1eb-0242ac120002", name: "Tomek", surname: "Karzeł"},
    //     {"uuid": "087fd708-918b-11ed-a1eb-0242ac120002", name: "Damian", surname: "Spocuch"},
    //     {"uuid": "0f391afa-918b-11ed-a1eb-0242ac120002", name: "Marek", surname: "SkóraLover"},
    // ];
    
    // return (
    //     <div>
    //         <h1>{text}</h1>
    //         <table>
    //             <thead>
    //                 <th>Lp. </th>
    //                 <th>Name</th>
    //                 <th>Surename</th>
    //             </thead>

    //             <tbody>
    //                 {
    //                     data.map ((elem, index,array ) =>
    //                     {
    //                         return(
    //                             <Row key={elem.uuid} index={index + 1} name= {elem.name} surname={elem.surname} />
    //                         );
    //                     })
    //                 }
    //             </tbody>
    //         </table>
    //     </div>
    // );    

    return(
        <View></View>
    );


};
