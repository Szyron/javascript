function App(){
    return(
        React.createElement('div',{
            style : {
                backgroundColor: 'black',
            }
        },
        React.createElement(Box,{hatter :"green",felirat: 'Box1',kezdo: 12}),
        React.createElement(Box,{hatter :"blue",felirat: 'Box2', kezdo: 28}),
        React.createElement(Box,{hatter :"yellow",felirat: 'Box3', kezdo: 31}),
        React.createElement(Box,{hatter :"red",felirat: 'Box4', kezdo: 45}),
        )
    )
}
//state -->allapot valtozo ,eltero ertekeket vehet fel
//model view controller
//view a return koze foglalt
//controller logikai resz
//props elhagyhato props.hatter--> hatter siman

function Box({hatter,felirat,kezdo}){
    const [szamlalo, setSzamlalo] = React.useState(kezdo);
    return(
        React.createElement('div',{
            style: {
                width:'200px',
                height: '200px',
                backgroundColor: hatter,
                padding: '5px',
                margin: '5px',
            },
            onClick:()=>setSzamlalo(prev=>prev+1)
        },felirat,"  ",szamlalo,React.createElement(Reset,{setSzamlalo:setSzamlalo}))
    )
}

function Reset({setSzamlalo}){
    return(
        React.createElement('button',{
            onClick:(e)=>{setSzamlalo(0); e.stopPropagation();}
        }, 'Reset')
    )
}

ReactDOM.render(React.createElement(App),document.getElementById('root'))