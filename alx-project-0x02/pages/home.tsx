import Card from "@/components/common/Card";


const HomePage: React.FC = () => {
    return (
        <div>
            <h2>Home page</h2>
            <Card title="This is a title for Card" content={["Kea", "This is the content", "There's not turning back"]} />
        </div>
    );
}

export default HomePage;