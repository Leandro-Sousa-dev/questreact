const highlightText = (text)=> {
    return text.toUpperCase()
}

const HighText = (props)=> {
    return (
        <p style={{color: props.color}}>{highlightText(props.title)}</p>
    )
}

export default HighText