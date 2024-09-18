const alertLabel = (label)=> {
    alert(`A label desse botão é ${label}`)
}

const ShowLabel = ({label})=> {
    return (
        <button onClick={() =>{alertLabel(label)}}>DOWNLOAD</button>
    )
}

export default ShowLabel