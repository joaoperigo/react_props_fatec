import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Comentario from './Comentario'
import Cartao from './Cartao'
import Feedback from './Feedback'

const App = () => {

    const componenteFeedback = <Feedback funcaoOK={() => alert("Você não eh muito seletivo")} like="Legal" funcaoNOK={() => alert ("Você eh um cara exigente")} dislike="Chato"/>
    return (
        <div className="container border mt-2">
            
            <div className="row border-bottom m-2">
                <h1 className="display-5 text-center">Testimonials</h1>
            </div>

            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-4">
                    <Cartao cabecalho="22/04/2021">
                        <Comentario thumb="http://placekitten.com/200/200" titulo="João Victor" descricao="Adorei!"/>
                        {componenteFeedback}
                    </Cartao>
                </div>
           
                <div className="col-sm-8 col-md-4">
                    <Cartao cabecalho="20/04/2021">
                        <Comentario thumb="http://placekitten.com/200/200" titulo="James Jasper" descricao="Odiei!" />
                        {componenteFeedback}
                    </Cartao>
                </div>

                <div className="col-sm-8 col-md-4">
                    <Cartao cabecalho="21/02/2021">
                        <Comentario thumb="http://placekitten.com/200/200" descricao="Não sei como vim parar aqui?" titulo="Jhon Joe"/>
                        {componenteFeedback}
                    </Cartao>
                </div>
            </div>


        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

