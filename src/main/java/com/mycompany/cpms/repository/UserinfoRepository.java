package com.mycompany.cpms.repository;

import com.mycompany.cpms.domain.Userinfo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;


@SuppressWarnings("unused")
public interface UserinfoRepository extends JpaRepository<Userinfo,Long> {

    @Query("select distinct userinfo from Userinfo userinfo left join fetch userinfo.clinics")
    List<Userinfo> findAllWithEagerRelationships();

    @Query("select userinfo from Userinfo userinfo left join fetch userinfo.clinics where userinfo.id =:id")
    Userinfo findOneWithEagerRelationships(@Param("id") Long id);

    @Query("select userinfo from Userinfo userinfo where userinfo.user.login = ?#{principal.username}")
    Page<Userinfo> findByUserinfoUserLogin(Pageable pageable);
}
