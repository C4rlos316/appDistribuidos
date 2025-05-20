from pydantic_settings import BaseSettings, Field

#hereda de base settings
class Settings(BaseSettings):
    #vamos a validar la base de datos que sea un string o int 
    mongo_user: str
    mongo_pass:str
    mongo_host:str
    mongo_port:int
    mongo_db:str 


if __name__ == "__main__":
    from v1.utils.logger import Logger

    logger = Logger()
    settings = Settings(mongo_user="user")

    logger.info('MongoDB Settings':{ settings.json() }")

    settings = Settings(
        mongo_user="user",
        mongo_pass="pass",
        mongo_host="localhost",
        mongo_port=27017,
        mongo_db="test_db"
    )
    print(settings.json())  # Output the settings as JSON