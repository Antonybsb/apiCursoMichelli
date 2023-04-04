package com.api.ordemdeservico.services;

import com.api.ordemdeservico.models.ClienteModel;
import com.api.ordemdeservico.repositories.ClienteRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ClienteService {

    final ClienteRepository clienteRepository;


    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    @Transactional
    public ClienteModel save(ClienteModel clienteModel) {
        return clienteRepository.save(clienteModel);
    }

    public boolean existsByCpf(String cpf) {
        return clienteRepository.existsByCpf(cpf);
    }

    public boolean existsByFone(String fone) {
        return clienteRepository.existsByFone(fone);
    }

    public List<ClienteModel> findAll() {
        return clienteRepository.findAll();
    }

    public Optional<ClienteModel> findById(UUID id) {
        return clienteRepository.findById(id);
    }

    @Transactional
    public void delete(ClienteModel clienteModel) {
        clienteRepository.delete(clienteModel);
    }
}
