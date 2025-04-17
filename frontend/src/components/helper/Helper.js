export const helpHttp = () => {
    async function customFetch(endpoint, options){
        const defaultHeader = {accept: 'application/json'};
        const controller = new AbortController(); 
        options.signal = controller.signal;
        options.method = options.method || 'GET';
        options.header = options.header ? {...defaultHeader, ...options.header } : defaultHeader;
        options.body = options.body || false;                
        if(!options.body) delete options.body;        
        setTimeout(()=>{controller.abort()}, 3000);            
        const response = await fetch(endpoint, options);            
        if (!response.ok) {
            return {error:true, status: response.status || '00', statusText:response.statusText || 'Ocurrió un error'}
        }                    
        return await response.json();      
    }

    const get = (url, options = {}) => customFetch(url, options)

    const post = (url, options = {}) => {
        options.method = 'POST';
        return customFetch(url, options);
    }

    const put = (url, options = {}) => {
        options.method = 'PUT';
        return customFetch(url, options);
    }

    const del = (url, options = {}) => {
        options.method = 'DELETE';
        return customFetch(url, options);
    }

    //Devolución de los métodos
    return {
        get,
        post,
        put,
        del
    }
}