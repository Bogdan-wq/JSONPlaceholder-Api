import React,{Component} from 'react';
import SearchPanel from "./search-panel";
import RenderBase from "./render-base";
import FetchService from "../../services/fetch-API";
import Togglers from "./togglers";
import Note from "./note";
import Spinner from "../spinner";
import ErrorIndicator from "../errorindicator";
import './main.scss';





export default class Main extends Component {


       state = {
            base:null,
            type:'',
            error:false,
            id:''
       }


       fetchService = new FetchService();


       fetchData = (type,id = "") => {
           let term = id ? `${type === `photos/?albumId=1` ? `photos` : type}?id=${id}` : `${type}`;
           this.setState({
               base:null,
               type:''
           })
           return this.fetchService.getData(`/${term}`)
               .then((body) => {
                   this.setState({
                       base:body,
                       type:type,
                   })
               })
               .catch(() => {
                    this.setState({
                        error:true,
                        base:null,
                        type:''
                    })
               })
       }




       toggleType = (type) => {
           const { id } = this.state;
           if(type === this.state.type) {
               return;
           }
           else {
                this.fetchData(type,id)
           }
       }





       searchById = (id) => {
           const {type} = this.state;
           this.setState({ id })
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

        const {type,error,base} = this.state;

        const content = base && !error ? <RenderBase base={base} type={type}/> : null;

        const spinner = !base && !error ? <Spinner /> : null;

        const errorIndicator = !base && error ? <ErrorIndicator /> : null;


        return (
            <main className="bg-white main d-flex flex-column position-sticky">
                <div className="pt-4 pb-4">
                    <div className="container-lg">
                        <div className="d-flex justify-content-between flex-column flex-lg-row">
                            <SearchPanel searchById={this.searchById}/>
                            <Togglers toggleType={this.toggleType} type={type}/>
                        </div>
                    </div>
                </div>
                <Note/>
                {content}
                {spinner}
                {errorIndicator}
            </main>
        )
    }

}




