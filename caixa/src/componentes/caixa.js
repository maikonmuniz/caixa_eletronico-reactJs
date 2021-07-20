import React from 'react'


export default function Caixa(props){


    return (
        <>

        <label>{props.label}</label><br/>
        <input value = {props.valor} onChange = {(a) => (props.setOperacao(a.target.value))}/><br/>

        </>
    )
}