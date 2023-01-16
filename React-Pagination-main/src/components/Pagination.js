const buttonStyle = {
    margin:"0 4px",
    width: "25px",
    height: "25px",
    padding : "5px",
    background : "none", 
    border : "#fff 1px solid",
    color: "#fff",
    cursor: "pointer"
}


function Pagination({totalPost, postsPerPage, setCurrentPage}) {
    let pages = [];
    
    for(let i = 1; i <= Math.ceil(totalPost/postsPerPage); i++) {
        pages.push(i);
    }
  return (
    <div style={{display: "flex", justifyContent:"center", "padding":"60px 0"}}>
        {
            pages.map((page, index) => {
                return (
                    <button 
                    style={buttonStyle} 
                    key={index} 
                    onClick={() => setCurrentPage(page)}>
                        {page}
                    </button>
                )
            })
        }
    </div>
  )
}

export default Pagination