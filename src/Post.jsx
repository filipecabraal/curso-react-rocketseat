// # Named Exports
export function Post(props) {
    return (
        <>
         <p><strong>{props.author}</strong></p>
         <p>{props.content}</p>
        </>
    )
}

// # Default Exports: Permite alterar o nome do comp. na exportação;
//
// function Post() {
//     return <p>Post</p>
// }

// export default Post 