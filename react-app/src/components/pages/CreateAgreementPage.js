import React from 'react';
import { connect } from 'react-redux';
import '../../styles/CreateAssetPage.css';
import '../../styles/MainPage.css';
import { Form, Button } from 'react-bootstrap';

class CreateAgreementPage extends React.Component {

    state = {
        isrc: ""
    }
    onClick = (e) => {
        e.preventDefault();
    }
    handleChange = (e) => {
        this.setState({ isrc: e.target.value });

    }
    render() {
        console.log("PROPS");
        console.log(this.props);
        const { diagramData } = this.props;
        return (
            <div className="main-container-page">
            <Form>
                    <Form.Group controlId="formBasicEmail">
{/* THIS SHOILD BE A SELECTION OF THE EMITTER*/}
                        <Form.Label>Trader Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        {/* THISSHOULDBE A SELECTION OF THE RECEIVER */}
                        <Form.Label>Wallet</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        {/* THIS IS THE PERCENTAGE OF THE AGREEMENT FOR THE RECEIVER */}
                        <Form.Label>Wallet</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        {/* THIS SHOULD BE THE SELECTION OF THE ASSET ID */}
                        <Form.Label>Wallet</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Submit
                     </Button>
                </Form>
            </div>
        );
    }
}

const mapStateToPropsCreateAgreementPage = state => {
    //In this case objects is gonna be applied to the props of the component
    return {
        diagramData: state.diagramReducer.diagramData,
    };
};


export default connect(mapStateToPropsCreateAgreementPage, null)(CreateAgreementPage);