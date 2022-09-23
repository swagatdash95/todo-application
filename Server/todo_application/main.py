import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from strawberry.fastapi import GraphQLRouter

from . import graphql

from .router import todo

graphql_app = GraphQLRouter(graphql.schema)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://10.18.61.35:8080/",
                   "http://192.168.0.56:8080", "http://10.18.61.43:8080", "http://0.0.0.0:8080"],
    # allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(todo.router)
app.include_router(graphql_app, prefix="/graphql")


# if __name__ == "__main__":
#     uvicorn.run(app, host="127.0.0.1", port=9000)
