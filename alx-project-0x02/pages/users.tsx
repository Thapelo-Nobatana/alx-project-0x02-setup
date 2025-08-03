import { GetStaticProps } from "next";
import { UserPageProps, UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
let url = "https://jsonplaceholder.typicode.com/users"


export async function getStaticProps() {
    const res = await fetch(url)
    const users: UserProps[] = await res.json();
    return {
        props: {
            users,
        }
    }
}

const Users: React.FC<UserPageProps> = ({users}) => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Users</h1>
            {users.map((user) => ( <UserCard key={user.id} name={user.name}  email={ user.email} address={user.address} id={user.id}/>))}
        </div>
    )
}