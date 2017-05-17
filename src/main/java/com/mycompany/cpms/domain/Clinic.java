package com.mycompany.cpms.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Clinic.
 */
@Entity
@Table(name = "clinic")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Clinic implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @NotNull
    @Column(name = "code", nullable = false)
    private String code;

    @OneToMany(mappedBy = "clinic")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Recording> recordings = new HashSet<>();

    @ManyToMany(mappedBy = "clinics")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Userinfo> userinfos = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Clinic name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public Clinic code(String code) {
        this.code = code;
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Set<Recording> getRecordings() {
        return recordings;
    }

    public Clinic recordings(Set<Recording> recordings) {
        this.recordings = recordings;
        return this;
    }

    public Clinic addRecording(Recording recording) {
        this.recordings.add(recording);
        recording.setClinic(this);
        return this;
    }

    public Clinic removeRecording(Recording recording) {
        this.recordings.remove(recording);
        recording.setClinic(null);
        return this;
    }

    public void setRecordings(Set<Recording> recordings) {
        this.recordings = recordings;
    }

    public Set<Userinfo> getUserinfos() {
        return userinfos;
    }

    public Clinic userinfos(Set<Userinfo> userinfos) {
        this.userinfos = userinfos;
        return this;
    }

    public Clinic addUserinfo(Userinfo userinfo) {
        this.userinfos.add(userinfo);
        userinfo.getClinics().add(this);
        return this;
    }

    public Clinic removeUserinfo(Userinfo userinfo) {
        this.userinfos.remove(userinfo);
        userinfo.getClinics().remove(this);
        return this;
    }

    public void setUserinfos(Set<Userinfo> userinfos) {
        this.userinfos = userinfos;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Clinic clinic = (Clinic) o;
        if (clinic.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, clinic.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Clinic{" +
            "id=" + id +
            ", name='" + name + "'" +
            ", code='" + code + "'" +
            '}';
    }
}
