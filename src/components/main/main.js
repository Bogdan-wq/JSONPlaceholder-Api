import React,{Component} from 'react';
import Nav from "./nav";
import TopBar from "./topbar";
import RenderBase from "./render-base";
import FetchService from "../../services/fetch-API";




export default class Main extends Component {


       state = {
            base:null,
            type:''
       }


       fetchService = new FetchService();


       toggleType = (type) => {
           if(type === this.state.type) {
               return;
           }
           else {
               this.fetchService.getData(`/${type}`)
                   .then((body) => {
                       console.log(body);
                       this.setState({
                           base:body,
                           type:type
                       })
                   })
           }
       }



       componentDidMount() {
            this.toggleType('users')
       }





    render() {

        const { base,type } = this.state;


        return (
            <main className="main-app">
                <div className="main-app__inner">
                    <Nav toggleType={this.toggleType}/>
                    <TopBar />
                    <RenderBase base={base} type={type}/>
                </div>
            </main>
        )
    }

}




