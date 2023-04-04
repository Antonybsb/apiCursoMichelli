package com.api.ordemdeservico.models;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "PEDIDO")
public class PedidoModel implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    @Column(nullable = false)
    private String midia;
    @Column(nullable = false)
    private String acabamento;
    @Column(nullable = false)
    private Number largura;
    @Column(nullable = false)
    private Number altura;
    @Column(nullable = false)
    private Number vlUnitario;
    @Column(nullable = false)
    private Number dgtValor;
    @Column(nullable = false)
    private Number quantidade;

    public PedidoModel(String midia) {
        this.midia = midia;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getMidia() {
        return midia;
    }

    public void setMidia(String midia) {
        this.midia = midia;
    }

    public String getAcabamento() {
        return acabamento;
    }

    public void setAcabamento(String acabamento) {
        this.acabamento = acabamento;
    }

    public Number getLargura() {
        return largura;
    }

    public void setLargura(Number largura) {
        this.largura = largura;
    }

    public Number getAltura() {
        return altura;
    }

    public void setAltura(Number altura) {
        this.altura = altura;
    }

    public Number getVlUnitario() {
        return vlUnitario;
    }

    public void setVlUnitario(Number vlUnitario) {
        this.vlUnitario = vlUnitario;
    }

    public Number getDgtValor() {
        return dgtValor;
    }

    public void setDgtValor(Number dgtValor) {
        this.dgtValor = dgtValor;
    }

    public Number getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Number quantidade) {
        this.quantidade = quantidade;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PedidoModel that = (PedidoModel) o;
        return Objects.equals(id, that.id) && Objects.equals(midia, that.midia) && Objects.equals(acabamento, that.acabamento) && Objects.equals(largura, that.largura) && Objects.equals(altura, that.altura) && Objects.equals(vlUnitario, that.vlUnitario) && Objects.equals(dgtValor, that.dgtValor) && Objects.equals(quantidade, that.quantidade);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, midia, acabamento, largura, altura, vlUnitario, dgtValor, quantidade);
    }

    @Override
    public String toString() {
        return "PedidoModel{" +
                "id=" + id +
                ", midia='" + midia + '\'' +
                ", acabamento='" + acabamento + '\'' +
                ", largura=" + largura +
                ", altura=" + altura +
                ", vlUnitario=" + vlUnitario +
                ", dgtValor=" + dgtValor +
                ", quantidade=" + quantidade +
                '}';
    }



}
