import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class About extends Component{
    constructor(props) {
        super(props);

        this.state = {
            datas: [],
            image: '',
            summary: '',
            Publisher: ''
        }

    }

    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`http://api.tvmaze.com/shows/${id}`)
            .then(response => response.json())
            .then(data => this.setState({name: data.name, image: data.image.medium, summary: data.summary}));
    }

    render(){
        const { name, image, summary } = this.state;
        const html = summary;
        
        return(
            <div className="aboutDiv">
                <h1>{name}</h1>
                <img src={image} alt="img" />
                <br />
                <h4>SUMMARY</h4>
                {ReactHtmlParser(html)}
            </div>
        )
    }
}

export default About;