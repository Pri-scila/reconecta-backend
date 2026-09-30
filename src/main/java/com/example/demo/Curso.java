package com.example.demo;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_vagas_apoia")
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nome; // Ex: Mentoria de Liderança Feminina

    @Column(nullable = false, length = 255)
    private String descricao;

    @Column(nullable = false)
    private Integer duracaoHoras;

    @Column(nullable = false)
    private Integer vagasDisponiveis;

    @Column(nullable = false, length = 100)
    private String empresaParceira; // Empresa apoiadora da ODS 5

    @Column(nullable = false, length = 150)
    private String contrapartidaEmprego; // Ex: Banco de talentos exclusivo para mulheres

    public Curso() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public Integer getDuracaoHoras() { return duracaoHoras; }
    public void setDuracaoHoras(Integer duracaoHoras) { this.duracaoHoras = duracaoHoras; }

    public Integer getVagasDisponiveis() { return vagasDisponiveis; }
    public void setVagasDisponiveis(Integer vagasDisponiveis) { this.vagasDisponiveis = vagasDisponiveis; }

    public String getEmpresaParceira() { return empresaParceira; }
    public void setEmpresaParceira(String empresaParceira) { this.empresaParceira = empresaParceira; }

    public String getContrapartidaEmprego() { return contrapartidaEmprego; }
    public void setContrapartidaEmprego(String contrapartidaEmprego) { this.contrapartidaEmprego = contrapartidaEmprego; }
}
