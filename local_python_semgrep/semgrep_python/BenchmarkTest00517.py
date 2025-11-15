#{fact rule=docker-arbitrary-container-run@v1.0 defects=0}

import docker
client = docker.from_env()

def ok2():
    # ok: docker-arbitrary-container-run
    client.containers.create("alpine", 'echo hello world')

#{/fact}
