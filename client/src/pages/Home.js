import { Component } from "react";

class Home extends Component{
    state = {
        books:[],
        searchString:" ",
        message:"Input book title to begin"
    }
    render(){
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
                <Col>
                <Card title = "results">
                    <List>
                        <Book
                            key = {book.id}
                            // title = {book}
                        />
                    </List>
                </Card>
                </Col>
            </Row>
            <Footer />
        </Container>
    }
}

export default Home;