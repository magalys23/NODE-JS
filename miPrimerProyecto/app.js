const express=require("express");
const bodyParser=require("body-parser");

const app=express();
const puerto=3001;
//Contactos: id, nombre, apellido, celular

app.use(bodyParser.json());

app.use("/contactos",(request,response,next)=>{
    // console.log("Ingresa a Middleware");
    console.log("Headers: ",request.headers);
    console.log("Body: ",request.body);
    next();
});
app.get("/contactos",(request,response)=>{
    const contactos=[
        {id:1,nombre:"Magaly",apellido:"Chulde",celular:"0989432166"},
        {id:2,nombre:"Elena",apellido:"Chulde",celular:"0999432188"},
        {id:3,nombre:"Amber",apellido:"Yanascual",celular:"0955435122"},
    ];
    console.log("Ingresa a get");
    response.send(contactos);
});

app.post("/contactos",(request,response)=>{
    request.body.id=99;
    response.send(request.body);
});

app.put("/contactos/:idParam",(request,response)=>{
    const id=request.params.idParam;
    console.log("id ",id);
    response.send(request.body);
});

app.delete("/contactos/:id",(request,response)=>{
    const id=request.params.id;
    console.log("id: ",id);
    response.send({id:id});
});
app.listen(puerto,()=>{
    console.log("Servidor listo en el puerto "+ 3001);
});