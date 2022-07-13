/* eslint-disable no-unused-vars */
import React from 'react'
import styled, {keyframes} from 'styled-components'
import '../css/Descrip.css'
import DescTexto from './Parts/DescTexto'
import Grafico from './Parts/Grafico'
import Mensal from './Parts/Mensal'

class descricao extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tab: "descricao"
        }
    }

    render(){

        const ColorAnimation = keyframes`
        0%  {border-color: #631ED6;}
        50% {border-color: #5FD43C;}
        100% {border-color: #631ED6;}
    `

        const Seletor = styled.button`
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        background-color: transparent;
        border: none;
        margin: 0 10px 0 0;
        border-bottom: 2px solid #fff;
        transition: .5s;
        &:hover, &.active {
            animation: ${ColorAnimation} 3s infinite alternate;
        }
        &:focus {
            outline: none;
        }
    `

    

        return(
            <div className='desc-content'>
                <div className='seletor'>
                    <Seletor className={this.state.tab === "descricao" ? "active" : ""} onClick={() => this.setState({tab: "descricao"})}>
                        Descricao
                    </Seletor>
                    <Seletor className={this.state.tab === "grafico" ? "active" : ""} onClick={() => this.setState({tab: "grafico"})}>
                        Gráfico Anual
                    </Seletor>
                    <Seletor className={this.state.tab === "skills" ? "active" : ""} onClick={() => this.setState({tab: "skills"})}>
                        Gráfico Mensal
                    </Seletor>
                </div>
                <div className='desc-text'>
                    <div
                    className='text-item'
                    style={{display: this.state.tab === 'descricao' ? "block" : "none"}}
                    >
                        <DescTexto />
                    </div>
                    <div
                    className='text-item'
                    style={{display: this.state.tab === 'grafico' ? "block" : "none"}}
                    >
                        <Grafico    />
                    </div>
                    <div
                    className='text-item'
                    style={{display: this.state.tab === 'skills' ? "block" : "none"}}
                    >
                        <Mensal />
                    </div>
                </div>
            </div>
        )
    }
}

export default descricao