--02) Criar e rodar os scripts DDL no Banco de Dados

-- Gerado por Oracle SQL Developer Data Modeler 23.1.0.087.0806
--   em:        2023-12-01 07:47:30 BRT
--   site:      Oracle Database 12c
--   tipo:      Oracle Database 12c



-- predefined type, no DDL - MDSYS.SDO_GEOMETRY

-- predefined type, no DDL - XMLTYPE

CREATE TABLE carteira_vacinacao (
    id_carteira_vacinacao NUMBER(10) NOT NULL,
    vacina_ao_nascer      VARCHAR2(50) NOT NULL,
    vacina_mes_1          VARCHAR2(100) NOT NULL,
    vacina_mes_2          VARCHAR2(100) NOT NULL,
    vacina_mes_4          VARCHAR2(100) NOT NULL,
    vacina_mes_6          VARCHAR2(100) NOT NULL,
    vacina_mes_9          VARCHAR2(100) NOT NULL,
    vacina_mes_12         VARCHAR2(100) NOT NULL,
    vacina_mes_15         VARCHAR2(100) NOT NULL,
    usuario_crianca_cpf_crian NUMBER(11) NOT NULL
);

ALTER TABLE carteira_vacinacao ADD CONSTRAINT carteira_vacinacao_pk PRIMARY KEY ( id_carteira_vacinacao );

CREATE TABLE consulta (
    id_consulta               NUMBER(10) NOT NULL,
    mes_1_consulta            VARCHAR2(100) NOT NULL,
    mes_2_consulta            VARCHAR2(100) NOT NULL,
    mes_3_consulta            VARCHAR2(100) NOT NULL,
    mes_4_consulta            VARCHAR2(100) NOT NULL,
    mes_5_consulta            VARCHAR2(100) NOT NULL,
    mes_6_consulta            VARCHAR2(100) NOT NULL,
    mes_7_consulta            VARCHAR2(100) NOT NULL,
    mes_8_consulta            VARCHAR2(100) NOT NULL,
    mes_9_consulta            VARCHAR2(100) NOT NULL,
    mes_10_consulta           VARCHAR2(100) NOT NULL,
    mes_11_consulta           VARCHAR2(100) NOT NULL,
    mes_12_consulta           VARCHAR2(100) NOT NULL,
    mes_13_consulta           VARCHAR2(100) NOT NULL,
    mes_14_consulta           VARCHAR2(100) NOT NULL,
    mes_15_consulta           VARCHAR2(100) NOT NULL,
    mes_16_consulta           VARCHAR2(100) NOT NULL,
    mes_17_consulta           VARCHAR2(100) NOT NULL,
    mes_18_consulta           VARCHAR2(100) NOT NULL,
    mes_19_consulta           VARCHAR2(100) NOT NULL,
    mes_20_consulta           VARCHAR2(100) NOT NULL,
    mes_21_consulta           VARCHAR2(100) NOT NULL,
    mes_22_consulta           VARCHAR2(100) NOT NULL,
    mes_23_consulta           VARCHAR2(100) NOT NULL,
    mes_24_consulta           VARCHAR2(100) NOT NULL,
    observacao_consulta       VARCHAR2(100) NOT NULL,
    usuario_medico_crm_medico VARCHAR2(30) NOT NULL,
    usuario_crianca_cpf_crian NUMBER(11) NOT NULL
);

ALTER TABLE consulta ADD CONSTRAINT consulta_pk PRIMARY KEY ( id_consulta );

CREATE TABLE nascimento (
    id_nascimento             NUMBER(10),
    peso_nascimento           NUMBER(5, 2) NOT NULL,
    altura_nascimento         NUMBER(5, 2) NOT NULL,
    data_nascimento           DATE NOT NULL,
    hora_nascimento           NUMBER(4) NOT NULL,
    teste_pezinho_nascimento  VARCHAR2(50) NOT NULL,
    local_nascimento          VARCHAR2(50) NOT NULL,
    usuario_medico_crm_medico VARCHAR2(30) NOT NULL,
    usuario_crianca_cpf_crian NUMBER(11) NOT NULL
);

CREATE UNIQUE INDEX nascimento__idx ON
    nascimento (
        usuario_crianca_cpf_crian
    ASC );

CREATE TABLE obito (
    id_obito                  NUMBER(10) NOT NULL,
    causa_obito               VARCHAR2(50) NOT NULL,
    local_obito               VARCHAR2(50) NOT NULL,
    data_obito                DATE NOT NULL,
    hora_obito                NUMBER(4) NOT NULL,
    usuario_crianca_cpf_crian NUMBER(11) NOT NULL
);

CREATE UNIQUE INDEX obito__idx ON
    obito (
        usuario_crianca_cpf_crian
    ASC );

ALTER TABLE obito ADD CONSTRAINT obito_pk PRIMARY KEY ( id_obito );

