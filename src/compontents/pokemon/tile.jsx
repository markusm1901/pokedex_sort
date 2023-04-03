import types from './assets/types.json';

// return <img src={require(`${path}`)} />;
export const Tile = (props) =>
{
    // console.log(props);
    let path = './assets/images/' + props.path + '.png';
   
    return (
        <div class="frame">
            <img class ="img" width="100" height="100" src={require(`${path}`)}></img>
            <div><p>{props.name}</p></div>
        </div>
    );
}
