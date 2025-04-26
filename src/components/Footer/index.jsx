import { FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { Container, Letters } from "./style";

export const Footer = () => {
  const handleMouseOver = (e) => {
    e.currentTarget.style.color = "#555"; // Cor cinza escuro ao passar o mouse
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.color = "white"; // Cor original branca ao sair do mouse
  };

  return (
    <footer style={{ width: "100%", background: "linear-gradient(135deg, #1e1f29, #2e3142)", padding: "0.5rem 0" }}>
      <Container>
        {/* ÍCONES em cards circulares com tamanho maior */}
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", alignItems: "center", paddingBottom: "0.5rem" }}>
          {[{
            icon: <FaJs size={30} color="white" />, url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript", hover: "#f7df1e"
          }, {
            icon: <FaReact size={30} color="white" />, url: "https://react.dev/", hover: "#61dafb"
          }, {
            icon: <SiStyledcomponents size={30} color="white" />, url: "https://styled-components.com/", hover: "#db7093"
          }, {
            icon: <FaGithub size={30} color="white" />, url: "https://github.com/oPedroFranca/pomodoro-todo", hover: "#ccc"
          }].map(({ icon, url, hover }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: "#2a2c3b",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "background-color 0.3s"
              }}
              onMouseOver={(e) => {
                e.currentTarget.firstChild.style.color = hover;
              }}
              onMouseOut={(e) => {
                e.currentTarget.firstChild.style.color = "white";
              }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Seção de Contato mais compacta */}
        <div style={{ textAlign: "center", color: "white", marginTop: "0.5rem" }}>
          <h3 style={{ marginBottom: "0.4rem", fontSize: "1.1rem", letterSpacing: "1px", color: "#c084fc", textTransform: "uppercase" }}>
            Contact Us
          </h3>
          <p
            style={{
              transition: "color 0.3s",
              marginBottom: "0.4rem",
              fontSize: "1rem",
              color: "white",
              cursor: "pointer"
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Email: jullianarfcarvalho@gmail.com
          </p>
          <p
            style={{
              transition: "color 0.3s",
              fontSize: "1rem",
              color: "white",
              cursor: "pointer"
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Phone: (31) 99947-5936
          </p>
        </div>

        {/* Rodapé com copyright */}
        <Letters>
          <p
            style={{
              fontSize: "0.8rem",
              color: "#aaa",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            &copy; 2025 pomodoro. All rights reserved.
          </p>
        </Letters>
      </Container>
    </footer>
  );
};
