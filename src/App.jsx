import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cursos from './pages/Cursos';
import Cadastro from './pages/Cadastro';

function Home() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px', textAlign: 'center' }}>
      <span style={{ background: '#e6f4ea', color: '#137333', padding: '6px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', display: 'inline-block', marginBottom: '20px' }}>
        Foco Oficial: ODS 4 (Educação de Qualidade) & ODS 10 (Redução de Desigualdades)
      </span>
      <h1 style={{ fontSize: '3.5rem', color: '#0d1b2a', marginBottom: '20px', fontWeight: '800', letterSpacing: '-1px' }}>
        Portal Reconecta <span style={{color: '#2da44e'}}>♻️</span>
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#4a5568', maxWidth: '750px', margin: '0 auto 40px auto', lineHeight: '1.8' }}>
        Uma iniciativa tecnológica focada em transformar realidades através da inclusão e capacitação digital comunitária. Conectamos mentores voluntários a alunos que buscam qualificação gratuita.
      </p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Link to="/cadastro" style={{ padding: '16px 32px', background: '#2da44e', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', transition: '0.2s' }}>
          Começar Agora / Criar Conta
        </Link>
        <Link to="/cursos" style={{ padding: '16px 32px', background: '#fff', color: '#0056b3', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', border: '2px solid #0056b3' }}>
          Conhecer as Vagas
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* MENU SUPERIOR ATUALIZADO COM BOTÕES COLORIDOS */}
        <nav style={{ backgroundColor: '#ffffff', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', position: 'sticky', top: 0, zIndex: 1000 }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0056b3', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{color: '#2da44e'}}>♻️</span> Portal Reconecta
          </Link>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            
            {/* Botão Início (Cinza Neutro) */}
            <Link to="/" style={{ textDecoration: 'none', color: '#4a5568', background: '#f3f4f6', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', fontSize: '0.95rem', transition: '0.2s' }}>
              Início
            </Link>
            
            {/* Botão Cursos & Matrículas (Verde ODS/Sustentável) */}
            <Link to="/cursos" style={{ textDecoration: 'none', color: '#fff', background: '#2da44e', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', fontSize: '0.95rem', boxShadow: '0 4px 6px rgba(45,164,78,0.15)', transition: '0.2s' }}>
              Cursos & Matrículas
            </Link>
            
            {/* Botão Entrar/Cadastrar (Azul Principal) */}
            <Link to="/cadastro" style={{ textDecoration: 'none', color: '#fff', background: '#0056b3', padding: '10px 22px', borderRadius: '6px', fontWeight: 'bold', fontSize: '0.95rem', boxShadow: '0 4px 6px rgba(0,86,179,0.15)', transition: '0.2s' }}>
              Entrar / Cadastrar
            </Link>
            
          </div>
        </nav>

        {/* CONTEÚDO */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>

        {/* RODA PÉ OFICIAL */}
        <footer style={{ backgroundColor: '#ffffff', padding: '25px', textAlign: 'center', fontSize: '0.95rem', color: '#4b5563', borderTop: '1px solid #e5e7eb', marginTop: '60px' }}>
          Portal Reconecta &copy; 2026 — Desenvolvido com excelência por <strong>Priscila Domingos</strong> 🚀
        </footer>

      </div>
    </BrowserRouter>
  );
}
