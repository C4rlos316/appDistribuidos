from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException
from fastapi import Body

app = FastAPI()

@app.get('/')
def home():
    return {'message': 'Hello World!'}


#decorador para generar rutas solo lo usaremos para esto
@app.get('/users')
#Se crea una funcion que va a definir el endpoint
def get_users():
    users = [
        { 'id': 1, 'name': 'John Doe'},
        {'id': 2, 'name': 'Jane Doe'},
        {'id': 3, 'name': 'Jim Doe'}
    ]
    
    #usamos el de fast api esto es para darle formato aa todo 
    #lo que tengamos en la respuesta para tener un json 
    
    return JSONResponse(content={'users': users}, status_code=200)


#curl http://localhost:8000/users



@app.get('/users/{name}')
def user(name: str):
    return {'message': f'Welcome {name}'}


#manejar errores en api 

#se ejecuta el error y forzamos un erro en este momento 
#en java e tipo throw
@app.get('/error')
def cause_error():
    raise HTTPException(status_code=400, detail='This is a custom error message')


#cada peticion que se le haga a una API sera un request 
#el get, put, patch, delete, post

#el get es para obtener datos

#el post es para crear datos

#el put es para actualizar datos si se tienen 5 atributos se actualizan los 5

#el delete es para eliminar datos

#el patch es para actualizar parcialmente los datos si se
#tienen 5 atributos se actualiza solo el que se quiere


#app.get app.put app.post app.delete app.patch

@app.post('/create/')
#todo lo que venga de la solicitud lo va a guardar en el item
def create_item(item: dict = Body(...)):
    return {'message': f'Item {item["name"]} created successfully'}


#curl -X POST -H "Content-Type: application/json" -d '{"name": "Books"} http://localhost:8000/create/'


#Codigo de status request 
#100 Continue
#101 Switching Protocols(Http cambia a HTTPS)
#200 OK
#201 Created ->se creo correctamente lo usamos en insertar
#202 Accepted 
#204 No Content -> estuvo bien pero no regresa nada para el delete 
#301 Moved Permanently -> recurso que se usa ya no existe y se movio a otro lado 
#302 Found ->
#307 Temporary Redirect 
#308 Permanent Redirect -> cambios permanentes

#del lado del cliente
#400 Bad Request -> error en la peticion
#401 Unauthorized -> no autorizado
#403 Forbidden -> no tienes permiso para acceder a este recurso
#404 Not Found -> no se encontro el recurso

#por parte del programador servidor 
#500 Internal Server Error -> error en el servidor no hay conexion en api la base fallo muchas cosas 
#502 Bad Gateway -> el servidor no responde el redirreccionamiento en la api
#503 Service Unavailable -> el servidor no esta disponible por completo 
#504 Gateway Timeout -> el servidor no responde

#como se generan estos status 

#se crea el 201 siempre para un submit
@app.post('/submit', status_code=201)
def submit_data():
    return {'message': 'Data submitted successfully'}
#curl -X POST http://localhost:8000/submit


#schema para validad datos que envia el usuario
#model para la base 
#script 
#router para las rutas
#services para fronted
#utils

#trabajaremos con RESTfull API mandar y recibir request completos
