import React from 'react';
import { connect } from 'react-redux';
import '../../styles/CreateAssetPage.css';
import '../../styles/MainPage.css';

class CreateTraderPage extends React.Component {

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
              Create Trader Page
            </div>
        );
    }
}

const mapStateToPropsCreateTraderPage = state => {
    //In this case objects is gonna be applied to the props of the component
    return {
        diagramData: state.diagramReducer.diagramData,
    };
};


export default connect(mapStateToPropsCreateTraderPage, null)(CreateTraderPage);