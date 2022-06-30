import React, {useState} from 'react'

function Comments() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({name, email, comment})
    }

    return (
        <div >
            <h4><u>Comments</u></h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Comment: </label>
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default Comments;