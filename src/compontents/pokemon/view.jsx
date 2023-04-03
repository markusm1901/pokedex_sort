import {Tile} from './tile.jsx';
import pokedex from './assets/pokedex.json'
import { useState, useEffect } from 'react';
import {Button} from './toggle_button.jsx'
import types from './assets/types.json'
export const View = () =>
{
    const[pokemon,setname] = useState('');
    const[foundpok,setfoundpok] = useState(pokedex);
    const[filter_id,setfilder_id] = useState(false);
    const[filter_name,setFilter_name] = useState(false);
    const [filter_types, setFilter_type] = useState([]);
    const [search_filter, setsearch] = useState("");
    const types_array = [];
    for (const type of types) {
        types_array.push(type);
    }
    const filter_by_type = (type) => {
        let new_types = [...filter_types]; // required because there is a delay after calling the setter for useState before the variable actually updates
        if (!filter_types.includes(type)) { // add type
            new_types = new_types.concat([type]);
            setFilter_type(new_types);
        }
        else { // remove type
            new_types.splice(new_types.indexOf(type), 1);
            setFilter_type(new_types);
        }

        const pokemons = [...pokedex];
        setfoundpok(pokemons.filter(el => {
            console.log(new_types.every(type => el.type.includes(type)));
            return new_types.every(type => el.type.includes(type));
        }));
    }
    const filter_by_id = () =>{
        setfilder_id(!filter_id);
        const pokemons = [...foundpok];
        pokemons.reverse();
        setfoundpok(pokemons);

    }
    const filter_name_fn = () =>{
        setFilter_name(!filter_name);
        const pokemons =[...foundpok];
         pokemons.sort((el,it)=>{
            if(el.name.english<it.name.english)
            {
                return -1;
            }
        })
        setfoundpok(pokemons);
    }
    const filter = (e) =>{
        const res = e.target.value;
        setname(res);
        setsearch(res);
        if(res!==''){
        const pokemons = pokedex.filter((pok) => {
            return pok.name.english.toLowerCase().includes(res.toLowerCase());
          });
          setfoundpok(pokemons);
        }
        else{
            setfoundpok(pokedex);
        }
        setname(res);
    }

    return (
        <div>
            <div>
            <input type="search" value={pokemon} onChange={filter} className="input" placeholder="Filter"/>
            <h3>filter_by_id</h3>
            <Button text={{on: "active", off:"inactive"}} props={filter_by_id}></Button>
            <h3>filter_by_name</h3>
            <Button text={{on: "active", off:"inactive"}} props={filter_name_fn}></Button>
            <br></br>
            <h3>filter_by_type</h3>
            {
                    types_array.map((el) => {
                        const tmp = el.english;
                    return(
                        <Button text={{ on: tmp, off: "untoggled"+tmp }} props={filter_by_type} type={tmp}/>
                    );
                })
            }
            </div>

        <div class="collection">
            {
                foundpok && foundpok.length > 0 ? (
                    foundpok.map((elem, index, array) =>
                    {
                        // console.log('i:', index+1);
                        let tmp = (elem.id).toString();
                        tmp = tmp.padStart(3, "0");
                        return (
                            <Tile name={elem.name.english} path={tmp}></Tile>
                            
                            );
                        })
                        ) : (
                    <h1>No results found!</h1>
                    )
                }
        </div>
    </div>
    );
   
}