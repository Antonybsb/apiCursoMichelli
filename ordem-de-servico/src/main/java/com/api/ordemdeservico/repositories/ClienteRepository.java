package com.api.ordemdeservico.repositories;

import com.api.ordemdeservico.models.ClienteModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface ClienteRepository extends JpaRepository<ClienteModel, UUID> {
    boolean existsByCpf(String cpf);
    boolean existsByFone(String fone);
}
