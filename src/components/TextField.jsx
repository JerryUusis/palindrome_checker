const TextField = ({ handleInput }) => {
    return (
        <>
            <input onChange={handleInput} type="text" placeholder="Enter a word" />
        </>)
}

export default TextField