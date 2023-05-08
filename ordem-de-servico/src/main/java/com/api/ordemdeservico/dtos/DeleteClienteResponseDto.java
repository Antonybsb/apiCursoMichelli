package com.api.ordemdeservico.dtos;

public class DeleteClienteResponseDto {
    private String mensagem;

    public DeleteClienteResponseDto(String mensagem) {
        this.mensagem = mensagem;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }
}
