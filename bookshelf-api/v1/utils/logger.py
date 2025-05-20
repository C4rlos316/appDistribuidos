

class Logger:
    def __init__(self, name: str):
        self.name = name

    def debug(self, message: str):
        print(f"[DEBUG] {self.name}: {message}")

    def info(self, message: str):
        print(f"[INFO] {self.name}: {message}")

    def warning(self, message: str):
        print(f"[WARNING] {self.name}: {message}")

    def error(self, message: str):
        print(f"[ERROR] {self.name}: {message}")

    def critical(self, message: str):
        print(f"[CRITICAL] {self.name}: {message}")


#su esto es arhivo principal ejecuta esto sino ni lo hara
if __name__ == "__main__":
    logger = Logger("TestLogger")
    logger.debug("This is a debug message")
    logger.info("This is an info message")
    logger.warning("This is a warning message")
    logger.error("This is an error message")
    logger.critical("This is a critical message") 
