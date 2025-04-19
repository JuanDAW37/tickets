import React, {useState} from 'react';
import { helpHttp } from '../helper/Helper';
import { Message } from '../message/Message';
import { createPdf } from '../print/Print.js'
import './Form.css';

export const Form = () => {
    let meses = [{mes:1, nombre:'Enero'},{mes:2, nombre:'Febrero'},{mes:3, nombre:'Marzo'},{mes:4, nombre:'Abril'},
        {mes:5, nombre:'Mayo'},{mes:6, nombre:'Junio'},{mes:7, nombre:'Julio'},{mes:8, nombre:'Agosto'},
        {mes:9, nombre:'Septiembre'},{mes:10, nombre:'Octubre'},{mes:11, nombre:'Noviembre'},{mes:12, nombre:'Diciembre'}
    ];
    let hoy = new Date();
    const initialForm = {
        numero:0,
        fecha:hoy.toLocaleDateString('es-ES'),
        descripcion:'',
        base:'0.00',
        iva:'0.00',
        cuota:'0.00',
        total:'0.00'
    }

    const [db, setDb] = useState([]);    
    const [error, setError] = useState(null);
    const [mes, setMes] = useState(0);
    
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

    const calcTotal = () => {
        let base = parseFloat(form.base);
        let iva = parseFloat(form.iva);
        let cuota = base * iva / 100;
        let total = base + cuota;
        setForm({
            ...form,
            cuota: cuota.toFixed(2),
            total: total.toFixed(2),
        })
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
    
    const printData = () => {        
        let options = {            
            method: 'GET',
            headers: {'Content-Type': 'application/json'}            
        }
        let endpoint = mes === 0 ? url : `${url}/${mes}`;
        api.get(endpoint, options)
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
                    <input type="number" name="numero" id="numero" className='numero' value={form.numero} onChange={handleForm} />
                    <label htmlFor="fecha">Fecha</label>
                    <input type="text" name="fecha" id="fecha" className='fecha' value={form.fecha} onChange={handleForm} /><br/>
                    <label htmlFor="descripcion">Descripcion</label>
                    <input type="text" name="descripcion" id="descripcion" value={form.descripcion} onChange={handleForm} />
                    <label htmlFor="base">Base</label>
                    <input type="number" name="base" id="base" className='importes' value={form.base} onChange={handleForm}/>
                    <label htmlFor="iva">Iva</label>
                    <input type="number" name="iva" id="iva" className='importes' value={form.iva} onBlur={calcTotal} onChange={handleForm} />
                    <label htmlFor="cuota">Cuota</label>
                    <input type="number" name="cuota" id="cuota" className='importes' value={form.cuota} onChange={handleForm} />
                    <label htmlFor="total">Total</label>
                    <input type="number" name="total" id="total" className='importes' value={form.total} onChange={handleForm} />
                    <label htmlFor="mes">Mes</label>
                    <select name="mes" id="mes" className='mes' onChange={(e) => setMes(e.target.value)}>
                        <option value="0">Todos</option>
                        {meses.map((item) => (
                            <option key={item.mes} value={item.mes}>{item.nombre}</option>
                        ))}
                    </select>
                    <section className='botones'>
                        <button className="nuevo" type="submit" id="crear">Nuevo</button>
                        <button className="borrar" type="button" id="borrar" onClick={deleteData}>Borrar</button>
                        <button className="imprimir" type="button" onClick={printData} id="imprimir">Imprimir</button>    
                    </section>                    
                </form>                                
                {error && <Message status={error.status} statusText={error.statusText}/>}        
            </>
    )
}