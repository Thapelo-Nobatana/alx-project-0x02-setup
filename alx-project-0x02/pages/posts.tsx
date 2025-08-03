import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { type PostPageProps } from "@/interfaces"; 

const url = "https://jsonplaceholder.typicode.com/posts";


const Posts: React.FC<PostPageProps> = ({posts}) => {
   

       
    return (
        <div>
            <Header />
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Posts Page</h2>
                <p>This is the posts page where you can view all posts.</p>
                {
                    posts.map((post) =>(
                        <PostCard key={post.title} title={post.title} content={post.content} userId={post.userId} />
                    ))
                }
            </div>
        </div>
    );
}

export const getStaticProps = async () => {
    const res = await fetch(url);
    const data = await res.json();

    const posts: PostProps[] = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
    }));
    return {
        props: {
            posts,
        }
    }
}

export default Posts;