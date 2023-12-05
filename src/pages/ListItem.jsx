export default function ListItems(props) {
    return (
        <>
        <div className="list-items">
        <input type="checkbox"/>
        <li className="list-group-item">{props.name} <button className="btn btn-danger btn-sm float-right delete" onClick={()=>props.deleteItem(props.idx)}>X</button></li> 
        </div>
        </>
    )
}
