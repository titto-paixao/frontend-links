import React, {useState, useEffect} from 'react';

import {FiTrash, FiEdit2, FiPlus, FiX} from 'react-icons/fi'

import api from '../../services/api'

import { Container, Title, Form, Links, Add, Modal, FormCreate } from './styles';

interface ILink {
  id:number;
  name:string;
  link:string;
}

const Dashboard: React.FC = () => {
  const [visibleModalCreate, setVisibleModalCreate] = useState<boolean>(false)

  const [extra, setExtra] = useState<number>(Math.random())

  const [links, setLinks] = useState<ILink[]>([])

  const [values, setValues] = useState({
    name:"",
    link:""
  })

  useEffect(() => {
    api.get("/")
      .then(response => {
        setLinks(response.data)
      })
  }, [visibleModalCreate, extra])

  const createLink = async () => {
    await api.post("/", values)
      .then(response => {
        setValues({
          name:"",
          link:""
        })
        setVisibleModalCreate(false)
      })
  }
  
  const deleteLink = async (id:number) => {
    await api.delete(`/${id}`)
      .then(response => {
        setExtra(Math.random())
      })
  }
  
  return (
    <>
      <Modal open={visibleModalCreate} >
        <div className="container">
          <div className="close">
            <div/>
            <div/>
            <FiX size={20} onClick={() => setVisibleModalCreate(false)} />
          </div>
          

          <FormCreate>
            <div className="form_input">
              <label htmlFor="Título">Título</label>
              <input
                type="text"
                value={values.name}
                onChange={(event) => {
                  setValues((prevState) => ({
                    ...prevState,
                    name:event.target.value
                  }))
                }}
              />
            </div>
            <div className="form_input">
              <label htmlFor="Título">Link</label>
              <input
                type="text"
                value={values.link}
                onChange={(event) => {
                  setValues((prevState) => ({
                    ...prevState,
                    link:event.target.value
                  }))
                }}
              />
            </div>
            <button
              disabled={values.name === "" || values.link === "" ? true : false}
              onClick={() => createLink()}
            >Adicionar link</button>
          </FormCreate>

        </div>
      </Modal>

      <Container>

        <Title>Links cadastrados no aplicativo</Title>

        <Form>
          <input placeholder="Pesquisar link"/>
          <button type="submit">Buscar</button>
        </Form>

        <Links>
          {links.map(item => (
            <a key={item.id} >
              <div>
                <strong>{item.name}</strong>
                <p>{item.link}</p>
              </div>
              <div className="icons">
                <FiEdit2 size={20} className="icon" style={{marginRight:12}} />
                <FiTrash size={20} className="icon" onClick={() => deleteLink(item.id)} />
              </div>
            </a>
          ))}
        </Links>

        <Add onClick={() => setVisibleModalCreate(true)} >
          <FiPlus size={64} />
        </Add>

      </Container>
    </>
  );
};

export default Dashboard;
