const IP="192.168.0.107";
const PORT=3000;
const URL="http://"+IP+":"+PORT+"/";

export const getAllLaptos=(fnRefreshList)=>{
    console.log("getAllLaptos..");
    fetch(
        URL+"laptops"
    ).then(
        (response)=>{return response.json()}
    ).then(
        (body)=>{
            fnRefreshList(body);
        }
    )
}
export const saveLaptoRest=(lapto,fnShowMessage)=>{
    const config={
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            marca:lapto.marca,
            procesador:lapto.procesador,
            memoria:lapto.memoria,
            disco:lapto.disco
      
            })
    }
    fetch(
        URL+"laptops",config
    )
    .then(response=>response.json())
    .then(body=>{
        fnShowMessage("Lapto creada");
        console.log(body);
    });
}
export const updateLaptoRest=(lapto,fnShowMessage)=>{
    const config={
        method:"PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            id:lapto.id,
            marca:lapto.marca,
            procesador:lapto.procesador,
            memoria:lapto.memoria,
            disco:lapto.disco
      
            })
    }
    fetch(
        URL+"laptops/"+lapto.id,config
    )
    .then(response=>response.json())
    .then(body=>{
        fnShowMessage("Lapto actualizada");
        console.log(body);
    });
}
export const deleteLaptoRest=(contact,fnShowMessage)=>{
    const config={
        method:"DELETE"
        
    }
    fetch(
        URL+"laptops/"+contact.id,config
    )
    .then(response=>response.json())
    .then(body=>{
        fnShowMessage("Lapto eliminada");
        console.log(body);
    });
}