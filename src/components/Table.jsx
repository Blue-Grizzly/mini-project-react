export default function Table({data}){

    return (
    <div>
    <table>
        <thead>
        <tr>
            <th>
                Name
            </th>
            <th>
                ID
            </th>
            <th>
                Mail
            </th>
        </tr>
        </thead>
        <tbody>
            {data.map((user)=>(
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.id}</td>
                    <td>{user.mail}</td>
                </tr>
            ))}

        </tbody>
    </table>
</div>
    )
}