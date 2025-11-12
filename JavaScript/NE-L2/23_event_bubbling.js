let parentClicked = () =>{
    alert("Parent is clicked")
}

let childClicked = () => {
    alert("child is clicked")
}

let grandChildClicked = (e)=>{
    e.stopPropagation()
    alert("grand child is clicked")
}