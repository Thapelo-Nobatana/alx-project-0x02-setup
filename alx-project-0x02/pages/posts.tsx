import Header from "@/components/layout/Header";


const Posts: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Posts Page</h2>
                <p>This is the posts page where you can view all posts.</p>
            </div>
        </div>
    );
}

export default Posts;