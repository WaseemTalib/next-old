import React from 'react'
import User from '../components/user';

function Users({ users }) {
    return (
        <>
            <h1>List Of Users</h1>
            {users?.map((user) => {
                return (
                    <div key={user.id}>
                     <User user={user} />
                     </div>
                )
            })}
        </>
    )
}

export default Users

export async function getStaticProps() {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await reponse.json()
    return { props: { users: users } }
}