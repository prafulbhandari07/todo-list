export default function Header() {
    return (
        <>
            <header id="main-header" className="bg-success text-white p-4 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h1 id="header-title" >To-Do-List</h1>
            </div>
            <div className="col-md-6 align-self-center">
              <input type="text" className="form-control" id="filter" placeholder="Search Items..." />
            </div>
          </div>
        </div>
      </header>
            
        </>
    )
}


// {/* <header>
//                 <div className="headerContainer">
//                     <div >
//                         <h1>Item Lister</h1>
//                     </div>
//                     <div>
//                         <input type="text"  className="headerInput" placeholder="Search Items Here" />
//                     </div>
//                 </div>
//             </header> */}