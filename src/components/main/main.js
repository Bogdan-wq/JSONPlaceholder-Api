import React,{Component} from 'react';
import SearchPanel from "./search-panel";
import RenderBase from "./render-base";
import FetchService from "../../services/fetch-API";
import Togglers from "./togglers";
import './main.scss'




export default class Main extends Component {


       state = {
            base:null,
            type:'',
            loading:true,
            error:false,
       }


       fetchService = new FetchService();


       fetchData = (type,id = "") => {
           let term = id ? `${type === `photos/?albumId=1` ? `photos` : type}?id=${id}` : `${type}`;
           this.setState({
               base:null,
               loading:true
           })
           return this.fetchService.getData(`/${term}`)
               .then((body) => {
                   this.setState({
                       base:body,
                       type:type,
                       loading:false
                   })
               })
               .catch(() => {
                    this.setState({
                        error:true,
                        loading:false
                    })
               })
       }




       toggleType = (type) => {
           if(type === this.state.type) {
               return;
           }
           else {
                this.fetchData(type)
           }
       }





       searchById = (id) => {
           const {type} = this.state;
           if (!id) {
               this.fetchData(type)
           } else {
                this.fetchData(type,id);
           }
       }





       componentDidMount() {
           this.fetchData('todos');
       }





    render() {

        const {type,loading,error} = this.state;

        const stateForTogglers = {
            type,
            loading,
            error
        }


        return (
            <main className="bg-white main d-flex flex-column position-sticky">
                <div className="pt-4 pb-4">
                    <div className="container-lg">
                        <div className="d-flex justify-content-between">
                            <SearchPanel
                                searchById={this.searchById}
                                error={error}/>
                            <Togglers
                                toggleType={this.toggleType}
                                state={stateForTogglers}/>
                        </div>
                    </div>
                </div>
                <div className="pt-2 pb-2">
                    <div className="container-lg">
                        <span className="note"><strong>Note: </strong>If it is loading for a long time,reload the app till it is operating good</span>
                    </div>
                </div>
                <RenderBase state={this.state}/>
            </main>
        )
    }

}




