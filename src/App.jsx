import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  return (
    <>

  <div className="app-container">
        {/* 8.1 Cabeçalho */}
        <header className="header">
          <div className="logo">Técnico em DS</div>
          <nav className="nav-menu">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#aprende">O que aprende</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#mercado">Mercado</a>
            <a href="#projetos">Projetos</a>
          </nav>
        </header>

        {/* 8.2 Seção principal — Hero */}
        <section id="inicio" className="hero-section">
          <div className="hero-content">
            <h1>Transforme ideias em sistemas.</h1>
            <p>
              Desenvolva soluções, aprenda novas tecnologias e construa seu futuro na área de TI.
            </p>
            <a href="#cta" className="btn-primary">Conheça o Curso</a>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" 
              alt="Código de programação no ecrã" 
            />
          </div>
        </section>

        {/* 8.3 Sobre o curso */}
        <section id="sobre" className="section">
          <h2>Sobre o Curso</h2>
          <div className="about-box">
            <p>
              O curso de <strong>Desenvolvimento de Sistemas</strong> capacita os alunos para analisar, projetar, documentar, testar e manter aplicações computacionais e sistemas de informação.
            </p>
            <p>
              O grande objetivo é formar profissionais aptos a resolver problemas reais através do software, dominando desde a lógica básica até à construção de sistemas complexos.
            </p>
            <p>
              Um profissional desta área cria websites, aplicações móveis, sistemas de gestão empresarial, banco de dados e APIs, atuando diretamente na transformação digital de empresas.
            </p>
          </div>
        </section>

        {/* 8.4 O que você aprende */}
        <section id="aprende" className="section">
          <h2>O que você aprende</h2>
          <div className="cards-grid">
            <div className="card">Lógica de programação</div>
            <div className="card">Desenvolvimento web</div>
            <div className="card">Frontend</div>
            <div className="card">Backend</div>
            <div className="card">Banco de dados</div>
            <div className="card">Desenvolvimento de APIs</div>
            <div className="card">Aplicativos</div>
            <div className="card">Versionamento de código</div>
          </div>
        </section>

        {/* 8.5 Tecnologias */}
        <section id="tecnologias" className="section">
          <h2>Tecnologias</h2>
          <div className="tech-tags">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">React</span>
            <span className="tag">Node.js</span>
            <span className="tag">SQL</span>
            <span className="tag">Git</span>
            <span className="tag">GitHub</span>
          </div>
        </section>

        {/* 8.6 Áreas de atuação */}
        <section id="mercado" className="section">
          <h2>Áreas de Atuação</h2>
          <div className="cards-grid">
            <div className="card">Desenvolvimento Frontend</div>
            <div className="card">Desenvolvimento Backend</div>
            <div className="card">Desenvolvimento Full Stack</div>
            <div className="card">Desenvolvimento de Aplicações</div>
            <div className="card">Banco de Dados</div>
            <div className="card">Suporte e Manutenção de Sistemas</div>
          </div>
        </section>

        {/* 8.7 Exemplos de projetos */}
        <section id="projetos" className="section">
          <h2>Exemplos de Projetos</h2>
          <div className="cards-grid">
            <div className="card">Sistema de cadastro de clientes</div>
            <div className="card">Sistema de estoque</div>
            <div className="card">Aplicação de agendamentos</div>
            <div className="card">Loja virtual</div>
            <div className="card">Dashboard administrativo</div>
            <div className="card">Aplicativo de tarefas</div>
          </div>
        </section>

        {/* 8.8 Chamada para ação */}
        <section id="cta" className="cta-section">
          <h2>Seu futuro na tecnologia pode começar aqui.</h2>
          <p>Conheça o curso Técnico em Desenvolvimento de Sistemas.</p>
          <a href="#inicio" className="btn-primary">Garantir Minha Vaga</a>
        </section>

      
        <footer className="footer">
          <p>Técnico em Desenvolvimento de Sistemas • SENAI • 2026</p>
          <p>Desenvolvido por: <strong>Lucas Antônio Linhar</strong></p>
        </footer>
      </div>
  
    </>
  )
}

export default App
