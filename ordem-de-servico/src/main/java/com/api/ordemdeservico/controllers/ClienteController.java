package com.api.ordemdeservico.controllers;

import com.api.ordemdeservico.dtos.ClienteDto;
import com.api.ordemdeservico.dtos.DeleteClienteResponseDto;
import com.api.ordemdeservico.models.ClienteModel;
import com.api.ordemdeservico.services.ClienteService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/cadastro-de-cliente")
public class ClienteController {

    final ClienteService clienteService;

    /*Ponto de injeção do Service*/
    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }


    /*Nesse método Post a URI foi definida a nível de classe.
    *Nesse caso, sempre que for necessário enviar um POST, seerá enviado para ("/cadastro-de-cliente").
    * Com isso, o método saveCliente é acionado para responder a solicitação.
    */
    @PostMapping
    public ResponseEntity<Object> saveCliente(@RequestBody @Valid ClienteDto clienteDto){
        if (clienteService.existsByCpf(clienteDto.getCpf())){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("O CPF já está em uso.");
        }

        if (clienteService.existsByFone(clienteDto.getFone())){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("O telefone já está em uso.");
        }


        var clienteModel = new ClienteModel();
        /*BeanUtils.copyProperties serve para converter o DTO em MODEL (Define o que vai ser convertido no que será convertido)*/
        BeanUtils.copyProperties(clienteDto, clienteModel);
        clienteModel.setData_registro(LocalDateTime.now(ZoneId.of("UTC")));
        return ResponseEntity.status(HttpStatus.CREATED).body(clienteService.save(clienteModel));
    }

    @GetMapping
    public ResponseEntity<List<ClienteModel>> getAllCliente(){
        return ResponseEntity.status(HttpStatus.OK).body(clienteService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getOneCliente(@PathVariable(value = "id")UUID id){
        Optional<ClienteModel> clienteModelOptional = clienteService.findById(id);
        if (!clienteModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não Encontrado.");
        }
            return ResponseEntity.status(HttpStatus.OK).body(clienteModelOptional.get());

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteCliente(@PathVariable(value = "id") String id){
        UUID uuid = UUID.fromString(id);

        Optional<ClienteModel> clienteModelOptional = clienteService.findById(uuid);
        if (!clienteModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não Encontrado.");
        }
        clienteService.delete(clienteModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Cliente Deletado com Sucesso");
    }

//    @DeleteMapping("/{id}")
//    public ResponseEntity<Object> deleteCliente(@PathVariable(value = "id") UUID id){
//
//        Optional<ClienteModel> clienteModelOptional = clienteService.findById(id);
//        if (!clienteModelOptional.isPresent()) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não Encontrado.");
//        }
//        clienteService.delete(clienteModelOptional.get());
//        return ResponseEntity.status(HttpStatus.OK).body("Cliente Deletado com Sucesso");
//    }



//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deletar(@PathVariable("id") UUID id) {
//        clienteService.deletar(id);
//        return ResponseEntity.ok().build();
//    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateCliente(@PathVariable(value = "id") UUID id,
                                                       @RequestBody @Valid ClienteDto clienteDto){
        Optional<ClienteModel> clienteModelOptional = clienteService.findById(id);
        if (!clienteModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não Encontrado.");
        }
        ClienteModel cadastroDeClienteModel = clienteModelOptional.get();
        cadastroDeClienteModel.setNome(clienteDto.getNome());
        cadastroDeClienteModel.setEndereco(clienteDto.getEndereco());
        cadastroDeClienteModel.setBairro(clienteDto.getBairro());
        cadastroDeClienteModel.setCidade(clienteDto.getCidade());
        cadastroDeClienteModel.setEstado(clienteDto.getEstado());
        cadastroDeClienteModel.setCpf(clienteDto.getCpf());
        cadastroDeClienteModel.setFone(clienteDto.getFone());
        return ResponseEntity.status(HttpStatus.OK).body(clienteService.save(cadastroDeClienteModel));
    }




}
