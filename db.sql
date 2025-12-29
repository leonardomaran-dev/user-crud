-- Criando e Inserindo Dados na Tabela

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO users (name, email) VALUES
('Alice Johnson', 'alice.j@example.com'),
('Bob Williams', 'bob.w@example.com'),
('Charlie Brown', 'charlie.b@example.com'),
('Diana Miller', 'diana.m@example.com'),
('Ethan Davis', 'ethan.d@example.com'),
('Fiona Garcia', 'fiona.g@example.com'),
('George Harris', 'george.h@example.com'),
('Hannah Clark', 'hannah.c@example.com'),
('Ian Turner', 'ian.t@example.com'),
('Julia Scott', 'julia.s@example.com'),
('Kevin Adams', 'kevin.a@example.com'),
('Linda Baker', 'linda.b@example.com'),
('Michael Evans', 'michael.e@example.com'),
('Natalie Ford', 'natalie.f@example.com'),
('Oliver Green', 'oliver.g@example.com');
