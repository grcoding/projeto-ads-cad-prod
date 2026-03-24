# projeto-ads-cad-prod

# 📦 Gerenciador de Cadastro de Produtos (Full Stack)

Aplicação completa para controle de inventário, desenvolvida com uma arquitetura separada entre um cliente leve e funcional e um servidor robusto para persistência de dados.

## 🎨 Front-end (Client-Side)
Interface desenvolvida com foco em **UI/UX**, priorizando a responsividade e uma estética moderna.

* **HTML5:** Estruturação semântica da aplicação.
* **CSS3:** Estilização avançada, utilizando conceitos de **Glassmorphism** e layouts responsivos para diferentes dispositivos.
* **JavaScript (ES6+):** Lógica de manipulação do DOM, validação de formulários e consumo de APIs utilizando o método `fetch`.

## ⚙️ Back-end (Server-Side)
API RESTful responsável por processar as regras de negócio e garantir a integridade das informações.

* **Java 17+:** Linguagem robusta para o desenvolvimento do core da aplicação.
* **Spring Boot:** Framework para agilizar a criação dos endpoints e configuração do servidor.
* **Spring Data JPA:** Camada de persistência para comunicação eficiente com o banco de dados.

## 🗄️ Banco de Dados
* **MariaDB:** Sistema de gerenciamento de banco de dados relacional.
* **Modelagem:** Estrutura normalizada seguindo a **3ª Forma Normal (3FN)** para evitar redundâncias e garantir a consistência dos dados.

---

## 🚀 Como Executar o Projeto

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/projeto-ads-produto.git
```

### 2. Back-end (Spring Boot)
1. Certifique-se de ter o **JDK 17** e o **MariaDB** instalados.
2. Configure o banco de dados no arquivo `src/main/resources/application.properties`.
3. Execute a aplicação através da sua IDE ou via terminal:
   ```bash
   ./mvnw spring-boot:run
   ```

### 3. Front-end (Vanilla JS)
Como o projeto utiliza JavaScript puro, não há necessidade de instalação de dependências pesadas.
1. Navegue até a pasta do front-end.
2. Abra o arquivo `index.html` em seu navegador ou utilize a extensão **Live Server** no VS Code para uma melhor experiência de desenvolvimento.

---

## 👤 Autora
**Grazi**
*Estudante de Análise e Desenvolvimento de Sistemas.*
> Focada em criar sistemas que equilibram lógica complexa no back-end com interfaces sofisticadas no front-end.
