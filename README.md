# Padroes do projeto.

Bem-vindo ao projeto! Para manter o código organizado e compreensível para todos, seguimos algumas regras padrões. Por favor, leia e siga essas diretrizes ao contribuir.

## 1. Nomeclatura de Variáveis e Funções
- Todas as variáveis e funções devem ser nomeadas em **inglês**.
- Utilize nomes **claros e descritivos**, evitando abreviações desnecessárias.

### Exemplo:
```javascript
// Ruim:
let n;  
function calc() {}

// Bom:
let userName;
function calculateTotalPrice() {}
```

## 2. Padronização de Código
- Utilize **camelCase** para variáveis e funções.
- Use **PascalCase** para componentes React.
- Nomeie arquivos de componentes com a extensão `.jsx`.

### Exemplo:
```javascript
// camelCase para variáveis e funções
const totalPrice = 100;
function getUserName() {}

// PascalCase para componentes React
function UserCard() {
  return <div>User Info</div>;
}
```

## 3. Estrutura de Pastas
- Separe componentes reutilizáveis dentro da pasta `components`.
- Arquivos de páginas ficam dentro da pasta `pages`.
- Evite arquivos com muitas responsabilidades.

### Exemplo de Estrutura:
```
/src
  /components
    Button.tsx
    Timer.tsx
  /pages
    /pomodoro
      index.tsx
      /components
        PomodoroInfo.tsx
        Timer.tsx
```

## 4. Comentários
- Use comentários apenas quando necessário.
- Explique apenas trechos complexos ou que exigem contexto.

```javascript
// Bom
// Converte a data para o formato YYYY-MM-DD
function formatDate(date: Date) {
  return date.toISOString().split('T')[0];
}
```

Seguindo essas regras, manteremos um código limpo, organizado e fácil de entender para todos!

## 5. Motivos para seguir os padrões

Se tivermos um bom desempenho e alcançarmos um resultado satisfatório com o website, iremos publicá-lo no LinkedIn como portfólio para futuras contratações. Por isso, é essencial seguir esses padrões, pois o projeto será visto por outras pessoas e pode impactar oportunidades profissionais.

Empresas constroem seus sistemas inteiramente em inglês e seguem padrões internos rigorosos para garantir qualidade, manutenção e escalabilidade. Por isso seria interessante simular as mesmas práticas.

![image](https://github.com/user-attachments/assets/8f671f95-3c6e-421e-a89a-60b445b2cd9f)

Se tiver dúvidas, pergunte no grupo do projeto. 🚀