CREATE TABLE usuario_crianca (
    cpf_crian                                NUMBER(11) NOT NULL,
    nome_crian                               VARCHAR2(50) NOT NULL,
    condicoes_preexistentes_crian            VARCHAR2(50) NOT NULL,
    comunidade_crian                         VARCHAR2(50) NOT NULL,
    etinia_crian                             VARCHAR2(50), 
    id_carteira_vacinacao NUMBER(10) NOT NULL
);

CREATE UNIQUE INDEX usuario_crianca__idx ON
    usuario_crianca (
        id_carteira_vacinacao
    ASC );

ALTER TABLE usuario_crianca ADD CONSTRAINT usuario_crianca_pk PRIMARY KEY ( cpf_crian );

CREATE TABLE usuario_medico (
    crm_medico      VARCHAR2(30) NOT NULL,
    nome_medico     VARCHAR2(50) NOT NULL,
    senha_medico    VARCHAR2(50) NOT NULL,
    email_medico    VARCHAR2(50) NOT NULL,
    telefone_medico NUMBER(20) NOT NULL
);

ALTER TABLE usuario_medico ADD CONSTRAINT usuario_medico_pk PRIMARY KEY ( crm_medico );

ALTER TABLE carteira_vacinacao
    ADD CONSTRAINT vacina_usuario_crianca_fk FOREIGN KEY ( usuario_crianca_cpf_crian )
        REFERENCES usuario_crianca ( cpf_crian );

ALTER TABLE consulta
    ADD CONSTRAINT consulta_usuario_crianca_fk FOREIGN KEY ( usuario_crianca_cpf_crian )
        REFERENCES usuario_crianca ( cpf_crian );

ALTER TABLE consulta
    ADD CONSTRAINT consulta_usuario_medico_fk FOREIGN KEY ( usuario_medico_crm_medico )
        REFERENCES usuario_medico ( crm_medico );

ALTER TABLE nascimento
    ADD CONSTRAINT nascimento_usuario_crianca_fk FOREIGN KEY ( usuario_crianca_cpf_crian )
        REFERENCES usuario_crianca ( cpf_crian );

ALTER TABLE nascimento
    ADD CONSTRAINT nascimento_usuario_medico_fk FOREIGN KEY ( usuario_medico_crm_medico )
        REFERENCES usuario_medico ( crm_medico );

ALTER TABLE obito
    ADD CONSTRAINT obito_usuario_crianca_fk FOREIGN KEY ( usuario_crianca_cpf_crian )
        REFERENCES usuario_crianca ( cpf_crian );

ALTER TABLE usuario_crianca
    ADD CONSTRAINT crianca_vacinacao_fk FOREIGN KEY ( id_carteira_vacinacao )
        REFERENCES carteira_vacinacao ( id_carteira_vacinacao );



-- Relatório do Resumo do Oracle SQL Developer Data Modeler: 
-- 
-- CREATE TABLE                             6
-- CREATE INDEX                             3
-- ALTER TABLE                             11
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           0
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                          0
-- CREATE MATERIALIZED VIEW                 0
-- CREATE MATERIALIZED VIEW LOG             0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        0
-- CREATE USER                              0
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- TSDP POLICY                              0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   0
-- WARNINGS                                 0



--03) Carga de Dados
SET SERVEROUTPUT ON;

-- Bloco para inserir dados na tabela CARTEIRA_VACINACAO
BEGIN
    INSERT INTO CARTEIRA_VACINACAO VALUES (
        2, 'A', 'B', 'Penta1', 'VIP1', 'VOP1', 'VIP2', 'VOP2', 'HepB2, Penta2'
    );
    COMMIT WORK;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        DBMS_OUTPUT.PUT_LINE('Inserção duplicada na tabela CARTEIRA_VACINACAO.');
END;


-- Bloco para inserir dados na tabela USUARIO_CRIANCA
BEGIN
    INSERT INTO USUARIO_CRIANCA VALUES (
        '0987654321', 'Pedro Cardoso', 'Hepatite', 'quilombola', 'Negro', 2
    );
    COMMIT WORK;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        DBMS_OUTPUT.PUT_LINE('Inserção duplicada na tabela USUARIO_CRIANCA.');
END;


-- Bloco para inserir dados na tabela USUARIO_MEDICO
BEGIN
    INSERT INTO USUARIO_MEDICO VALUES (
        'CRM654321', 'Dr. Antonio Silvano', 'Senha1!', 'antonio@email.com', '0987654321'
    );
    COMMIT WORK;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        DBMS_OUTPUT.PUT_LINE('Inserção duplicada na tabela USUARIO_MEDICO.');
END;


