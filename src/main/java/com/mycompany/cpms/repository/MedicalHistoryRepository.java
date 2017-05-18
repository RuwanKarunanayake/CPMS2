package com.mycompany.cpms.repository;

import com.mycompany.cpms.domain.MedicalHistory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;

import java.util.List;


@SuppressWarnings("unused")
public interface MedicalHistoryRepository extends JpaRepository<MedicalHistory,Long> {

    @Query("select medicalHistory from MedicalHistory medicalHistory where medicalHistory.user.login = ?#{principal.username}")
    Page<MedicalHistory> findByMedicalHistoryUserLogin(Pageable pageable);
}
