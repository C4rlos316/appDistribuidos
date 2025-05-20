from v1.utils.settings import Settings
from v1.utils.logger import Logger
from motor.motor_asyncio import AsyncIOMotorClient
import tenacity
import pymongo.errors import ServerSelectionTimeOutError, PyMongoError


logger = Logger()
settings = Settings()

#crear clases

class MongoDBConnection:

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance._initialized = False
        return cls._instance

    def __init__(self):
        if self._initialized:
            return

        self.uri = ( 
            f"mongodb://{settings.mongo_user}:{settings.mongo_pass}"
            f"@{settings.mongo_host}:{settings.mongo_port}/{settings.mongo_db}?authSource=admin"
        )

        self.client = AsyncIOMotorClient(
            self.uri
            serverSelectionTimeoutMS=5000,
            connectTimeoutMS=5000,
            maxPoolSize=20,
            minPoolSize=5,)

        self._database = None
        self._initialized = True

        @tenacity.retry(
            #hasta cuando hara los intentos sino mata todo
            stop=tenacity.stop_after_attempt(3),
            #cada cuanto hara los intentos o esperara 5 min
            wait=tenacity.wait_exponential(multiplier=1, min=1, max=5),
            #error que se muestra cuando no hya mas intentos
            retry=tenacity.retry_if_exception_type(ServerSelectionTimeOutError),
            #antes de intentar el primer  intento que hara 
            before=lambda_: logger.info("Retrying to connect to MongoDB..."),
        )

        async def connect(self):
            try:
                # Intenta conectarse a la base de datos
                logger.info("Connecting to MongoDB...")
                await self.client.admin.command('ping')
                if self._database is None:
                    self._database = self.client[settings.mongo_db]
                logger.info("MongoDB connection successful.")

            except ServerSelectionTimeOutError as e:
                logger.error(f"MongoDB connection failed: {e}")
                raise Exception('MongoDB connection failed revisa la configuracion')
            except PyMongoError as e:
                logger.error(f"MongoDB connection error: {e}")
                raise Exception('MongoDB connection error al intentar contnectar')
            except Exception as e:
                logger.error(f"Unexpected error: {e}")
                raise Exception('Unexpected error al intentar conectar')

    async def close(self):
        if self.client:
            try:
                logger.info("MongoDB connection closed.")
                self.client.close()
                self.client = None
                self._database = None
                MongoDBConnection._instance = None
                logger.info("MongoDB connection instance reset.")

            except Exception as e:
                logger.error(f"Error closing MongoDB connection: {e}")