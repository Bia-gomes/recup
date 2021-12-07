import styled from 'styled-components'


const Container= styled.div`

.tudo{
    background: black;
    color: #FFF;

    widht: 100vh;
    height: 100%;
}

.novo{
    margin-left: 18em;
    padding-top: 5em;
    font-size: 2em;
}

.nome {
    display:flex;
    flex-direction: row;

    margin-left:2em;
    margin-top:2em;
}

.nome_nome input{
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  
    outline: none;
    
    background-color: black ;
    color:#fff;

    width: 12em;
    height: 1em;
        
}

.button-create button {
    width: 80px;
    height: 30px;

    margin-top:2em;
   
    border-radius: 44px;
    border: none;
    color: black;
    font-size: 14px;
    margin-left: 20em;
    font-weight: bold;
}


button{
    cursor: pointer;
    border: none;
    background : #fff;
    color: black;
}

.lista{
    margin-left: 1em;
    margin-top: 2em;

    font-size: 25px;
}


.tabela{
    overflow: hidden;
    overflow-y: auto;
    margin-left: 1.4em;
}

table {
    margin-top: 2em;
    border:solid 1px;
    
    font-weight: 1;
}

thead {
    background-color: black;
    border: solid 1px;
    
  
}

th{
    padding-left: 1em;
    padding-right: 1em;
}
\


`

export { Container }