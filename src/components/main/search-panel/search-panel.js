import React,{Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component  {

    state = {
        id:''
    }

    searchChange = (e) => {
        const term = e.target.value;
        this.setState({id:term});
        this.props.searchById(term);
    }



    render() {

        return (
            <input type="number"
                   className="form-control-lg border border-dark col-12 col-sm-5 col-lg-4"
                   placeholder="Search by id..."
                   onChange={this.searchChange}
                   value={this.state.id}/>
        )
    }
}


