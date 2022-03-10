const TextArea = ({name, id, handleChange}) => {
    return (
        <textarea name={name} id={id} onChange={handleChange}></textarea>
    )
}

export default TextArea