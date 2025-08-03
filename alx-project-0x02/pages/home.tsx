import { useState } from "react";
import PostModal from "../components/common/PostModal";
import { CardProps } from "../interfaces";
import Card from "../components/common/Card";
import Header from "@/components/layout/Header";


const HomePage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cards, setCards] = useState<CardProps[]>([]);
    const handleAddCard = (data: { title: string; content: string }) => {
        setCards([...cards, { title: data.title, content: [data.content] }]);
    };
    return (
        <div>
            <Header />
            
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Home page</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setIsModalOpen(true)}>Add Post</button>
                <div className="mt-6 grid gap-4">
                {
                    cards.map((card, index) => (
                        <Card key={index} title={card.title} content={card.content} />
                    ))
                }
                </div>
                {
                    isModalOpen && ( <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddCard} />)
                }
            </div>
        </div>
    );
}

export default HomePage;