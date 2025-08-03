import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

const uls = "https://jsonplaceholder.typicode.com/posts";

const Posts: React.FC = () => {

    const processPost = fetch(uls)
     
       
    return (
        <div>
            <Header />
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Posts Page</h2>
                <p>This is the posts page where you can view all posts.</p>
                {
                    processPost.then(response => response.json())
                    .then(posts => (
                        <div className="grid gap-4">
                            {posts.map((post: { id: number; title: string; body: string; userId: number }) => (
                                <PostCard key={post.id} title={post.title} content={post.body} userId={post.userId} />
                            ))}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Posts;