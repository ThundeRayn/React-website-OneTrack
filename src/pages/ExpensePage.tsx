interface Props{
    navOpen:boolean;
}

export const ExpensePage =({navOpen}:Props) =>{
    return(
        <>
        <div style={navOpen? {paddingLeft: "130px", paddingTop:"20px", transition: "all 0.5s ease-in-out"}
            :{paddingLeft: "80px", paddingTop:"20px", transition: "all 0.5s ease-in-out"}}>
            <h1 style={{fontSize:"45px",fontWeight:"200", fontStyle:"normal", userSelect:"none"}}>
                Expenses Tracker</h1>
        </div>
        </>
    )
}