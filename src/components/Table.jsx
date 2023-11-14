/* eslint-disable react/prop-types */
export default function Table({data}){

    return (
    <div>
        <h3>Users</h3>
    <table>
        <thead>
        <tr>
            <th>
                ID
            </th>
            <th>
                Name
            </th>
            <th>
                Mail
            </th>
        </tr>
        </thead>
        <tbody>
            {data.map((user)=>(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.mail}</td>
                </tr>
            ))}

        </tbody>
    </table>
</div>
    )
}