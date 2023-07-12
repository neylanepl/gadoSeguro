import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/css/global.css';
import Menu from '../../components/menu';
import gadoSeguro from '../../services/connectionGadoSeguro';

const CadastrarBovino = () => {

  const [fazendas, setFazendas] = useState([]);

    useEffect(() => {
        const fetchFazendas = async () => {
            try {
                const response = await gadoSeguro.get('/fazenda');
                console.log("response: " + response.data);
                setFazendas(response.data);
            } catch (error) {
                console.error("erro ao listar fazendas: ", error);
            }
        };

        fetchFazendas();
    }, []);

  const [idFazendaForm, setIdFazendaForm] = useState(0);
  const [idVacaForm, setIdVacaForm] = useState(0);
  const [nomeForm, setNomeForm] = useState('');
  const [pesoForm, setPesoForm] = useState(0);
  const [dataForm, setDataForm] = useState('');
  const [sexoForm, setSexoForm] = useState('');
  const [reprodutorForm, setReprodutorForm] = useState('');
  const [corForm, setCorForm] = useState('');
  const [chifreForm, setChifreForm] = useState(false);
  const [racaForm, setRacaForm] = useState('');
  const [exibirInputsFemea, setExibirInputsFemea] = useState(false);
  const [producaoLeiteForm, setProducaoLeiteForm] = useState('');
  const [gravidaForm, setGravidaForm] = useState('');
  const [dandoLeiteForm, setDandoLeiteForm] = useState('');
  const [exibirInputsGestacao, setExibirInputsGestacao] = useState(false);
  const [dataInicioForm, setDataInicioForm] = useState('');

  const navigate = useNavigate();

  const handleSubmitForm = async e => {
    e.preventDefault();
    const payload = {
      idFazenda: idFazendaForm,
      idVaca: idVacaForm,
      nome: nomeForm,
      aniversario: dataForm,
      sexo: sexoForm,
      reprodutor: reprodutorForm,
      cor: corForm,
      peso: pesoForm,
      chifre: chifreForm,
      raca: racaForm,

      producaoLeite: producaoLeiteForm,
      gravida: gravidaForm,
      dandoLeite: dandoLeiteForm,
      dataInicio: dataInicioForm
    };

    try {
      const { data } = await gadoSeguro.post('/bovino', payload);
      console.log("Cadastro realizado com sucesso!")
      navigate('/');

    } catch (error) {
      console.log("Cadastro falhou!", error)
    }

    // Navegar para outra página após o envio do formulário
    navigate('/');
  };

  return (
    <div id="wrapperBovino" style={{ background: "#F0F1DF" }}>
      <Menu />

      <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}>Cadastrar Bovinos</h1>

      <div className="formularioCadastroBovino" style={{ marginBottom: "10%" }}>

        <form className="formulario" onSubmit={handleSubmitForm}>

          <div className="sub-div">
            <div className="id_"><p>Nome</p></div>
            <input type="text" className="nomeBovino" required onChange={e => setNomeForm(e.target.value)} />

            <div className="id_"><p>Fazenda</p></div>
            <select className="vacaBovino" required onChange={e => setIdFazendaForm(e.target.value)}>
                  <option value="">Selecione a fazenda</option>
                  {fazendas.map(fazenda => (
                    <option key={fazenda.idFazenda} value={fazenda.nome}>{fazenda.nome}</option>
                  ))}
            </select>

            <div className="id_"><p>Vaca</p></div>
            <select className="vacaBovino" required onChange={e => setIdVacaForm(e.target.value)}>
                  <option value="">Selecione a vaca mãe</option>
                  <option value="vaca">Vaca 1</option>
                  <option value="vaca">Vaca 2</option>
            </select>

            <div className="id_"><p>Peso</p></div>
            <input type="number" className="pesoBovino" required onChange={e => setPesoForm(e.target.value)} />

            <div className="id_"><p>Data de nascimento</p></div>
            <input type="date" className="idadeBovino" required onChange={e => setDataForm(e.target.value)} />

            <div className="id_"><p>Sexo</p></div>
            <select
              name="select"
              className="sexoBovino"
              required
              onChange={e => {
                setSexoForm(e.target.value);
                if (e.target.value === 'Femea') {
                  setExibirInputsFemea(true);
                } else {
                  setExibirInputsFemea(false);
                  setProducaoLeiteForm('');
                  setGravidaForm('');
                }
              }}
            >
              <option value="">Selecione um sexo</option>
              <option value="Femea">Fêmea</option>
              <option value="Macho">Macho</option>
            </select>

            {exibirInputsFemea && (
              <>
                <div className="id_"><p>Produção de leite</p></div>
                <select
                  name="select"
                  className="producaoLeite"
                  required
                  onChange={e => setProducaoLeiteForm(e.target.value)}
                >
                  <option value="">Selecione a opção</option>
                  <option value="Sim">Sim</option>
                  <option value="Nao">Não</option>
                </select>

                <div className="id_"><p>Dando leite?</p></div>
                <select
                  name="select"
                  className="dandoLeiteBovino"
                  required
                  onChange={e => setDandoLeiteForm(e.target.value)}
                >
                  <option value="">Selecione a opção</option>
                  <option value="Sim">Sim</option>
                  <option value="Nao">Não</option>
                </select>

                <div className="id_"><p>Grávida</p></div>
                <select
                  name="select"
                  className="gravidaBovino"
                  required
                  onChange={e => {
                    setGravidaForm(e.target.value);
                    if (e.target.value === 'Sim') {
                      setExibirInputsGestacao(true);
                    } else {
                      setExibirInputsGestacao(false);
                      setDataInicioForm('');
                    }
                  }}
                >
                  <option value="">Selecione a opção</option>
                  <option value="Sim">Sim</option>
                  <option value="Nao">Não</option>
                </select>

                {exibirInputsGestacao && (
                  <>
                    <div className="id_"><p>Data de Início</p></div>
                    <input
                      type="date"
                      className="dataInicioBovino"
                      required
                      onChange={e => setDataInicioForm(e.target.value)}
                    />

                  
                  </>
                )}
              </>
            )}

            <div className="id_"><p>Reprodutor</p></div>
            <select name="select" className="reprodutorBovino" required onChange={e => setReprodutorForm(e.target.value)}>
              <option value="">Selecione a opção</option>
              <option value="Femea">Sim</option>
              <option value="Macho">Nao</option>
            </select>

            <div className="id_"><p>Cor</p></div>
            <select name="select" className="corBovino" required onChange={e => setCorForm(e.target.value)}>
              <option value="">Selecione uma cor</option>
              <option value="Preto">Preto</option>
              <option value="Branco">Branco</option>
              <option value="Laranja">Laranja</option>
              <option value="Amarelo">Amarelo</option>
              <option value="Vermelho">Vermelho</option>
            </select>

            <div className="id_"><p>Raça</p></div>
            <select className="racaBovino" required onChange={e => setRacaForm(e.target.value)}>
              <option value="">Selecione a raça</option>
              <option value="Angus">Angus</option>
              <option value="Holandesa">Holandesa</option>
              <option value="Nelore">Nelore</option>
              {/* Adicione mais opções de raças aqui */}
            </select>

            <div className="id_"><p>Chifre</p></div>
            <select
              name="select"
              className="chifreBovino"
              required
              onChange={e => {
                e.target.value === 'Sim' ? setChifreForm(true) : setChifreForm(false);
              }}
            >
              <option value="">Selecione se possui chifre</option>
              <option value="Sim">Sim</option>
              <option value="Nao">Não</option>
            </select>

            <button
              type="submit"
              className="botaoCadastrar btn btn-success"
              style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", margin: "40px", width: "80px", margin: "40px", padding: 4, borderRadius: "5px" }} onSubmit={e => navigate('/inicio/inicio')}
            >
              Cadastrar
            </button>
          </div>

        </form>


      </div>

    </div>
  );
};

export default CadastrarBovino;
