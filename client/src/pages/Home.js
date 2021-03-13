import { Component } from "react";
import Book from "../components/Book";
import Col from "../components/Col";
import Container from "../components/Container";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Form from "../components/Form";
import List from "../components/List";
import Row from "../components/Row";
import API from "../utils/API";

class Home extends Component{
    state = {
        books:[],
        searchString:" ",
        message:"Input book title to begin"
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
      getBooks = () => {
        API.getBooks(this.state.q)
          .then(res =>
            this.setState({
              books: res.data
            })
          )
          .catch(() =>
            this.setState({
              books: [],
              message: "No New Books Found, Try a Different Query"
            })
          );
      };
      handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
      };
      handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);
        API.saveBook({
          googleId: book.id,
          title: book.volumeInfo.title,
          subtitle: book.volumeInfo.subtitle,
          link: book.volumeInfo.infoLink,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => this.getBooks());
      };
    render(){
      return (
        <Container>
            <Row>
                <Col>

                </Col>

                <Col>
                    <Card>
                        <Form handleInputChange = {this.handleInputChange}
                            handleFormSubmit = {this.handleFormSubmit}
                            q = {this.state.q}
                        >

                        </Form>
                    </Card>
                </Col>
            </Row>
            <Row>
            <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
            </Row>
            <Footer />
        </Container>
      )}
}

export default Home;