-- Bloco para inserir dados na tabela NASCIMENTO
BEGIN
    INSERT INTO NASCIMENTO VALUES (
        2, 2.5, 63.2, TO_DATE('2023-09-25', 'YYYY-MM-DD'), 1535, 'OK', 'Hospital ABC', 'CRM654321', '0987654321'
    );
    COMMIT WORK;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        DBMS_OUTPUT.PUT_LINE('Inserção duplicada na tabela NASCIMENTO.');
END;

-- Bloco para inserir dados na tabela OBITO
BEGIN
    INSERT INTO OBITO VALUES (
        2, 'Hepatite', 'Em casa', TO_DATE('2023-12-03', 'YYYY-MM-DD'), 1112, '0987654321'
    );
    COMMIT WORK;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        DBMS_OUTPUT.PUT_LINE('Inserção duplicada na tabela OBITO.');
END;

-- Bloco para inserir dados na tabela CONSULTA
BEGIN
    INSERT INTO CONSULTA VALUES (
        2, 'Consulta ok, em dia', 'Consulta deuvidosa, paciente hepatite NOK', 'Consulta NOK, paciente muito mal', ' ', ' ', ' ', 
        ' ', ' ', ' ', ' ', ' ', ' ', 
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 
        'Hepatite nivel avançado', 'CRM654321', '0987654321'
    );
    COMMIT WORK;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        DBMS_OUTPUT.PUT_LINE('Inserção duplicada na tabela CONSULTA.');
END;


--04) Relatórios

--CARTEIRA_VACINACAO e USUARIO_CRIANCA
SET SERVEROUTPUT ON;

DECLARE
    CURSOR consulta_cursor IS
        SELECT ID_CONSULTA, MES_1_CONSULTA, MES_2_CONSULTA, USUARIO_MEDICO_CRM_MEDICO
        FROM CONSULTA;

    CURSOR medico_cursor IS
        SELECT CRM_MEDICO, NOME_MEDICO
        FROM USUARIO_MEDICO;

    v_id_consulta CONSULTA.ID_CONSULTA%TYPE;
    v_mes_1 CONSULTA.MES_1_CONSULTA%TYPE;
    v_mes_2 CONSULTA.MES_2_CONSULTA%TYPE;
    v_crm_medico USUARIO_MEDICO.CRM_MEDICO%TYPE;
    v_nome_medico USUARIO_MEDICO.NOME_MEDICO%TYPE;

BEGIN
    OPEN consulta_cursor;
    LOOP
        FETCH consulta_cursor INTO v_id_consulta, v_mes_1, v_mes_2, v_crm_medico;
        EXIT WHEN consulta_cursor%NOTFOUND;

        DBMS_OUTPUT.PUT_LINE('Consulta ID: ' || v_id_consulta);
        DBMS_OUTPUT.PUT_LINE('Mês 1: ' || v_mes_1);
        DBMS_OUTPUT.PUT_LINE('Mês 2: ' || v_mes_2);

        OPEN medico_cursor;
        FETCH medico_cursor INTO v_crm_medico, v_nome_medico;
        CLOSE medico_cursor;
        
        DBMS_OUTPUT.PUT_LINE('CRM Médico: ' || v_crm_medico);
        DBMS_OUTPUT.PUT_LINE('Nome Médico: ' || v_nome_medico);

        DBMS_OUTPUT.PUT_LINE('------------------------------');

    END LOOP;
    CLOSE consulta_cursor;

EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Erro: ' || SQLERRM);
END;


--OBITO e USUARIO_CRIANCA
SET SERVEROUTPUT ON;

DECLARE
    CURSOR c_relatorio IS
        SELECT o.ID_OBITO,
               o.CAUSA_OBITO,
               o.LOCAL_OBITO,
               o.DATA_OBITO,
               o.HORA_OBITO,
               uc.NOME_CRIAN
          FROM OBITO o
               JOIN USUARIO_CRIANCA uc ON o.USUARIO_CRIANCA_CPF_CRIAN = uc.CPF_CRIAN;

BEGIN
    FOR relatorio_row IN c_relatorio
    LOOP
        DBMS_OUTPUT.PUT_LINE('ID_OBITO: ' || relatorio_row.ID_OBITO);
        DBMS_OUTPUT.PUT_LINE('CAUSA_OBITO: ' || relatorio_row.CAUSA_OBITO);
        DBMS_OUTPUT.PUT_LINE('LOCAL_OBITO: ' || relatorio_row.LOCAL_OBITO);
        DBMS_OUTPUT.PUT_LINE('DATA_OBITO: ' || TO_CHAR(relatorio_row.DATA_OBITO, 'YYYY-MM-DD'));
        DBMS_OUTPUT.PUT_LINE('HORA_OBITO: ' || relatorio_row.HORA_OBITO);
        DBMS_OUTPUT.PUT_LINE('NOME_CRIAN: ' || relatorio_row.NOME_CRIAN);
        DBMS_OUTPUT.PUT_LINE('------------------------------');
    END LOOP;
END;