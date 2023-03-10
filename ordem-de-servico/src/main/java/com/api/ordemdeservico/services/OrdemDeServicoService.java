package com.api.ordemdeservico.services;

import com.api.ordemdeservico.models.OrdemDeServicoModel;
import com.api.ordemdeservico.repositories.OrdemDeServicoRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class OrdemDeServicoService {

    final OrdemDeServicoRepository ordemDeServicoRepository;


    public OrdemDeServicoService(OrdemDeServicoRepository ordemDeServicoRepository) {
        this.ordemDeServicoRepository = ordemDeServicoRepository;
    }

    @Transactional
    public OrdemDeServicoModel save(OrdemDeServicoModel ordemDeServicoModel) {
        return ordemDeServicoRepository.save(ordemDeServicoModel);
    }

    public boolean existsByCpf(String cpf) {
        return ordemDeServicoRepository.existsByCpf(cpf);
    }

    public boolean existsByFone(String fone) {
        return ordemDeServicoRepository.existsByFone(fone);
    }

    public List<OrdemDeServicoModel> findAll() {
        return ordemDeServicoRepository.findAll();
    }

    public Optional<OrdemDeServicoModel> findById(UUID id) {
        return ordemDeServicoRepository.findById(id);
    }

    @Transactional
    public void delete(OrdemDeServicoModel ordemDeServicoModel) {
        ordemDeServicoRepository.delete(ordemDeServicoModel);
    }
}
