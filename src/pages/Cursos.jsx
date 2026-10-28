import { useState, useEffect } from 'react';

export default function Cursos() {
  const [cursos, setCursos] = useState(() => {
    const salvos = localStorage.getItem('@reconecta:cursos');
    if (salvos) {
      const dados = JSON.parse(salvos);
      if (dados.length >= 4) return dados;
    }
    return [
      { id: 1, nomeCurso: "Introdução à Economia Circular", descricao: "Aulas práticas sobre sustentabilidade, reciclagem e metas da ODS 12.", cargaHoraria: 20 },
      { id: 2, nomeCurso: "Oficina de Reciclagem Tecnológica", descricao: "Como reaproveitar e descartar corretamente componentes eletrônicos obsoletos.", cargaHoraria: 15 },
      { id: 3, nomeCurso: "Informática Básica Comunitária", descricao: "Inclusão digital para jovens e adultos focando no mercado de trabalho (ODS 4).", cargaHoraria: 40 },
      { id: 4, nomeCurso: "Lógica de Programação para Meninas", descricao: "Incentivo e redução da desigualdade de gênero na área de tecnologia (ODS 5 e 10).", cargaHoraria: 30 }
    ];
  });

  const [nomeCurso, setNomeCurso] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cargaHoraria, setCargaHoraria] = useState('');
  const [abaAtiva, setAbaAtiva] = useState('vitrine');

  useEffect(() => {
    localStorage.setItem('@reconecta:cursos', JSON.stringify(cursos));
  }, [cursos]);

  const handleCriarCurso = (e) => {
    e.preventDefault();
    if (!nomeCurso.trim()) return;

    const novo = { id: Date.now(), nomeCurso, descricao, cargaHoraria: Number(cargaHoraria) || 0 };
    const novaLista = [...cursos, novo];
    setCursos(novaLista);
    localStorage.setItem('@reconecta:cursos', JSON.stringify(novaLista));
    
    setNomeCurso('');
    setDescricao('');
    setCargaHoraria('');
    setAbaAtiva('vitrine'); 
  };

  const handleDeletar = (id) => {
    if (!window.confirm("Deseja realmente remover este curso do catálogo?")) return;
    const novaLista = cursos.filter(c => c.id !== id);
    setCursos(novaLista);
    localStorage.setItem('@reconecta:cursos', JSON.stringify(novaLista));
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
        <button 
          onClick={() => setAbaAtiva('vitrine')}
          style={{ padding: '12px 30px', borderRadius: '30px', border: '1px solid #d1d5db', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', backgroundColor: abaAtiva === 'vitrine' ? '#0056b3' : 'rgba(255,255,255,0.7)', color: abaAtiva === 'vitrine' ? '#fff' : '#4b5563', transition: '0.2s' }}
        >
          🔍 Visualizar Vitrine de Cursos ({cursos.length})
        </button>
        <button 
          onClick={() => setAbaAtiva('gerenciar')}
          style={{ padding: '12px 30px', borderRadius: '30px', border: '1px solid #d1d5db', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', backgroundColor: abaAtiva === 'gerenciar' ? '#2da44e' : 'rgba(255,255,255,0.7)', color: abaAtiva === 'gerenciar' ? '#fff' : '#4b5563', transition: '0.2s' }}
        >
          ⚙️ Painel Administrativo / Criar Curso
        </button>
      </div>

      {abaAtiva === 'vitrine' && (
        <div>
          <div style={{ marginBottom: '35px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', color: '#0d1b2a', fontWeight: '800' }}>📋 Catálogo de Oficinas Ativas</h2>
            <p style={{ color: '#4b5563', marginTop: '6px', fontWeight: '500' }}>Conheça nossa grade completa de capacitação voltada ao impacto social.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            {cursos.map(c => (
              <div key={c.id} style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '30px', borderRadius: '16px', border: '1px solid rgba(229, 231, 235, 0.7)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <h4 style={{ color: '#0056b3', fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>{c.nomeCurso}</h4>
                    <span style={{ fontSize: '0.8rem', backgroundColor: '#e2e8f0', color: '#475569', padding: '3px 8px', borderRadius: '6px', fontWeight: 'bold' }}>ID {c.id}</span>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.6', marginBottom: '20px' }}>{c.descricao}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', background: '#e6f4ea', color: '#137333', padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 'bold', width: 'fit-content' }}>
                  ⏱️ {c.cargaHoraria} horas de atividades
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {abaAtiva === 'gerenciar' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
          
          <form onSubmit={handleCriarCurso} style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '35px', borderRadius: '16px', boxShadow: '0 6px 18px rgba(0,0,0,0.04)', border: '1px solid #e5e7eb' }}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.4rem', fontWeight: '800', color: '#1f2937' }}>➕ Cadastrar Nova Oficina</h3>
            
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#4b5563', marginBottom: '6px' }}>Nome da Oficina/Curso:</label>
            <input 
              type="text" 
              placeholder="Ex: Informática para Idosos" 
              value={nomeCurso} 
              onChange={(e) => setNomeCurso(e.target.value)} 
              style={{ width: '100%', padding: '12px', marginBottom: '18px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem', outline: 'none', backgroundColor: '#fff' }}
              required
            />

            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#4b5563', marginBottom: '6px' }}>Descrição Curricular:</label>
            <textarea 
              placeholder="Objetivos alinhados com o impacto social das ODS..." 
              value={descricao} 
              onChange={(e) => setDescricao(e.target.value)} 
              style={{ width: '100%', padding: '12px', marginBottom: '18px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem', minHeight: '120px', resize: 'vertical', outline: 'none', backgroundColor: '#fff' }}
            />

            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#4b5563', marginBottom: '6px' }}>Carga Horária Total (Horas):</label>
            <input 
              type="number" 
              placeholder="Ex: 20" 
              value={cargaHoraria} 
              onChange={(e) => setCargaHoraria(e.target.value)} 
              style={{ width: '100%', padding: '12px', marginBottom: '25px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem', outline: 'none', backgroundColor: '#fff' }}
            />

            <button type="submit" style={{ width: '100%', padding: '14px', background: '#2da44e', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.05rem', cursor: 'pointer' }}>
              Publicar na Vitrine
            </button>
          </form>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '35px', borderRadius: '16px', boxShadow: '0 6px 18px rgba(0,0,0,0.04)', border: '1px solid #e5e7eb' }}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.4rem', fontWeight: '800', color: '#1f2937' }}>🗑️ Remover do Catálogo</h3>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '20px' }}>Exclua cursos obsoletos imediatamente da plataforma.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '430px', overflowY: 'auto', paddingRight: '5px' }}>
              {cursos.map(c => (
                <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderRadius: '8px', border: '1px solid #f3f4f6', backgroundColor: '#f9fafb' }}>
                  <span style={{ fontWeight: '600', color: '#374151', fontSize: '0.95rem' }}>{c.nomeCurso}</span>
                  <button 
                    onClick={() => handleDeletar(c.id)}
                    style={{ background: '#fef2f2', color: '#dc2626', border: '1px solid #fee2e2', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold' }}
                  >
                    Excluir
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
