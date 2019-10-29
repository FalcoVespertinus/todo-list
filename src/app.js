import React from "react"

export class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items: [],
            input: ""
        }
    }

    render(){
        let options = {weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'};
        let today = new Date();
        let listItem
        let input = document.getElementById("input")
        
        let insertItem = ()=>{
            if(this.state.input !== ""){
                this.setState({items:[...this.state.items,{text:this.state.input,status:false}],
                input:""})
            }
        }

        return(
            <div className="card">
                <div className="list-title">
                    <i className="fas fa-undo-alt"></i>
                    <h1 className="date">{today.toLocaleDateString('en-GB', options)}</h1>
                </div>
                <div id="item-list">
                    <ul className="list">
                        {this.state.items.map(item=>{
                            return <li className="list-item">
                                        <input type="checkbox" name="checkbox"/>{item.text}<i className="far fa-trash-alt"></i>
                                    </li>
                            }
                        )}
                    </ul>
                </div>
                <div className="input">
                    <i className="fas fa-plus-circle" onClick={insertItem}></i>
                    <input type="text" name="input" id="input" value={this.state.input} onChange={(event)=>{
                        this.setState({input:event.target.value})
                        }}></input>
                </div>
            </div>
        )
    }
}