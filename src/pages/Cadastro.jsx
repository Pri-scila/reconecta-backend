import { useState } from 'react';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      alert('Por favor, insira um e-mail válido!');
      return;
    }
    setMsg(`Conta criada! Bem-vindo(a), ${nome}!`);
    setNome('');
    setEmail('');
  };

  return (
    <div style={{ padding: '80px 20px', maxWidth: '480px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0056b3', marginBottom: '8px' }}>Criar sua Conta</h2>
          <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Faça parte da nossa rede de capacitação focada nas ODS 4 e 10</p>
        </div>
        
        {msg && <div style={{ background: '#e6f4ea', color: '#137333', padding: '12px', borderRadius: '6px', marginBottom: '20px', fontSize: '0.9rem', fontWeight: '600', textAlign: 'center' }}>{msg}</div>}

        <form onSubmit={handleCadastro} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#4b5563', marginBottom: '6px' }}>Nome Completo:</label>
            <input 
              type="text" 
              placeholder="Digite seu nome" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem', outline: 'none' }}
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#4b5563', marginBottom: '6px' }}>Endereço de E-mail:</label>
            <input 
              type="email" 
              placeholder="seu-email@provedor.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem', outline: 'none' }}
              required
            />
          </div>

          <button type="submit" style={{ padding: '14px', background: '#0056b3', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', marginTop: '10px', boxShadow: '0 4px 6px rgba(0,86,179,0.15)' }}>
            Finalizar Cadastro
          </button>
        </form>
      </div>
    </div>
  );
}
