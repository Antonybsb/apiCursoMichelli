package com.api.ordemdeservico.dtos;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;

public class OrdemDeServicoDto {

    @NotBlank
    private String nome;
    @NotBlank
    private String endereco;
    @NotBlank
    @Size(max = 13)
    private String cpf;
    @NotBlank
    @Size(max = 13)
    private String inscricaoEstadual;
    @NotBlank
    @Size(max = 11)
    private String fone;
    @NotBlank
    private String condPagamento;



    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getInscricaoEstadual() {
        return inscricaoEstadual;
    }

    public void setInscricaoEstadual(String inscricaoEstadual) {
        this.inscricaoEstadual = inscricaoEstadual;
    }

    public String getFone() {
        return fone;
    }

    public void setFone(String fone) {
        this.fone = fone;
    }

    public String getCondPagamento() {
        return condPagamento;
    }

    public void setCondPagamento(String condPagamento) {
        this.condPagamento = condPagamento;
    }
}
