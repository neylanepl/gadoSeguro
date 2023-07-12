import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Menu from '../../components/menu';


const EditarBovino = () => {
  const [idFazendaForm, setIdFazendaForm] = useState(0);
  const [nomeForm, setNomeForm] = useState('');
  const [pesoForm, setPesoForm] = useState(0);
  const [sexoForm, setSexoForm] = useState('');
  const [reprodutorForm, setReprodutorForm] = useState('');
  const [corForm, setCorForm] = useState('');
  const [chifreForm, setChifreForm] = useState(false);
  const [exibirInputsFemea, setExibirInputsFemea] = useState(false);
  const [producaoLeiteForm, setProducaoLeiteForm] = useState('');
  const [gravidaForm, setGravidaForm] = useState('');
  const [dandoLeiteForm, setDandoLeiteForm] = useState('');
  const [exibirInputsGestacao, setExibirInputsGestacao] = useState(false);
  const [dataInicioForm, setDataInicioForm] = useState('');

  const handleSubmitForm = async e => { }

  return (
    <div id="wrapperBovino" style={{ background: "#F0F1DF" }}>
      <Menu />
      <h1 className="fs-1 text-center" style={{ background: "#E0E7CA", padding: "20px" }}> Editar Bovino </h1>
      <div className="formularioCadastroBovino" style={{ marginBottom: "10%" }}>
        <form className="formulario" onSubmit={e => { handleSubmitForm(e) }}>
          <div className="sub-div">
            <div className="id_"><p>Nome</p></div>
            <input type="text" className="nomeBovino" onChange={e => setNomeForm(e.target.value)} />

            <div className="id_"><p>Fazenda</p></div>
            <select className="vacaBovino" required onChange={e => setIdFazendaForm(e.target.value)}>
              <option value="">Selecione a fazenda</option>
              <option value="fazenda">fazenda 1</option>
              <option value="fazenda">fazenda 2</option>
            </select>

            <div className="id_"><p>Peso</p></div>
            <input type="number" className="pesoBovino" onChange={e => setPesoForm(e.target.value)} />


            <div className="id_"><p>Reprodutor</p></div>
            <div className="id_">
              <div className="check-option" style={{ marginBottom: "15px", display: "flex", justifyContent: "space-evenly" }}>
                <Form.Check type="radio" id="Sim" label="Fêmea" onClick={(e) => setSexoForm(e.target.id)} />
                <Form.Check type="radio" id="Macho" label="Macho" onClick={(e) => setSexoForm(e.target.id)} />
              </div>
            </div>

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
                <input type="number" className="producaoLeite" required onChange={e => setProducaoLeiteForm(e.target.value)} />

                <div className="id_"><p>Dando leite?</p></div>
                <select
                  name="select"
                  className="dandoLeiteBovino"
                  required
                  onChange={e => setDandoLeiteForm(e.target.value)}
                >
                  <option value="">Selecione a opção</option>
                  <option value={1}>Sim</option>
                  <option value={0}>Não</option>
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
                  <option value={1}>Sim</option>
                  <option value={0}>Não</option>
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

            <div className="id_"><p>Cor</p></div>
            <div className="id_">
              <div className="check-option" style={{ marginBottom: "15px", display: "flex", justifyContent: "space-evenly" }}>
                <Form.Check type="radio" id="Preto" label="Preto" onClick={(e) => setCorForm(e.target.id)} />
                <Form.Check type="radio" id="Branco" label="Branco" onClick={(e) => setCorForm(e.target.id)} />
                <Form.Check type="radio" id="Laranja" label="Laranja" onClick={(e) => setCorForm(e.target.id)} />
                <Form.Check type="radio" id="Amarelo" label="Amarelo" onClick={(e) => setCorForm(e.target.id)} />
                <Form.Check type="radio" id="Vermelho" label="Vermelho" onClick={(e) => setCorForm(e.target.id)} />
              </div>
            </div>

            <div className="id_"><p>Chifre</p></div>
            <div className="id_">
              <div className="check-option" style={{ marginBottom: "15px", display: "flex", justifyContent: "space-evenly" }}>
                <Form.Check type="radio" id="Chifre" label="Sim" onClick={(e) => setChifreForm(e.target.id)} />
                <Form.Check type="radio" id="Chifre" label="Não" onClick={(e) => setChifreForm(e.target.id)} />
              </div>
            </div>
            <button variant="warning" type="submit" value="submit" className="botaoEditar btn btn-success" style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", width: "60px", margin: "40px" }}>Editar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarBovino;