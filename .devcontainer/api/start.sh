#!/bin/bash

pip3 install --upgrade pip
pip3 install fastapi[standard]

#conexion a bases de datos para ayudar a validar y parsear datos
pip3 install pydantic_settings

#bases de datos 
pip3 install motor
pip3 install tenacity