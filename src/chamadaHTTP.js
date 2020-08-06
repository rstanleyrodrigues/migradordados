import { get, post } from 'axios';
import { NONAME } from 'dns';
import { FornecedorConversao } from './model/fornecedorConversao';
import { isUndefined } from 'util';

export class StatusChamada {

    codigoStatus = 0;
    descricaoStatus = "";

    constructor(codigoStatus, descricaoStatus){

        this.codigoStatus = codigoStatus;
        this.descricaoStatus = descricaoStatus;

    }
}

export async function fornecedorGET(id) {

    const response
    try {
        response = await get(`http://poc-base-corp.sa-east-1.elasticbeanstalk.com/fornecedor/${id}`, { headers: { 'accept': 'application/json' } });
        if(response.status == 200){            
            return "Foi migrado com sucesso";
        }
        return;

    } catch (err) {
        console.log(`Falha ao realizar a chamada:${err}`);
        return err.response.status;
    }
}

export async function fornecedorConversaoPOST (fornecedorConversao, municipioIBGE, siglaProduto, IdUG){
    
    const response
    try {
        const config = { headers: { 'accept': 'application/json', 
                                    'Codigo-Municipio': municipioIBGE,
                                    'Codigo-Produto': siglaProduto,
                                    'idUnidadeGestora': IdUG } };

        response = await post('http://poc-base-corp.sa-east-1.elasticbeanstalk.com/fornecedor/',
         fornecedorConversao,{ headers: { 'accept': 'application/json' } });
        if(response.status == 200){            
            console.log(`O Fornecedor Código: ${fornecedorConversao.idLegado} Foi migrado com sucesso`);
        }
        return;

    } catch (err) {
        console.log(`Falha ao converter o Fornecedor: ${fornecedorConversao.idLegado} ERRO:  ${err}`);
    }


}

