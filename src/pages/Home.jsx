import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";

const backUrl = "http://localhost:3000/books";

function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        try {
            const response = await fetch(backUrl, {
                mode: 'cors',
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                const data = await response.json();
                setBooks(data);
            }
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    }

    return (
        <div className="container">
            <div className="row">
                {books.map((book) => (
                    <div className="col-md-4 mb-3" key={book.id}>
                        <Card>
                            <Card.Img variant="top" src={book.image} />
                            <Card.Body>
                                <Card.Title>{book.name}</Card.Title>
                                <Card.Text>{book.isbn}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
