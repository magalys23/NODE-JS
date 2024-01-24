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
        fnShowMessage();
        console.log(body);
    });
}