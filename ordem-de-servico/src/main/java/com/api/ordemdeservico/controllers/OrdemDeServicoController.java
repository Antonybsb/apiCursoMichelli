package com.api.ordemdeservico.controllers;

import com.api.ordemdeservico.dtos.OrdemDeServicoDto;
import com.api.ordemdeservico.models.OrdemDeServicoModel;
import com.api.ordemdeservico.services.OrdemDeServicoService;
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
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/ordem-de-servico")
public class OrdemDeServicoController {

    final OrdemDeServicoService ordemDeServicoService;

    public OrdemDeServicoController(OrdemDeServicoService ordemDeServicoService) {
        this.ordemDeServicoService = ordemDeServicoService;
    }

    @PostMapping
    public ResponseEntity<Object> saveOrdemDeServico(@RequestBody @Valid OrdemDeServicoDto ordemDeServicoDto){
        if (ordemDeServicoService.existsByCpf(ordemDeServicoDto.getCpf())){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("O CPF já está em uso.");
        }

        if (ordemDeServicoService.existsByFone(ordemDeServicoDto.getFone())){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("O telefone já está em uso.");
        }


        var ordemDeServicoModel = new OrdemDeServicoModel();
        /*BeanUtils.copyProperties serve para converter o DTO em MODEL*/
        BeanUtils.copyProperties(ordemDeServicoDto, ordemDeServicoModel);
        ordemDeServicoModel.setDataEntrada(LocalDateTime.now(ZoneId.of("UTC")));
        return ResponseEntity.status(HttpStatus.CREATED).body(ordemDeServicoService.save(ordemDeServicoModel));
    }

    @GetMapping
    public ResponseEntity<List<OrdemDeServicoModel>> getAllOrdemDeServico(){
        return ResponseEntity.status(HttpStatus.OK).body(ordemDeServicoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getOneOrdemDeServico(@PathVariable(value = "id")UUID id){
        Optional<OrdemDeServicoModel> ordemDeServicoModelOptional = ordemDeServicoService.findById(id);
        if (!ordemDeServicoModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Ordem de serviço não encontrada.");
        }
            return ResponseEntity.status(HttpStatus.OK).body(ordemDeServicoModelOptional.get());

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteOrdemDeServico(@PathVariable(value = "id") UUID id){
        Optional<OrdemDeServicoModel> ordemDeServicoModelOptional = ordemDeServicoService.findById(id);
        if (!ordemDeServicoModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Ordem de serviço não encontrada.");
        }
        ordemDeServicoService.delete(ordemDeServicoModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Ordem de serviço deletada com sucesso");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateOrdemDeServico(@PathVariable(value = "id") UUID id,
                                                       @RequestBody @Valid OrdemDeServicoDto ordemDeServicoDto){
        Optional<OrdemDeServicoModel> ordemDeServicoModelOptional = ordemDeServicoService.findById(id);
        if (!ordemDeServicoModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Ordem de serviço não encontrada.");
        }
        OrdemDeServicoModel ordemDeServicoModel = ordemDeServicoModelOptional.get();
        ordemDeServicoModel.setNome(ordemDeServicoDto.getNome());
        ordemDeServicoModel.setEndereco(ordemDeServicoDto.getEndereco());
        ordemDeServicoModel.setCpf(ordemDeServicoDto.getCpf());
        ordemDeServicoModel.setInscricaoEstadual(ordemDeServicoDto.getInscricaoEstadual());
        ordemDeServicoModel.setFone(ordemDeServicoDto.getFone());
        ordemDeServicoModel.setCondPagamento(ordemDeServicoDto.getCondPagamento());
        return ResponseEntity.status(HttpStatus.OK).body(ordemDeServicoService.save(ordemDeServicoModel));
    }




}
