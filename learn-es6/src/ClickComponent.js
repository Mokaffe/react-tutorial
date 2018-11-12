import React from "react"

class ClickComponent extends React.Component {

    shandldeClick(event){
        event.stopPropagation();
        event.preventDeafult();
    }

    render() {
        return (
            <div>
                <button onClick={this.handldeClick}>显示 | 隐藏</button>
                <span ref="tip">测试点击</span>
            </div>
        );
    }
}


class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputContent: ''
        };
    }
    changeHandler(){

    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.changeHandler}></input>
                <span>{this.state.inputContent}</span>
            </div>
        )
    }
}

export {ClickComponent, InputComponent}