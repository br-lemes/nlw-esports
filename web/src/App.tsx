
interface ButtonProps {
    title: string;
}

const Button = (props: ButtonProps) => (
    <button>{props.title}</button>
);

const App = () => (
    <div style={{ textAlign: 'center' }}>
        <h1>Hello World!</h1>
        <p><Button title="Cancelar" /></p>
        <p><Button title="Salvar" /></p>
    </div>
);

export default App
