import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FormattedMessage } from 'react-intl';

const backUrl = "http://localhost:3000/books";

function Home() {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

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

    const handleBookClick = async (id) => {
        try {
            const response = await fetch(`${backUrl}/${id}`, {
                mode: 'cors',
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                const data = await response.json();
                setSelectedBook(data);
            }
        } catch (error) {
            console.error("Error fetching book details:", error);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        {books.map((book) => (
                            <div className="col-md-6 mb-3" key={book.id}>
                                <Card onClick={() => handleBookClick(book.id)}>
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
                <div className="col-md-4">
                    {selectedBook && (
                        <Card>
                            <Card.Img variant="top" src={selectedBook.image} />
                            <Card.Body>
                                <Card.Title>{selectedBook.name}</Card.Title>
                                <Card.Text>
                                    <strong>ISBN:</strong> {selectedBook.isbn}<br />
                                    <strong><FormattedMessage id="Author" />:</strong> {selectedBook.author}<br />
                                    <strong><FormattedMessage id="Publisher" />:</strong> {selectedBook.publisher}<br />
                                    <strong><FormattedMessage id="Genre" />:</strong> {selectedBook.gender}<br />
                                    <strong><FormattedMessage id="Year" />:</strong> {selectedBook.year}<br />
                                    <strong><FormattedMessage id="Available Online" />:</strong> {selectedBook.available_online ? 'Yes' : 'No'}<br />
                                    <strong><FormattedMessage id="Price" />:</strong> ${selectedBook.price}<br />
                                    <strong><FormattedMessage id="Summary" />:</strong> {selectedBook.summary}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
