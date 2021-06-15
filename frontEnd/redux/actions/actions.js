import api from "../api"

export const actionTypes = {
    CREATE:'CREATE',
    UPDATE:'UPDATE',
    DELETE:'DELETE',
    FETCH_ALL:"FETCH_ALL"
}

export const fetchAll = ()=> dispatch =>{
    api.data().fetchAll()
    .then(res =>{
        console.log(res)
        dispatch({
            type:actionTypes.FETCH_ALL,
            payload:res.data
        })
    })
    .catch(err=>console.log(err))
    dispatch({
        type:actionTypes.FETCH_ALL,
        payload:[]
    })
};

export const create = (data,submit)=> dispatch =>{
    api.data().create(data)
    .then(res=>{
        dispatch({
            type:actionTypes.CREATE,
            payload:res.data
        })
        submit()
    })
    .catch(err=>console.log(err))
}


export const update = (id,data,submit)=> dispatch =>{
    api.data().update(id,data)
    .then(res=>{
        dispatch({
            type:actionTypes.UPDATE,
            payload:res.data
        })
        submit()
    })
    .catch(err=>console.log(err))
}

export const Delete = (id,submit)=> dispatch =>{
    api.data().delete(id)
    .then(res=>{
        dispatch({
            type:actionTypes.DELETE,
            payload:res.id
        })
        submit()
    })
    .catch(err=>console.log(err))
}
