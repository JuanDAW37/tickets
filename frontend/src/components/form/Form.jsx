import React, {useState} from 'react';
import { helpHttp } from '../helper/Helper';
import { Message } from '../message/Message';
import { createPdf } from '../print/Print.js'
import './Form.css';
//import { json } from 'node:stream/consumers';

export const Form = () => {
    let hoy = new Date();
    const initialForm = {
        numero:0,
        fecha:hoy.toLocaleDateString('es-ES'),
        descripcion:'',
        base:0.00,
        iva:0.00,
        cuota:0.00,
        total:0.00
    }

    const [db, setDb] = useState([]);    
    const [error, setError] = useState(null);
    
    const [form, setForm] = useState(initialForm);

    let api = helpHttp();
    let url = 'http://localhost:1234/tickets';

    const handleForm = (e) => {
        e.preventDefault();
        setForm({            
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = (e) => {
        setError(null);
        e.preventDefault();
        const data = {
            numero:parseInt(form.numero),
            fecha:form.fecha,
            descripcion:form.descripcion,
            base:parseFloat(form.base),
            iva:parseFloat(form.iva),
            cuota:parseFloat(form.cuota),
            total:parseFloat(form.total)
        }
        let options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }            
        api.post(url, options).then((res)=>{            
            if (!res.error) {                
                setDb([...db, res.body]);
            }else{
                setError(res);
            }
        });
        setForm(initialForm);
    }


    const deleteData = () => {
        let isDelete = window.confirm("¿Estás seguro de eliminar todo?");
        if (isDelete) {
            let endpoint = `${url}`;
            let options = { 
                method: 'DELETE',               
                headers:{'Content-Type':'application/json'}
            }
            api.del(endpoint, options).then((res)=>{
                if (!res.error) {                                        
                    setDb([]);
                }else{
                    setError(res);
                }
            });
        }
    };
    
    //TODO:FALTA IMPRIMIR, CON PDF-LIB
    const printData = () => {
        let options = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}            
        }
        api.get(url, options)
        .then((res)=>{ 
            setDb(res);
            createPdf(res);
        });
    }

    return (
        <> 
            <h2>Tickets de TPV y caja</h2>            
                <form onSubmit={handleSubmit}>                
                    <label htmlFor="numero">Número</label>
                    <input type="number" name="numero" id="numero" value={form.numero} onChange={handleForm} /><br/>
                    <label htmlFor="fecha">Fecha</label>
                    <input type="text" name="fecha" id="fecha" value={form.fecha} onChange={handleForm} /><br/>
                    <label htmlFor="descripcion">Descripcion</label>
                    <input type="text" name="descripcion" id="descripcion" value={form.descripcion} onChange={handleForm} /><br/>
                    <label htmlFor="base">Base</label>
                    <input type="number" name="base" id="base" value={form.base} onChange={handleForm}/><br />
                    <label htmlFor="iva">Iva</label>
                    <input type="number" name="iva" id="iva" value={form.iva}  onChange={handleForm} /><br />
                    <label htmlFor="cuota">Cuota</label>
                    <input type="number" name="cuota" id="cuota" value={form.cuota} onChange={handleForm} /><br />
                    <label htmlFor="total">Total</label>
                    <input type="number" name="total" id="total" value={form.total} onChange={handleForm} /><br />
                    <button className="nuevo" type="submit" id="crear">Nuevo</button>
                    <button className="borrar" type="button" id="borrar" onClick={deleteData}>Borrar</button>
                    <button className="imprimir" type="button" onClick={printData} id="imprimir">Imprimir</button>
                </form>                                
                {error && <Message status={error.status} statusText={error.statusText}/>}        
            </>
    )
}