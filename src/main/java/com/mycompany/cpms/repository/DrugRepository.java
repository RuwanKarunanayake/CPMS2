package com.mycompany.cpms.repository;

import com.mycompany.cpms.domain.Drug;

import org.springframework.data.jpa.repository.*;

import java.util.List;


@SuppressWarnings("unused")
public interface DrugRepository extends JpaRepository<Drug,Long> {

}
