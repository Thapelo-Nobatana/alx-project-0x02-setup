import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({title, content, userId}) => {
    return (
        <div className="border p-4 rounded shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-2">{content}</p>
            <span className="text-sm text-gray-500">User ID: {userId}</span>
        </div>
    );
}

export default PostCard;