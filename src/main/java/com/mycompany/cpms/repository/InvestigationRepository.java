package com.mycompany.cpms.repository;

import com.mycompany.cpms.domain.Investigation;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;

import java.util.List;


@SuppressWarnings("unused")
public interface InvestigationRepository extends JpaRepository<Investigation,Long> {

    @Query("select investigation from Investigation investigation where investigation.recording.user.login = ?#{principal.username}")
    Page<Investigation> findByRecordingUserLogin(Pageable pageable);
}
