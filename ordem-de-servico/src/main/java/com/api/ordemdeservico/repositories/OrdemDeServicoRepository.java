package com.api.ordemdeservico.repositories;

import com.api.ordemdeservico.models.OrdemDeServicoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface OrdemDeServicoRepository extends JpaRepository<OrdemDeServicoModel, UUID> {
    boolean existsByCpf(String cpf);
    boolean existsByFone(String fone);
}
