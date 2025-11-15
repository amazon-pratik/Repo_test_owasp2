#{fact rule=code-injection@v1.0 defects=0}

import docker
client = docker.from_env()

def ok1():
    # ok: docker-arbitrary-container-run
    client.containers.run("alpine", 'echo hello world')

#{/fact}
