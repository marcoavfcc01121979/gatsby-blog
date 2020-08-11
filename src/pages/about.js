import React from 'react'
import Layout from "../components/Layout"

import SEO from "../components/seo"
import SocialLinks from '../components/SocialLinks'

import * as S from '../components/Post/styles'


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <S.PostHeader>
      <S.PostTitle>
        <h1>Sobre min</h1>
      </S.PostTitle>
      <S.PostDescription>
        <p style={{ fontSize: 30 }}>
          Meu nome é Marco Antônio Veloso Ferreira, nasci em São Paulo e sou 
          desenvolvedor frontend atualmente trabalho na SEPLAN “Secretaria de 
          Planejamento do estado do Piaui”, além de eterno estudante apaixonado
          em aprender mais sobre tecnologia.
        </p>

        <br/>
        <br/>

        <p style={{ fontSize: 30 }}>
          Já passei por empresas como Imobiliaria Rocha e Rocha e Comercial 
          Carvalho e outras mais. Cursei Ciências da Computação no Ceut no ano 
          de 2016. trabalho com desenvolvimento front end deste 2014 tenho 
          experiencia e habilidades com.
        </p>

        <br/>
        <br/>

        <ul style={{ fontSize: 30 }}>
          <li>• HTML</li>
          <li>• CSS</li>
          <li>• JAVASCRIPT</li>
          <li>• PHP</li>
          <li>• NODEJS</li>
          <li>• GATSBY</li>
          <li>• NETLIFY</li>
          <li>• REACTJS</li>
          <li>• REACT-NATIVE</li>
        </ul>

        <br/>
        <br/>

        <S.PostTitle>
          <h3 style={{ fontSize: 35 }}>Contato</h3>
        </S.PostTitle>

        <p style={{ fontSize: 30 }}>
          Você pode entrar em contado comigo através de qualquer uma das minha
          redes sociais.
        </p>
      </S.PostDescription>
    </S.PostHeader>

    <p style={{ padding: "0px 20px 0px 20px" }}>
      <SocialLinks />
    </p>
    
  </Layout>
)

export default AboutPage