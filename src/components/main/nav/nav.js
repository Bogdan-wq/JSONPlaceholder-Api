import React,{Component} from 'react';
import './nav.scss';

export default class Nav extends Component {

    render() {
        return (
            <div className="main-app__nav nav">
                <div className="container">
                    <div className="nav__inner">
                        <button className="nav__item"
                                onClick={() => this.props.toggleType('posts')}>Posts</button>
                        <button className="nav__item"
                                onClick={() => this.props.toggleType('comments')}>Comments</button>
                        <button className="nav__item"
                                onClick={() => this.props.toggleType('albums')}>Albums</button>
                        <button className="nav__item"
                                onClick={() => this.props.toggleType('photos/?albumId=1')}>Photos</button>
                        <button className="nav__item"
                                onClick={() => this.props.toggleType('todos')}>Todos</button>
                        <button className="nav__item"
                                onClick={() => this.props.toggleType('users')}>Users</button>
                    </div>
                </div>
            </div>
        )
    }
}

