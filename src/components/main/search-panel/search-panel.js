import React,{Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component  {

    state = {
        id:null
    }

    searchChange = (e) => {
        const term = e.target.value;
        this.setState({id:term});
        this.props.searchById(term);
    }



    render() {

        return (
            <input type="number"
                   className="form-control-lg border border-dark col-4"
                   placeholder="Search by id..."
                   onChange={this.searchChange}
                   value={this.state.id}
                   disabled={this.props.error}/>
        )
    }
}


