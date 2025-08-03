import { type UserProps } from "@/interfaces"


const UserCard: React.FC<UserProps> = ( { name, email, address}) => {
   return (
    <div className="p-4 border rounded shadow mb-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="text-sm text-gray-800">
        {address.street}, {address.suite}, {address.city}
      </p>
    </div>
  );
}

export default UserCard