package com.example.demo;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "tb_acolhimentos_apoia")
public class Inscricao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "beneficiaria_id", nullable = false)
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "vaga_id", nullable = false)
    private Curso curso;

    @Column(nullable = false)
    private LocalDate dataInscricao;

    @Column(nullable = false)
    private String status; // Ex: "Acolhida", "Em Mentoria", "Encaminhada"

    public Inscricao() {
        this.dataInscricao = LocalDate.now();
        this.status = "Acolhida";
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Usuario getUsuario() { return usuario; }
    public void setUsuario(Usuario usuario) { this.usuario = usuario; }

    public Curso getCurso() { return curso; }
    public void setCurso(Curso curso) { this.curso = curso; }

    public LocalDate getDataInscricao() { return dataInscricao; }
    public void setDataInscricao(LocalDate dataInscricao) { this.dataInscricao = dataInscricao; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
